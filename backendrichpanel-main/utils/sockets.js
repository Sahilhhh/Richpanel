//To initiate socket connection 
const io = require("socket.io")();
const client = require("./redis");

io.on("connection", (socket) => {
	console.log("Socket Connected", socket.id);
	socket.on("/init", (data) => {
		console.log(data);
		client.set(data.pageId, socket.id);
	});
	socket.on("disconnect", () => {
		console.log("Socket Disconnected", socket.id);
	});
});

module.exports = io;
