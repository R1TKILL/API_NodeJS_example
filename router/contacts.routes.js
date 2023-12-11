'use strict'

const express = require('express');
const router = express.Router();
const ContactsController = require('../controller/ContactsController');

router
    .post('/', ContactsController.setNewContact)
    .get('/', ContactsController.getAllContacts)
    .get('/:id', ContactsController.getContactById)
    .put('/', ContactsController.updateContactById)
    .delete('/:id', ContactsController.deleteContactById)
;

module.exports = router;