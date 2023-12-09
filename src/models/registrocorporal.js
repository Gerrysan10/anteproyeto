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
    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('RegistroCorporal').insert(datos).returning('IDRegistro');
        return result[0];
    }
    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('RegistroCorporal').where('IDRegistro', id).update(campos);
    }
}

module.exports = RegistroCorporalModel;