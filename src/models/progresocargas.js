const { connectToMysql } = require('../dbconnection');

class RegistroCorporalModel {
    static async consultar() {
        let db = await connectToMysql();
        let query = db('ProgresoCargas');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('ProgresoCargas').where('IDProgreso', id);
    }
}

module.exports = RegistroCorporalModel;