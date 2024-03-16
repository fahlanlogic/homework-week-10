"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("movies", { title: "test123" });

		await queryInterface.sequelize.query(
			"ALTER SEQUENCE movies_id_seq RESTART WITH 100;"
		);

		await queryInterface.changeColumn("movies", "photo", {
			type: Sequelize.TEXT,
		});
	},

	async down(queryInterface, Sequelize) {},
};
