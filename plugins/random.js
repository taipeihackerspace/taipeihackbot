/*
 * Plugin with lots of random functions
 *
 * flip: flip a coin
 * yesno: yes or no to a question
 * 8ball: magic 8 ball
 */


// Yes or no?
var yesno = function() {
    return (Math.random() > 0.5) ? 'yes' : 'no';
}
var yesnoCmd = {
    "help": "yesno (<question>): I give a yes or no answer",
    "run": yesno
}
/******************************************/

// Flip
var flip = function() {
    var outcome = (Math.random() > 0.5) ? 'heads' : 'tails';
    return 'It\'s ' + outcome + ".";
}
var flipCmd = {
    "help": "flip: flip a fair coin",
    "run": flip
}
/******************************************/

// Roll a dice
var roll = function(args, to, from) {
    var answer = "";
    var dice = parseInt(args) || 6;
    if (dice > 0) {
	answer = "⚅ Rolled a " + (Math.floor(Math.random() * dice) + 1);
    } else {
	answer = "Hey everyone, we've got a joker here, aye, "+from+"?";
    }
    return answer;
}
var rollCmd = {
    "help": "roll (<sides>): roll a dice with <sides> number of sides (default is 6)",
    "run": roll
}
/******************************************/

// Magic 8 Ball
// https://en.wikipedia.org/wiki/Magic_8-Ball
var eightballList = [
    "It is certain", 
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
    ]
var eightball = function() {
    return "❽ "+eightballList[ Math.floor( Math.random() * eightballList.length ) ];
}
var eightballCmd = {
    "help": "8ball: ask the magic 8-ball!",
    "run": eightball
}
/******************************************/

// Export commands
var commands = {
    "8ball": eightballCmd
  , "flip" : flipCmd
  , "roll" : rollCmd
  , "yesno": yesnoCmd
}
exports.commands = commands;
