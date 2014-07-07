/*
 * Query the Taipei Hackerspace SpaceAPI endpoint to check
 * whether anyone's checked in
 */
var rest = require('rest')
;

var fetchSpaceAPI = function() {
    return rest('https://taipeihack.org/spaceapi/');
}
function parseInfo(response) {
    var info = JSON.parse(response.entity);
    var outcome = info.state.open ? 'open :)' : 'closed :/';
    return "The 'space appears to be "+outcome;
}
function handleError(e) {
    return "Something went wrong, don't know the answer.";
}

var checkOpen = function(args, to, from, say) {
    fetchSpaceAPI()
    	.then(parseInfo)
    	.catch(handleError)
    	.done(function(outcome) {
	    console.log(outcome);
    	    say(to, outcome);
    	});
}

var openCmd = {
    "help": "open: query if anyone's checked in the Hackerspace at the moment",
    "run": checkOpen
}
/**********************************/

var commands = {
    "open": openCmd
}
exports.commands = commands;
