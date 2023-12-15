'use strict'

const db = require('../configs/database/connectionDB');

// Table Model
const Contact = db.sequelize.define('People', {
  id: { type: db.DATABASE.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
  perfil: { type: db.DATABASE.TEXT },
  nome: { type: db.DATABASE.STRING(50) },
  numero: { type: db.DATABASE.STRING(12), allowNull: false }
});

module.exports = Contact;