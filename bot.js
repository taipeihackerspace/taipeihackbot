var fs    = require('fs')
  , nconf = require('nconf')
  , irc = require("irc")
  , _ = require('underscore')
;

// Configuration
var args = process.argv.splice(2);
nconf.argv()
    .env()
    .file({ file: args[0] });

nconf.defaults({
    channels: ["#taipeihack"],
    server: "irc.freenode.net",
    botname: "mybot",
    admins: [],
    plugins: []
});

var channels = nconf.get('channels')
  , server = nconf.get('server')
  , botName = nconf.get('botName')
  , admins = nconf.get('admins')
  , plugins = nconf.get('plugins')
;

// Load commands from plugins
var commands = {};
for (var i in plugins) {
    var p = require('./plugins/'+plugins[i]);
    _.extend(commands, p.commands);
}

// Create the bot name
var bot = new irc.Client(server, botName, {
    channels: channels,
    floodProtection: true,
    floodProtectionDelay: 250
});

var hiList = ["heya",
              "szia",
              "hola",
              "salve",
              "你好",
              "Здорово",
              "Grüß Dich",
              "今日は",
              "नमस्ते",
              "salut",
              "안녕",
              "Oi",
              "Hoi"
             ]

// Listen for joins
bot.addListener("join", function(channel, who) {
    // Welcome them in!
    if (who === botName) {
	return;
    }

    var greeting = hiList[ Math.floor( Math.random() * hiList.length ) ];
    bot.say(channel, who + "..." + greeting + "...welcome to the (virtual) Hackerspace!");
    if (admins.indexOf(who) >= 0) {
	bot.send('MODE', channel, '+o', who);
    }

});

// Process commands sent to the bot
var matchCommand = /^\!(\S+)\s*(.*)/;
bot.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
    var messageParts = message.match(matchCommand);
    if (messageParts) {
	botcmd = messageParts[1];
	botarg = messageParts[2];
	var botSay = function(to, what) { bot.say(to, what) };
	if (botcmd == "help") {
	    for (var key in commands) {
		botSay(to, "!" + commands[key].help);
	    }
	}
	else if (botcmd in commands) {
	    var outcome = commands[botcmd].run(botarg, to, from, botSay);
	    if (outcome) {
		botSay(to, outcome);
	    }
	}
    }
});

bot.addListener('pm', function (from, message) {
    console.log(from + ' => ME: ' + message);
});

// Error listener, so it doesn't crash
bot.addListener('error', function(message) {
    console.log('error: ', message);
});

var myhostname = '';
// Use it as Ping, every 5 minutes
setInterval(function() {
        bot.whois(botName, function(info) {
            if (myhostname != info.host) {
                myhostname = info.host;
                console.log("My Host:"+myhostname);
            }
        });
    },
    5 * 60 * 1000
);
