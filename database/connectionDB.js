const DATABASE = require('sequelize');

const sequelize = new DATABASE('Contacts','postgres','post', {
    host: 'localhost',dialect: 'postgres',define: {timestamps: false}
});

module.exports = {DATABASE: DATABASE, sequelize: sequelize}