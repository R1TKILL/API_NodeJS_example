const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const middleware = express();

//Middlewares config.
const corsOptions = {origin: '*', optionsSuccessStatus: 200};

middleware.use(express.json({limit: '50mb'})); //Limit file upload.
middleware.use(bodyParser.urlencoded({ extended: true }));
middleware.use(cors(corsOptions));

module.exports = middleware