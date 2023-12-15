'use strict'

require('dotenv').config();
const DATABASE = require('sequelize');
const env = (process.env.NODE_ENV);
const dbconfig = require('./configDB')[env];

const sequelize = new DATABASE(dbconfig); 

module.exports = { DATABASE: DATABASE, sequelize: sequelize };