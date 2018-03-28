console.log('The bot is starting')

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

var params = {
	q: '"richard album"',
	count: 10,
	tweet_mode: 'extended'
};

T.post('statuses/update', { status: 'hot new site: http://freeipods69.party #freeipods #69 #party #twitterbot' }, function(err, data, response) {
  console.log(data)
})

function gotData(err, data, response) {
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].full_text)
		console.log("")
		console.log("")
		console.log("")
	}
};