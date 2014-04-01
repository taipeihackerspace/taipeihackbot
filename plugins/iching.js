/*
 * I-Ching plugin
 */

var chars = {
    1: "䷀ Force (乾 qián) http://en.wikipedia.org/wiki/I_Ching_hexagram_01",
    2: "䷁ Field (坤 kūn) http://en.wikipedia.org/wiki/I_Ching_hexagram_02",
    3: "䷂ Sprouting (屯 zhūn) http://en.wikipedia.org/wiki/I_Ching_hexagram_03",
    4: "䷃ Enveloping (蒙 méng) http://en.wikipedia.org/wiki/I_Ching_hexagram_04",
    5: "䷄ Attending (需 xū) http://en.wikipedia.org/wiki/I_Ching_hexagram_05",
    6: "䷅ Arguing (訟 sòng) http://en.wikipedia.org/wiki/I_Ching_hexagram_06",
    7: "䷆ Leading (師 shī) http://en.wikipedia.org/wiki/I_Ching_hexagram_07",
    8: "䷇ Grouping (比 bǐ) http://en.wikipedia.org/wiki/I_Ching_hexagram_08",
    9: "䷈ Small Accumulating (小畜 xiǎo chù) http://en.wikipedia.org/wiki/I_Ching_hexagram_09",
    10: "䷉ Treading (履 lǚ) http://en.wikipedia.org/wiki/I_Ching_hexagram_10",
    11: "䷊ Pervading (泰 tài) http://en.wikipedia.org/wiki/I_Ching_hexagram_11",
    12: "䷋ Obstruction (否 pǐ) http://en.wikipedia.org/wiki/I_Ching_hexagram_12",
    13: "䷌ Concording People (同人 tóng rén) http://en.wikipedia.org/wiki/I_Ching_hexagram_13",
    14: "䷍ Great Possessing (大有 dà yǒu) http://en.wikipedia.org/wiki/I_Ching_hexagram_14",
    15: "䷎ Humbling (謙 qiān) http://en.wikipedia.org/wiki/I_Ching_hexagram_15",
    16: "䷏ Providing-For (豫 yù) http://en.wikipedia.org/wiki/I_Ching_hexagram_16",
    17: "䷐ Following (隨 suí) http://en.wikipedia.org/wiki/I_Ching_hexagram_17",
    18: "䷑ Corrupting (蠱 gǔ) http://en.wikipedia.org/wiki/I_Ching_hexagram_18",
    19: "䷒ Nearing (臨 lín) http://en.wikipedia.org/wiki/I_Ching_hexagram_19",
    20: "䷓ Viewing (觀 guān) http://en.wikipedia.org/wiki/I_Ching_hexagram_20",
    21: "䷔ Gnawing Bite (噬嗑 shì kè) http://en.wikipedia.org/wiki/I_Ching_hexagram_21",
    22: "䷕ Adorning (賁 bì) http://en.wikipedia.org/wiki/I_Ching_hexagram_22",
    23: "䷖ Stripping (剝 bō) http://en.wikipedia.org/wiki/I_Ching_hexagram_23",
    24: "䷗ Returning (復 fù) http://en.wikipedia.org/wiki/I_Ching_hexagram_24",
    25: "䷘ Without Embroiling (無妄 wú wàng) http://en.wikipedia.org/wiki/I_Ching_hexagram_25",
    26: "䷙ Great Accumulating (大畜 dà chù) http://en.wikipedia.org/wiki/I_Ching_hexagram_26",
    27: "䷚ Swallowing (頤 yí) http://en.wikipedia.org/wiki/I_Ching_hexagram_27",
    28: "䷛ Great Exceeding (大過 dà guò) http://en.wikipedia.org/wiki/I_Ching_hexagram_28",
    29: "䷜ Gorge (坎 kǎn) http://en.wikipedia.org/wiki/I_Ching_hexagram_29",
    30: "䷝ Radiance (離 lí) http://en.wikipedia.org/wiki/I_Ching_hexagram_30",
    31: "䷞ Conjoining (咸 xián) http://en.wikipedia.org/wiki/I_Ching_hexagram_31",
    32: "䷟ Persevering (恆 héng) http://en.wikipedia.org/wiki/I_Ching_hexagram_32",
    33: "䷠ Retiring (遯 dùn) http://en.wikipedia.org/wiki/I_Ching_hexagram_33",
    34: "䷡ Great Invigorating (大壯 dà zhuàng) http://en.wikipedia.org/wiki/I_Ching_hexagram_34",
    35: "䷢ Prospering (晉 jìn) http://en.wikipedia.org/wiki/I_Ching_hexagram_34",
    36: "䷣ Brightness Hiding (明夷 míng yí) http://en.wikipedia.org/wiki/I_Ching_hexagram_36",
    37: "䷤ Dwelling People (家人 jiā rén) http://en.wikipedia.org/wiki/I_Ching_hexagram_37",
    38: "䷥ Polarising (睽 kuí) http://en.wikipedia.org/wiki/I_Ching_hexagram_38",
    39: "䷦ Limping (蹇 jiǎn) http://en.wikipedia.org/wiki/I_Ching_hexagram_39",
    40: "䷧ Taking-Apart (解 xiè) http://en.wikipedia.org/wiki/I_Ching_hexagram_40",
    41: "䷨ Diminishing (損 sǔn) http://en.wikipedia.org/wiki/I_Ching_hexagram_41",
    42: "䷩ Augmenting (益 yì) http://en.wikipedia.org/wiki/I_Ching_hexagram_42",
    43: "䷪ Parting (夬 guài) http://en.wikipedia.org/wiki/I_Ching_hexagram_43",
    44: "䷫ Coupling (姤 gòu) http://en.wikipedia.org/wiki/I_Ching_hexagram_44",
    45: "䷬ Clustering (萃 cuì) http://en.wikipedia.org/wiki/I_Ching_hexagram_45",
    46: "䷭ Ascending (升 shēng) http://en.wikipedia.org/wiki/I_Ching_hexagram_46",
    47: "䷮ Confining (困 kùn) http://en.wikipedia.org/wiki/I_Ching_hexagram_47",
    48: "䷯ Welling (井 jǐng) http://en.wikipedia.org/wiki/I_Ching_hexagram_48",
    49: "䷰ Skinning (革 gé) http://en.wikipedia.org/wiki/I_Ching_hexagram_49",
    50: "䷱ Holding (鼎 dǐng) http://en.wikipedia.org/wiki/I_Ching_hexagram_50",
    51: "䷲ Shake (震 zhèn) http://en.wikipedia.org/wiki/I_Ching_hexagram_51",
    52: "䷳ Bound (艮 gèn) http://en.wikipedia.org/wiki/I_Ching_hexagram_52",
    53: "䷴ Infiltrating (漸 jiàn) http://en.wikipedia.org/wiki/I_Ching_hexagram_53",
    54: "䷵ Converting The Maiden (歸妹 guī mèi) http://en.wikipedia.org/wiki/I_Ching_hexagram_54",
    55: "䷶ Abounding (豐 fēng) http://en.wikipedia.org/wiki/I_Ching_hexagram_55",
    56: "䷷ Sojourning (旅 lǚ) http://en.wikipedia.org/wiki/I_Ching_hexagram_56",
    57: "䷸ Ground (巽 xùn) http://en.wikipedia.org/wiki/I_Ching_hexagram_57",
    58: "䷹ Open (兌 duì) http://en.wikipedia.org/wiki/I_Ching_hexagram_58",
    59: "䷺ Dispersing (渙 huàn) http://en.wikipedia.org/wiki/I_Ching_hexagram_59",
    60: "䷻ Articulating (節 jié) http://en.wikipedia.org/wiki/I_Ching_hexagram_60",
    61: "䷼ Centre Confirming (中孚 zhōng fú) http://en.wikipedia.org/wiki/I_Ching_hexagram_61",
    62: "䷽ Small Exceeding (小過 xiǎo guò) http://en.wikipedia.org/wiki/I_Ching_hexagram_62",
    63: "䷾ Already Fording (既濟 jì jì) http://en.wikipedia.org/wiki/I_Ching_hexagram_63",
    64: "䷿ Not-Yet Fording (未濟 wèi jì) http://en.wikipedia.org/wiki/I_Ching_hexagram_64"
}

var iching = function() {
    var hexagram = Math.floor(Math.random() * 64) + 1;
    return chars[hexagram];
}


var ichingCmd = {
    "help": "iching: answer your question with a hexagram",
    "run": iching
}


var commands = {
    "iching": ichingCmd
}
exports.commands = commands;
