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
    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('ProgresoCargas').insert(datos).returning('IDProgreso');
        return result[0];
    }
    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('ProgresoCargas').where('IDProgreso', id).update(campos);
    }
}

module.exports = RegistroCorporalModel;