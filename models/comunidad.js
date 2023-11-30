const db = require('../dbconnection');

class ComunidadoModel {
    static async consultar() {
        let query = db('Comunidad');
        return await query;
    }
    static async consultarPorId(id) {
        return await db('Comunidad').where('IDComunidad', id);
    }
}

module.exports = ComunidadoModel;