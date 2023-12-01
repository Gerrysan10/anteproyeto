const { connectToMysql } = require('../dbconnection');

class RutinaModel {
    static async consultar() {
        let db = await connectToMysql();
        let query = db('Rutinas');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('Rutinas').where('IDRutina', id);
    }
}

module.exports = RutinaModel;