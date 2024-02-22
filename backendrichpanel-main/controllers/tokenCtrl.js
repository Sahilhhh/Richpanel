exports.updateToken = async (req, res) => {
	const { accessToken } = req.body;
	await req.db
		.collection("accounts")
		.updateOne({ userId: req.userId }, { $set: { accessToken } });

	return res.send({ msg: "Updated" });
};
