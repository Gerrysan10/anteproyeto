const { connectToMysql } = require('../dbconnection');

class RutinaModel {
    static async consultar() {
        let db = await connectToMysql();
        let query = db('RutinasEjercicios');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('RutinasEjercicios').where('IDRutinaEjercicio', id);
    }
}

module.exports = RutinaModel;