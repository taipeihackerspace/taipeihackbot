/*
 * Barebones plugin for Hackybot
 * Does not do anything useful, but shows the
 * example architacture required
 */

// This is object is one command. Requires:
// "help": a string displayed upon asking for help
// "run": a function, optionally taking arguments,
//        which is run for the command, and the return
//        value is displayed on the IRC channel
var bareCmd = {
    "help": "bare: run the barebones example plugin",
    "run": function() { return "I'm done!"; }
}

// Exporting the commands
// every keyword is the command name how people can call it
var commands = {
    "bare": bareCmd
}

// Do the export to the main program
exports.commands = commands;
