require("dotenv").config();

const config = {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: "localhost",
		dialect: "postgres",
	},
};

// console.log(config);

module.exports = config;
