const db = require('../dbconnection');

class RegistroCorporalModel {
    static async consultar() {
        let query = db('RegistroCorporal');
        return await query;
    }
    static async consultarPorId(id) {
        return await db('RegistroCorporal').where('IDRegistro', id);
    }
}

module.exports = RegistroCorporalModel;