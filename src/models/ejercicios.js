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
    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('Ejercicios').insert(datos).returning('IDEjercicio');
        return result[0];
    }
    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('Ejercicios').where('IDEjercicio', id).update(campos);
    }
}

module.exports = EjercicioModel;