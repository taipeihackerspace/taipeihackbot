var fs    = require('fs')
  , nconf = require('nconf')
  , irc = require("irc")
  , request = require('request')
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
    admins: []
});

var channels = nconf.get('channels')
  , server = nconf.get('server')
  , botName = nconf.get('botName')
  , admins = nconf.get('admins')
;

// Create the bot name
var bot = new irc.Client(server, botName, {
    channels: channels
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

bot.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
    if ((message.length > 0) && (message[0] === '!')) {
	var mp = message.split(' ')
	  , botcmd = mp[0].slice(1)
	  , botcargs = mp.splice(1);
	;
	switch (botcmd) {
	case 'help':
	    bot.say(to, "I'm learning it too...");
	    break;
	case 'flip':
	    var outcome = (Math.random() > 0.5) ? 'heads' : 'tails';
	    bot.say(to, 'It\'s '+outcome+".");
	    break;
	case 'roll':
	    var dice = parseInt(botcargs[0]) || 6;
	    if (dice > 0) {
		var outcome = Math.floor(Math.random() * dice) + 1;
		bot.say(to, 'Rolled a '+outcome);
	    } else {
		bot.say(to, "Hey everyone, we've got a joker here, aye, "+from+"?");
	    }
	    break;
	case '8ball':
	    var answer = eightballList[ Math.floor( Math.random() * eightballList.length ) ];
	    bot.say(to, answer);
	    break;
	case 'open':
	    request.get('http://tpehack.no-ip.biz/spaceapi/',
			function (error, response, body) {
			    if (!error && response.statusCode == 200) {
				var info = JSON.parse(body);
				var outcome = info.state.open ? 'open :)' : 'closed :/';
				bot.say(to, "The 'space appears to be "+outcome);
			    }
			});
	    break;
	default:
	    bot.say(to, "Hmm? Don't quite know what's '"+botcmd+"'...");
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
