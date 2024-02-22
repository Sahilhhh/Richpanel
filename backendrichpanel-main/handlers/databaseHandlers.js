const { getDb } = require("../utils/database");

//asynchronous code to fetch data
exports.getDatabase = async (req, res, next) => {
	req.db = await getDb();
	next();
};
