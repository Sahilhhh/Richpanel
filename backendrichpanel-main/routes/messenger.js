const express = require("express");
const router = express.Router();
const {	verifyWebhook,addWebhook,sendMessage,} = require("../controllers/messengerCtrl");
const { getDatabase } = require("../handlers/databaseHandlers");
const { getPageToken } = require("../handlers/pageHandlers");
const { getToken } = require("../handlers/tokenHandlers");

//to check facebook api linking
router.post("/", addWebhook);
router.get("/", verifyWebhook);

// to reply with a message
router.post(
	"/:email/send_message",
	getDatabase,
	getToken,
	getPageToken,
	sendMessage,
);

module.exports = router;
