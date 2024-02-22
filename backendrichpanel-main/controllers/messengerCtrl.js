//linking utilities
const io     = require("../utils/sockets");
const client = require("../utils/redis");
const { FB } = require("fb");

//connecting with fb posts
exports.addWebhook = async (req, res) => {
	let body = req.body;
	console.log("add" + JSON.stringify(body));
	if (body.object === "page") {
		body.entry.forEach(function (entry) {
			if (entry.messaging) {
				let webhook_event = entry.messaging[0];
				client.get(webhook_event.recipient.id, (err, val) => {
					io.to(val).emit("/new_message", {
						event: webhook_event,
					});
				});
			} else console.log(entry.changes);
		});

		//logging the success
		res.status(200).send("EVENT_RECEIVED");
	} else {
		res.sendStatus(404);
	}
};


//verifying the callback from the facebook developer portal to link webhooks
exports.verifyWebhook = async (req, res) => {
	let VERIFY_TOKEN = process.env.WEBHOOK_TOKEN;
	let mode = req.query["hub.mode"];
	let token = req.query["hub.verify_token"];
	let challenge = req.query["hub.challenge"];
	console.log("verifuy" + mode);
	if (mode && token) {
		if (mode === "subscribe" && token === VERIFY_TOKEN) {
			console.log("WEBHOOK_VERIFIED");
			res.status(200).send(challenge);
		} else {
			res.sendStatus(403);
		}
	}
};

//to send message on the post
exports.sendMessage = async (req, res) => {
	const { recipientId, message } = req.body;
	console.log(req.body);
	const pageToken = req.pageToken;
	FB.setAccessToken(pageToken);
	FB.api(
		"/me/messages",
		"POST",
		{
			recipient: {
				id: recipientId,
			},
			message: {
				text: message,
			},
		},
		(_res) => {
			if (_res) {
				//if the message is delivered successfully
				return res.status(200).send({ msg: "Message Delieverd" });
			} else {
				//logging the error if occurred
				return res.status(500).send({ msg: "Error occured in sending message" });
			}
		},
	);
};
