const redis = require("redis");

if (process.env.REDISTOGO_URL) {
    // TODO: redistogo connection
    var rtg   = require("url").parse(process.env.REDISTOGO_URL);
	var client = require("redis").createClient(rtg.port, rtg.hostname);

client.auth(rtg.auth.split(":")[1]);
} else {
    var client= require("redis").createClient();
}


// const client = redis.createClient();

client.on("error", function (error) {
	console.error(error);
});

module.exports = client;
