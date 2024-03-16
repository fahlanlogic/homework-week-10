"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.sequelize.query(`
      CREATE SEQUENCE "users_id_seq" START 101;
    `);

		await queryInterface.changeColumn("users", "id", {
			type: Sequelize.INTEGER,
			primaryKey: true,
			defaultValue: Sequelize.literal("nextval('users_id_seq')"),
		});
	},

	async down(queryInterface, Sequelize) {},
};
