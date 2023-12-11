'use strict'

const express = require('express');
const middleware = require('../configs/Middlewares/middleware');
const contacts = require('./contacts.routes');

const app = express();

app.use('/contacts', middleware, contacts);

module.exports = app;