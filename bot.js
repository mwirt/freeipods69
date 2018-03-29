console.log('The bot is starting')

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

/* THANK YOU FOR FOLLOWING

var stream = T.stream('user');

stream.on('follow', followed);

function followed(event) {
	var name = event.source.name;
	var screenName = event.source.screen_name
	var tweet = {
		status: 'Thank you for following FREEIPODS69PARTYBOT, @' + screenName + "!"
	}
	T.post('statuses/update', tweet, tweeted)
}




function tweeted(err, data, response) {
		if (err) {
			console.log("Something went wrong :(")
		} else {
			console.log("It worked :)");
		}
	}
*/


/* SEARCH TWITTER GET RESULTS */


var params = {
	q: '"swimsuit"',
	count: 10,
	tweet_mode: 'extended',
	include_entities: true
};




T.get('search/tweets', params, function(err, data, response) {
  console.log(data)
  console.log("https://twitter.com/intent/user?user_id=" + data.id)

})



/*

function gotData(err, data, response) {

	var tweets = data;
	for (var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].full_text)
		console.log("")
		console.log("")
		console.log("")
	}
};

*/

/*

TIMED TWEETER


tweeter();

setInterval(tweeter, 1000*10);


function tweeter() {
	var r = Math.floor(Math.random()*100);
	var tweet = {
		status: 'There are ' + r + ' ipods at this party.'
	}
	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if (err) {
			console.log("Something went wrong :(")
		} else {
			console.log("It worked :)");
		}
	}
}

*/