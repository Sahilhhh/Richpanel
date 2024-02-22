//to find and verify registered user
exports.getToken = async (req, res, next) => {
	const { email } = req.params;
	const { _id, ...user } = await req.db.collection("users").findOne({ email });
	if (user) {
		const { accessToken } = await req.db
			.collection("accounts")
			.findOne({ userId: _id });
		req.userId = _id;
		if (accessToken) {
			req.token = accessToken;
			next();
		} 
		else {
			return res.send({ msg: "User does not exist." });
		}
	} 	  
		else {
			return res.send({ msg: "User does not exist." });
	}
};
