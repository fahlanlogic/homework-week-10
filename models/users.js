"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			role: DataTypes.STRING,
			gender: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "User",
			tableName: "users",
			timestamps: false,
		}
	);
	// User.removeAttribute("id");
	return User;
};
