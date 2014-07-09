/*
 * Weather report plugin
 */
var request = require('request');

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="

var weather = function(args, to, from, say) {
    var location = (args.length == 0) ? 'Taipei' : encodeURIComponent(args);

    request(queryURL+location, function (error, response, body) {
	if (!error && response.statusCode == 200) {
	    var w;
	    try {
		w = JSON.parse(body);
	    } catch(e) {
		say(to, "Something went wrong...");
		return
	    }

            try {
	        var lat = w.coord.lat
                  , lon = w.coord.lon
	        ;
            } catch (err) {
		say(to, from+": are you sure there's a place like \""+location+"\"?");
		return
            };
	    var locstring = "http://www.openstreetmap.org/#map=12/"+lat+"/"+lon;

	    var status = w.name + ": ";
	    for (var i = 0; i < w.weather.length; i++ ) {
		status = status + w.weather[i].description;
		if (i < (w.weather.length-1)) {
		    status = status + ', ';
		}
	    }
	    status = status + " | T:";
	    var temperature = w.main.temp - 273.15;
	    temperature = temperature.toFixed(1);
	    status = status + temperature + "°C";
	    status = status + " | P:" + w.main.pressure.toFixed(1) + "hPa" + " | H:" + w.main.humidity + "%";
	    status = status + " | W:" + w.wind.speed +"mps" + " | Clouds:" + w.clouds.all + "%";
	    status = status + " | Loc: " + locstring;
	    say(to, status);
	}
    });
}

var weatherCmd = {
    "help": "weather (<location>): weather info of a particular location, or if none given then Taipei",
    "run": weather
}

var commands = {
    "weather": weatherCmd
}
exports.commands = commands;
