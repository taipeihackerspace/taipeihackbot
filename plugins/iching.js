/*
 * I-Ching plugin
 */

var chars = {
    1: "䷀ Force (乾 qián)",
    2: "䷁ Field (坤 kūn)",
    3: "䷂ Sprouting (屯 zhūn)",
    4: "䷃ Enveloping (蒙 méng)",
    5: "䷄ Attending (需 xū)",
    6: "䷅ Arguing (訟 sòng)",
    7: "䷆ Leading (師 shī)",
    8: "䷇ Grouping (比 bǐ)",
    9: "䷈ Small Accumulating (小畜 xiǎo chù)",
    10: "䷉ Treading (履 lǚ)",
    11: "䷊ Pervading (泰 tài)",
    12: "䷋ Obstruction (否 pǐ)",
    13: "䷌ Concording People (同人 tóng rén)",
    14: "䷍ Great Possessing (大有 dà yǒu)",
    15: "䷎ Humbling (謙 qiān)",
    16: "䷏ Providing-For (豫 yù)",
    17: "䷐ Following (隨 suí)",
    18: "䷑ Corrupting (蠱 gǔ)",
    19: "䷒ Nearing (臨 lín)",
    20: "䷓ Viewing (觀 guān)",
    21: "䷔ Gnawing Bite (噬嗑 shì kè)",
    22: "䷕ Adorning (賁 bì)",
    23: "䷖ Stripping (剝 bō)",
    24: "䷗ Returning (復 fù)",
    25: "䷘ Without Embroiling (無妄 wú wàng)",
    26: "䷙ Great Accumulating (大畜 dà chù)",
    27: "䷚ Swallowing (頤 yí)",
    28: "䷛ Great Exceeding (大過 dà guò)",
    29: "䷜ Gorge (坎 kǎn)",
    30: "䷝ Radiance (離 lí)",
    31: "䷞ Conjoining (咸 xián)",
    32: "䷟ Persevering (恆 héng)",
    33: "䷠ Retiring (遯 dùn)",
    34: "䷡ Great Invigorating (大壯 dà zhuàng)",
    35: "䷢ Prospering (晉 jìn)",
    36: "䷣ Brightness Hiding (明夷 míng yí)",
    37: "䷤ Dwelling People (家人 jiā rén)",
    38: "䷥ Polarising (睽 kuí)",
    39: "䷦ Limping (蹇 jiǎn)",
    40: "䷧ Taking-Apart (解 xiè)",
    41: "䷨ Diminishing (損 sǔn)",
    42: "䷩ Augmenting (益 yì)",
    43: "䷪ Parting (夬 guài)",
    44: "䷫ Coupling (姤 gòu)",
    45: "䷬ Clustering (萃 cuì)",
    46: "䷭ Ascending (升 shēng)",
    47: "䷮ Confining (困 kùn)",
    48: "䷯ Welling (井 jǐng)",
    49: "䷰ Skinning (革 gé)",
    50: "䷱ Holding (鼎 dǐng)",
    51: "䷲ Shake (震 zhèn)",
    52: "䷳ Bound (艮 gèn)",
    53: "䷴ Infiltrating (漸 jiàn)",
    54: "䷵ Converting The Maiden (歸妹 guī mèi)",
    55: "䷶ Abounding (豐 fēng)",
    56: "䷷ Sojourning (旅 lǚ)",
    57: "䷸ Ground (巽 xùn)",
    58: "䷹ Open (兌 duì)",
    59: "䷺ Dispersing (渙 huàn)",
    60: "䷻ Articulating (節 jié)",
    61: "䷼ Centre Confirming (中孚 zhōng fú)",
    62: "䷽ Small Exceeding (小過 xiǎo guò)",
    63: "䷾ Already Fording (既濟 jì jì)",
    64: "䷿ Not-Yet Fording (未濟 wèi jì)"
}

var outlinkTemplate = "Explanation: http://wengu.tartarie.com/wg/wengu.php?l=Yijing&no=%NUM%";

var iching = function(args) {
    // get the hexagram query
    var hexagram = parseInt(args) || 0;

    if ((hexagram < 1) || (hexagram > 64)) {
	hexagram = Math.floor(Math.random() * 64) + 1;
    }

    var v = '';
    for (var i = 1; i <= 6; i++) {
	var thisline = (Math.random() < 0.5);
	if (thisline) {
	    if (v.length > 0) {
		v = v + ',';
	    }
	    v = v + i;
	}
    }
    if (v.length == 0) {
	v = 'none';
    }
    var varLines = "Variable lines: "+v;
    var outlink = outlinkTemplate.replace(/%NUM%/, hexagram);
    var text = chars[hexagram] + " | " + varLines  + " | " + outlink;
    return text;
}


var ichingCmd = {
    "help": "iching (<hexagram number>): answer your question with a hexagram if none given, or show the information of a particular hexagram",
    "run": iching
}


var commands = {
    "iching": ichingCmd
}
exports.commands = commands;
