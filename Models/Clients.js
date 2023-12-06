const db = require('../database/connectionDB');

//Table Model
const Client = db.sequelize.define('People', {
    id: {type: db.DATABASE.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true},
    perfil: {type: db.DATABASE.TEXT},
    nome: {type: db.DATABASE.STRING(50)},
    numero: {type: db.DATABASE.STRING(12), allowNull: false}
});

class OperationSQL{

    constructor(){
        this.connectSQL();
    }

    async connectSQL() {
        db.sequelize.authenticate()
        .then(() => {console.log("Connected successfully in PostgreSQL!")})
        .catch((err) => {console.log(`Connection failed err: ${err}`)})
    }

    async createContact(perfil, nome, numero){
        await Client.create({perfil: perfil, nome: nome, numero: numero});
    }

    async readContacts(){
        return await Client.findAll();
    }

    async readContactById(id){
        return await Client.findOne({where: {'id': id}})
    }

    async updateContact(id, perfil, nome, numero){
        await Client.update({perfil: perfil, nome: nome, numero: numero},{where: {'id': id}});
    }

    async deleteContact(id){
        await Client.destroy({where: {'id': id}});
    }

}

module.exports = OperationSQL