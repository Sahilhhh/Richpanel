const { FB } = require("fb");

//to fetch token
exports.getPageToken = async (req, res, next) => {
	FB.setAccessToken(req.token);
	FB.api("me/accounts", "GET", (_res) => {
		if (_res.data) {
			const pageAccessToken = _res.data[0].access_token;
			req.pageToken = pageAccessToken;
			next();
		}
	});
};
