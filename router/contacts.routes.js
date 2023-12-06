const OperationSQL = require('../Models/Clients');
const express = require('express');
const router = express.Router();

const objectSQL = new OperationSQL();

//Create new contact.
router.post('/', (req, res) => {
    const { perfil, nome, numero } = req.body;
    objectSQL.createContact(perfil, nome, numero);
});

//Return all contacts.
router.get('/', async (req, res) => {
    const objClients = await objectSQL.readContacts();
    res.json(objClients);
});

//Return contact by id.
router.get('/:id', async (req, res) => {
    const objIdClient = await objectSQL.readContactById(req.params.id);
    res.json(objIdClient);
});

//Update contact by id.
router.put('/', (req, res) => {
    const { id, perfil, nome, numero } = req.body;
    objectSQL.updateContact(id, perfil, nome, numero);
});

//delete contact by id.
router.delete('/:id', (req, res) => {
    objectSQL.deleteContact(req.params.id);
});

module.exports = router 