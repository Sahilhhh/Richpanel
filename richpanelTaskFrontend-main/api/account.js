import axios from "axios";

const fetchProfile = async (email, id) => {
	const res = await axios.get(
		`http://localhost:4000/api/user/${email}/profile/${id}`,
	);
	if (res) return res;
	else return {};
};

const updateToken = async (email, accessToken) => {
	const res = await axios.put(
		`http://localhost:4000/api/user/${email}/accesstoken`,
		{
			accessToken,
		},
	);
	if (res) {
		// console.log("msg", res);
	}
};

const getAccount = async (email) => {
	const res = await axios.get(
		`http://localhost:4000/api/user/${email}/accounts`,
	);
	if (res) {
		return res;
	}
	return {};
};

export { updateToken, getAccount, fetchProfile };

export const getProfile = async (email) => {
	const res = await axios.get(`http://localhost:4000/api/user/${email}/me`);
	if (res) {
		return res;
	}
	return {};
};
