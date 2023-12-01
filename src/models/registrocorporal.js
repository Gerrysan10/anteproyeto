const { connectToMysql } = require('../dbconnection');

class RegistroCorporalModel {
    static async consultar() {
        let db = await connectToMysql();
        let query = db('RegistroCorporal');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('RegistroCorporal').where('IDRegistro', id);
    }
}

module.exports = RegistroCorporalModel;