'use strict'

require('dotenv').config();
const express = require('express');
const contacts = require('./router/routes');
const middleware = require('./configs/Middlewares/middleware');

const app = express();

// Configs:
	// Middlewares:
		app.use(middleware);
	// Routes:
		app.use(contacts);

app.listen(process.env.PORT, () => {
	console.log(`🚀 Server is running in url ${process.env.ADRESS}${process.env.PORT}`)
});