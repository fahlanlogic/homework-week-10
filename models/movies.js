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
		},
		{
			sequelize,
			modelName: "Movie",
			tableName: "movies",
			timestamps: false,
		}
	);
	// Movie.removeAttribute("id");
	// console.log(Movie.findAll());
	return Movie;
};
