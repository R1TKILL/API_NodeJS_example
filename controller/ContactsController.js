'use strict'

const ContactsModel = require('../models/Contacts');
const objectSQL = new ContactsModel.ConnectSQL();

// Create new contact.
exports.setNewContact = async (req, res) => {
  const { perfil, nome, numero } = req.body;
  await ContactsModel.Contact.create({ perfil: perfil, nome: nome, numero: numero });
}

// Return all contacts.
exports.getAllContacts = async (req, res) => {
  const objClients = await ContactsModel.Contact.findAll();
  res.json(objClients);
}

// Return contact by id.
exports.getContactById = async (req, res) => {
  const objIdClient = await ContactsModel.Contact.findOne({ where: { id: req.params.id } });
  res.json(objIdClient);
}

// Update contact by id.
exports.updateContactById = async (req, res) => {
  const { id, perfil, nome, numero } = req.body;
  await ContactsModel.Contact.update({ perfil: perfil, nome: nome, numero: numero },
	{ where: { id: id } });
}

// Delete contact by id.
exports.deleteContactById = async (req, res) => {
  await ContactsModel.Contact.destroy({ where: { id: req.params.id } });
}