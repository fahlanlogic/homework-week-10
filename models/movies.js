"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Movie extends Model {
		static associate(models) {
			// define association here
		}
	}
	Movie.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			title: DataTypes.STRING,
			genres: DataTypes.STRING,
			year: DataTypes.STRING,
			photo: DataTypes.CHAR,
			// date_created: DataTypes.DATE,
			// date_updated: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: "Movie",
			tableName: "movies",
			// createdAt: "date_created",
			// updatedAt: "date_updated",
			timestamps: false,
		}
	);
	// Movie.removeAttribute("id");
	// console.log(Movie.findAll());
	return Movie;
};
