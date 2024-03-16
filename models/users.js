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
			password: DataTypes.STRING(1234),
			role: DataTypes.STRING,
			gender: DataTypes.STRING,
			date_created: DataTypes.DATE,
			date_updated: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: "User",
			tableName: "users",
			createdAt: "date_created",
			updatedAt: "date_updated",
			timestamps: false,
		}
	);
	// User.removeAttribute("id");
	return User;
};
