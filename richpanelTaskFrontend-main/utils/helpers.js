export const setConv = (convState, rcvd_msg, user) => {
	const sender_id = rcvd_msg.sender.id;
	console.log(user);
	var sender = convState.filter((item) => item.sender_id === sender_id);
	var otherSenders = convState.filter((item) => item.sender_id !== sender_id);
	if (!sender.length) {
		sender = {
			sender_id,
			user,
			messages: [
				{
					msg: rcvd_msg.message.text,
					type: "received",
					time: new Date(rcvd_msg.timestamp).toISOString(),
				},
			],
		};
		return [sender, ...otherSenders];
	} else {
		const snd = sender[0];
		sender = {
			...snd,
			messages: [
				...snd.messages,
				{
					msg: rcvd_msg.message.text,
					type: "received",
					time: new Date(rcvd_msg.timestamp).toISOString(),
				},
			],
		};
		return [sender, ...otherSenders];
	}
};

export const setSendConv = (convState, message, receipentId) => {
	var receiver = convState.filter((item) => item.sender_id == receipentId);
	var otherSenders = convState.filter((item) => item.sender_id != receipentId);
	const snd = receiver[0];
	receiver = {
		...snd,
		messages: [
			...snd.messages,
			{
				msg: message,
				type: "sent",
				time: new Date().toISOString(),
			},
		],
	};
	return [receiver, ...otherSenders];
};
