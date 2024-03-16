const express = require("express");
const router = require("./routers");
const db = require("./models/index");
require("dotenv").config();
const app = express();
const server = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(server, () => {
	console.log(`Server is running on port http://localhost:${server}`);
});

const testConnection = async () => {
	try {
		await db.sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

testConnection();
