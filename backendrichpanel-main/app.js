//server main file
const express = require("express");
const cors    = require("cors");
// Connecting Database
const { mongoConnect } = require("./utils/database");
const router  = require("./routes/router");
const io      = require("./utils/sockets");

//importing environment variables
require("dotenv").config({
	path: `${__dirname}/.env`,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// api the add-on before every route to separate from frontend routes

app.use("/api", router);

mongoConnect((client) => {
	//.Port to suit the deployment server and 3000 for local server
	const serv = app.listen(process.env.PORT || 8000, (err) => {
		if (err) {
			console.log(err);
			process.exit(0);
		}

		io.attach(serv, {
			cors: {
				//Local host Url
				origin: "http://localhost:8000",
				methods: ["GET", "POST"],
			},
		});
		//logging in server console
		console.log("Server is Listening at Port:8000!");
	});
});
