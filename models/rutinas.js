const db = require('../dbconnection');

class RutinaModel {
    static async consultar() {
        let query = db('Rutinas');
        return await query;
    }
    static async consultarPorId(id) {
        return await db('Rutinas').where('IDRutina', id);
    }
}

module.exports = RutinaModel;