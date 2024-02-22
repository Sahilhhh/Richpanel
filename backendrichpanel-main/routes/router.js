const express = require("express");
const router  = express.Router();

//linking other routes
const clientRouter    = require("./client");
const messengerRouter = require("./messenger");

//logging the status of the server
router.use("/ping", (req, res) => {
	res.status(200).send({ msg: "Server has started and is running" });
});

//naming the messenger routes
router.use("/user", clientRouter);
router.use("/webhook", messengerRouter);

module.exports = router;
