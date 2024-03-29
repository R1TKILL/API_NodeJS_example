'use strict'

const db = require('../connectionDB');

// TableTest Model
const ContactTest = db.sequelize.define('PeopleTest', {
	id: { type: db.DATABASE.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
	perfil: { type: db.DATABASE.TEXT },
	nome: { type: db.DATABASE.STRING(50) },
	numero: { type: db.DATABASE.STRING(12), allowNull: false }
});

module.exports = ContactTest;