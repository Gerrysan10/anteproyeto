const db = require('../dbconnection');

class UsuarioModel {
    static async consultar() {
        let query = db('Usuarios');
        return await query;
    }
    static async consultarPorId(id) {
        return await db('Usuarios').where('IDUsuario', id);
    }
}

module.exports = UsuarioModel;