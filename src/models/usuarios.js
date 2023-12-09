const { connectToMysql } = require('../dbconnection');


class UsuarioModel {
    static async consultar() {
        let db = await connectToMysql();
        let query = db('Usuarios');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('Usuarios').where('IDUsuario', id);
    }

    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('Usuarios').insert(datos).returning('IDUsuario');
        return result[0];
    }
    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('Usuarios').where('IDUsuario', id).update(campos);
    }
    
}

module.exports = UsuarioModel;