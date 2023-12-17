'use strict'

require('dotenv').config();
const ContactsTestService = require('../services/ContactsTestService');
const ContactsService = require('../services/ContactsService');
ContactsService.connectSQL();

// Create new contact.
exports.setNewContact = async (req, res) => {	
	try {
		const { perfil, nome, numero } = req.body;
		(process.env.NODE_ENV === 'test') ? (await ContactsTestService.createContact(perfil, nome, numero)) : (await ContactsService.createContact(perfil, nome, numero));
		res.status(201).json({ message: 'Created successfully' });
	} catch (err) {
		res.status(500).json({ message: `Creation failed err: ${err}` });
	};
};

// Return all contacts.
exports.getAllContacts = async (req, res) => {
	try {
		let objClients;
		(process.env.NODE_ENV === 'test') ? (objClients = await ContactsTestService.readAllContacts()) : (objClients = await ContactsService.readAllContacts());
		(Object.values(objClients).length === 0) ? res.status(204).json({ message: 'There are no contacts registered' }) : res.status(200).json(objClients);
	} catch (err) {
		res.status(500).send({ message: `Error when trying to list contacts ${err}` });
	};
};

// Return contact by id.
exports.getContactById = async (req, res) => {
	try {
		let objIdClient;
		(process.env.NODE_ENV === 'test') ? (objIdClient = await ContactsTestService.readContactById(req.params.id)) : (objIdClient = await ContactsService.readContactById(req.params.id));
		(Object.values(objIdClient).length === 0) ? res.status(204).json({ message: 'No contact found with this Id' }) : res.status(200).json(objIdClient);
	} catch (err) {
		res.status(500).json({ message: `Error when trying to list contact by Id ${err}` });
	};
};

// Update contact by id.
exports.updateContactById = async (req, res) => {
	try {
		const { id, perfil, nome, numero } = req.body;
		(process.env.NODE_ENV === 'test') ? (await ContactsTestService.updateContactById(id, perfil, nome, numero)) : (await ContactsService.updateContactById(id, perfil, nome, numero));
		res.status(200).json({ message: 'Updated successfully' });
	} catch (err) {
		res.status(500).json({ message: `Error when trying to update contact ${err}` });
	};
};

// Delete contact by id.
exports.deleteContactById = async (req, res) => {
	try {
		(process.env.NODE_ENV === 'test') ? (await ContactsTestService.deleteContactById(req.params.id)) : (await ContactsService.deleteContactById(req.params.id));
		res.status(200).json({ message: 'Removed successfully' });
	} catch (err) {
		res.status(500).json({ message: `Error when trying to remove contact ${err}` });
	};
};