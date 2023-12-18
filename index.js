'use strict'

require('dotenv').config();
const express = require('express');
const routes = require('./router/routes');
const middleware = require('./Middlewares/middleware');

const app = express();

// Configs:
	// Middlewares:
		app.use(middleware);
	// Routes:
		app.use(routes.app);

app.listen(process.env.PORT, () => {
	console.log(`🚀 Server is running in url ${process.env.ADRESS}${process.env.PORT}${routes.routePrefix} in mode: ${process.env.NODE_ENV}`)
});
