const db = require('../dbconnection');

class EjercicioModel {
    static async consultar() {
        let query = db('Ejercicios');
        return await query;
    }
    static async consultarPorId(id) {
        return await db('Ejercicios').where('IDEjercicio', id);
    }
}

module.exports = EjercicioModel;