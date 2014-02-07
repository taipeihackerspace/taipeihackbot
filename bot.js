// Create the configuration
var config = {
    channels: ["#taipeihack"],
    server: "irc.freenode.net",
    botName: "taipeihackbot",
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

// Error listener, so it doesn't crash
client.addListener('error', function(message) {
    console.log('error: ', message);
});