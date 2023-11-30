const db = require('../dbconnection');

class RutinaModel {
    static async consultar() {
        let query = db('RutinasEjercicios');
        return await query;
    }
    static async consultarPorId(id) {
        return await db('RutinasEjercicios').where('IDRutinaEjercicio', id);
    }
}

module.exports = RutinaModel;