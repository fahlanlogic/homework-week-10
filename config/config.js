require("dotenv").config();

const config = {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: "localhost",
		dialect: "postgres",
		dialectModule: require("pg"),
	},
};

// console.log(config);

module.exports = config;
