'use strict'

const DATABASE = require('sequelize');
require('dotenv').config();
  
// Padrão sequelize.
const config = {
    dev: {
        database: process.env.DATABASE_DEV,
        username: process.env.DB_USER_DEV,
        password: process.env.DB_PASS_DEV,
        host: process.env.DB_HOST_DEV,
        dialect: process.env.DIALECT_SQL_DEV
    },
    prod: {
		database: process.env.DATABASE_PROD,
        username: process.env.DB_USER_PROD,
        password: process.env.DB_PASS_PROD,
        host: process.env.DB_HOST_PROD,
        dialect: process.env.DIALECT_SQL_PROD
    }
};

const sequelize = new DATABASE(config.dev.database, config.dev.username, config.dev.password, {
    host: config.dev.host, dialect: config.dev.dialect, define: { timestamps: false }
});

module.exports = { DATABASE: DATABASE, sequelize: sequelize };