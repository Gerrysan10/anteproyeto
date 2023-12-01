const { connectToMysql } = require('../dbconnection');

class EjercicioModel {
    static async consultar() {
        let db = await connectToMysql();
        let query = db('Ejercicios');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('Ejercicios').where('IDEjercicio', id);
    }
}

module.exports = EjercicioModel;