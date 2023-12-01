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
}

module.exports = ComunidadoModel;