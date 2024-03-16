"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.changeColumn("movies", "id", {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		});

		await queryInterface.changeColumn("movies", "photo", {
			type: DataTypes.TEXT,
		});

		await queryInterface.addColumn("movies", "date_created", {
			type: DataTypes.DATE,
			allowNull: false,
		});

		await queryInterface.addColumn("movies", "date_updated", {
			type: DataTypes.DATE,
			allowNull: false,
		});
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
	},
};
