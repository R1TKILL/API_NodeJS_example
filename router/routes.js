'use strict'

const express = require('express');
const middleware = require('../Middlewares/middleware');
const contacts = require('./contacts.routes');
const routePrefix = '/contacts';

const app = express();

app.use(routePrefix, middleware, contacts);

module.exports = { app: app, routePrefix: routePrefix };