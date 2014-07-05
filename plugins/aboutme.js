/*
 * AboutMe plugin for Hackybot
 * Gives bit of background info on the bot.
 */

var tellMeAbout = function(args, to, from, say) {
    say(to, from+", thanks so much for asking!");
    say(to, "my source code is at https://github.com/taipeihackerspace/taipeihackbot");
    say(to, "feel free to look around in my privates!");
}

// This is object is one command. Requires:
// "help": a string displayed upon asking for help
// "run": a function, optionally taking arguments,
//        which is run for the command, and the return
//        value is displayed on the IRC channel
var aboutCmd = {
    "help": "about: let me tell you a little bit about me...",
    "run": tellMeAbout
}

// Exporting the commands
// every keyword is the command name how people can call it
var commands = {
    "about": aboutCmd
}

// Do the export to the main program
exports.commands = commands;
