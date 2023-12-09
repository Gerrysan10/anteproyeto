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
    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('Rutinas').insert(datos).returning('IDRutina');
        return result[0];
    }
    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('Rutinas').where('IDRutina', id).update(campos);
    }
}

module.exports = RutinaModel;