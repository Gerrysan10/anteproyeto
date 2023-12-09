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
    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('RutinasEjercicios').insert(datos).returning('IDRutinaEjercicio');
        return result[0];
    }
    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('RutinasEjercicios').where('IDRutinaEjercicio', id).update(campos);
    }
}

module.exports = RutinaModel;