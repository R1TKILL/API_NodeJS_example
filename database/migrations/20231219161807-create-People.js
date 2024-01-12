'use strict';

const Etables = require('../Enums');

/** @type {import('sequelize-cli').Migration} */
module.exports = {

	async up (queryInterface, Sequelize) {
		await queryInterface.createTable(Etables.TablesName.People, {
			id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
			perfil: { type: Sequelize.TEXT },
			nome: { type: Sequelize.STRING(50) },
			numero: { type: Sequelize.STRING(12), allowNull: false }
		});
	},
	
	async down (queryInterface) {
		await queryInterface.dropTable(Etables.TablesName.People);
	}

};
