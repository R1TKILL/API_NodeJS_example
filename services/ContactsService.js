'use strict'

const ContactsModel = require('../Models/ContactsModel');
const connection = require('../configs/database/connectionDB');

exports.connectSQL = () => {
	connection.sequelize.authenticate()
		.then(() => { console.log('Connected successfully in PostgreSQL!') })
		.catch((err) => { console.log(`Connection failed err: ${err}`) })
};

exports.createContact = async (perfil, nome, numero) => {
	await ContactsModel.create({ perfil: perfil, nome: nome, numero: numero });
};

exports.readAllContacts = async () => {
	return await ContactsModel.findAll();
};

exports.readContactById = async (id) => {
	return await ContactsModel.findOne({ where: { id: id } });
};

exports.updateContactById = async (id, perfil, nome, numero) => {
	await ContactsModel.update({ perfil: perfil, nome: nome, numero: numero }, { where: { id: id } });
};

exports.deleteContactById = async (id) => {
	await ContactsModel.destroy({ where: { id: id } });
};
