'use strict'

require('dotenv').config();

module.exports = {
	development: {
			username: process.env.DB_USER_DEV,
			password: process.env.DB_PASS_DEV,
			database: process.env.DATABASE_DEV,
			host: process.env.DB_HOST_DEV,
			dialect: process.env.DIALECT_SQL_DEV,
			define: { timestamps: false }
	},
	test: { // O jest não aceita as environments, apenas declarações explicitas.
		username: 'postgres',
		password: 'post',
		database: 'ContactsTest',
		host: 'localhost',
		dialect: 'postgres',
		define: { timestamps: false }
	},
	production: {
		username: process.env.DB_USER_PROD,
		password: process.env.DB_PASS_PROD,
		database: process.env.DATABASE_PROD,
		host: process.env.DB_HOST_PROD,
		dialect: process.env.DIALECT_SQL_PROD,
		define: { timestamps: false }
	}
};