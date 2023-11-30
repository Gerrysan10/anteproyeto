const db = require('../dbconnection');

class RegistroCorporalModel {
    static async consultar() {
        let query = db('ProgresoCargas');
        return await query;
    }
    static async consultarPorId(id) {
        return await db('ProgresoCargas').where('IDProgreso', id);
    }
}

module.exports = RegistroCorporalModel;