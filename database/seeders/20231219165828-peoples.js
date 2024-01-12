'use strict';

const Etables = require('../Enums');
const dates = require('../backup/peoples');

/** @type {import('sequelize-cli').Migration} */
module.exports = {

	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert(Etables.TablesName.People, dates, {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete(Etables.TablesName.People, null, {});
	}

};