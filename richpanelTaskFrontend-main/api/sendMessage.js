import axios from "axios";

const sendMessage = async (email, message, recipientId) => {
	const res = await axios.post(
		`http://localhost:4000/api/webhook/${email}/send_message`,
		{
			recipientId,
			message,
		},
	);
	if (res.status != 200) {
		console.log("Some error occured");
	}
};

export { sendMessage };
