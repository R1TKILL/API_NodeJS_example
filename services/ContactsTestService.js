'use strict'

const ContactsTestModel = require('../database/models/ContactsTestModel');
const connection = require('../database/connectionDB');

exports.connectSQL = async () => {
	await connection.sequelize.authenticate()
		.then(() => { console.log('Connected successfully in PostgreSQL!') })
		.catch((err) => { console.log(`Connection failed err: ${err}`) });
};

exports.desconnectSQL = async () => {
	await connection.sequelize.close()
		.then(() => { console.log('Desconnected successfully in PostgreSQL!') })
		.catch((err) => { console.log(`Desconnection failed err: ${err}`) });
};

exports.createContact = async (perfil, nome, numero) => {
	await ContactsTestModel.create({ perfil: perfil, nome: nome, numero: numero });
};

exports.readAllContacts = async () => {
	return await ContactsTestModel.findAll();
};

exports.readContactById = async (id) => {
	return await ContactsTestModel.findOne({ where: { id: id } });
};

exports.updateContactById = async (id, perfil, nome, numero) => {
	await ContactsTestModel.update({ perfil: perfil, nome: nome, numero: numero }, { where: { id: id } });
};

exports.deleteContactById = async (id) => {
	await ContactsTestModel.destroy({ where: { id: id } });
};
