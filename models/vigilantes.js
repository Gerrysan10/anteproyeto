const db = require('../dbconnection');

class VigilantesModel {
    static async consultar() {
        let query = db('vigilantes');
        return await query;
    }
    static async consultarPorId(id) {
        return await db('vigilantes').where('id_vigilante', id);
    }
}

module.exports = VigilantesModel;