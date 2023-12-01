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
}

module.exports = UsuarioModel;