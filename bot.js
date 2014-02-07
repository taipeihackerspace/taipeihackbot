// Create the configuration
var config = {
    channels: ["#taipeihack"],
    server: "irc.freenode.net",
    botName: "hackybot",
    admins: ["imrehg"]
};

// Get the lib
var irc = require("irc");

// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

// Listen for joins
bot.addListener("join", function(channel, who) {
    // Welcome them in!
    if (who === config.botName) {
	return;
    }

    bot.say(channel, who + "...heya...welcome to the (virtual) Hackerspace!");
    if (config.admins.indexOf(who) >= 0) {
	bot.send('MODE', channel, '+o', who);
    }

});

bot.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
    var mp = message.split(' ');
    if (mp[0] === config.botName) {
	switch (mp[1]) {
	    case 'help':
	       bot.say(to, 'Got to figure it out yourself, I guess...');
	       break;
	    case 'flip':
	       var outcome = (Math.random() > 0.5) ? 'heads' : 'tails';
	       bot.say(to, 'It\'s '+outcome);
	       break;
	    case 'roll':
	       var outcome = Math.floor(Math.random() * 6) + 1;
	       bot.say(to, 'Rolled a '+outcome);
	       break;
	    default:
	       bot.say(to, "Hmm?");
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