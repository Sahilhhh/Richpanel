const express = require("express");
//linking all the controllers and handlers
const { updateToken } = require("../controllers/tokenCtrl");
const router = express.Router();
const userController = require("../controllers/userCtrl");

const { getDatabase } = require("../handlers/databaseHandlers");
const { getToken } = require("../handlers/tokenHandlers");
const { getPageToken } = require("../handlers/pageHandlers");

//getting user data from the frontend
router.get(
	"/:email/profile/:id",
	getDatabase,
	getToken,
	getPageToken,
	userController.getProfile,
);

//to fetch current user data
router.get("/:email/me", getDatabase, userController.getUser);

//to send account data
router.get(
	"/:email/accounts",
	getDatabase,
	getToken,
	userController.getAccounts,
);
//to link an access token for user
router.put("/:email/accesstoken", getDatabase, getToken, updateToken);

module.exports = router;
