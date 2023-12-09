const { connectToMysql } = require('../dbconnection');

class ComunidadoModel {
    static async consultar() {
        let db = await connectToMysql();
        let query =db("Comunidad");
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('Comunidad').where('IDComunidad', id);
    }
    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('Comunidad').insert(datos).returning('IDComunidad');
        return result[0];
    }
    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('Comunidad').where('IDComunidad', id).update(campos);
    }
}

module.exports = ComunidadoModel;