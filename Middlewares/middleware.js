'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('../utils/rotateLogs');
const pinoHttp = require('pino-http')({ logger });

const middleware = express();

// Middlewares config.
const corsOptions = { origin: process.env.ORIGIN_ADRESS, optionsSuccessStatus: 200 };

middleware.use(express.json({ limit: '50mb' })); // Limit file upload.
middleware.use(bodyParser.urlencoded({ extended: true }));
middleware.use(cors(corsOptions));
middleware.use(pinoHttp);

module.exports = middleware;