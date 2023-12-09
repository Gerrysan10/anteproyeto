const UsuarioModel = require('../models/usuarios');

class UsuarioController {
    /**
     * Recupera una colección de valores de un recurso:
     * 
     * ```http
     *   GET /usuarios
     *   Accept: application/json
     * ```
     */
    static async indexGet(req, res) {
        let data = await UsuarioModel.consultar();
        res.send(data);
    }
     /**
     * Recupera el valor de un recurso individual:
     * 
     * ```http
     *   GET /usuarios/{id}
     *   Accept: application/json
     * ```
     */
    static async itemGet(req, res) {
        let id = req.params.id;
        let data = await UsuarioModel.consultarPorId(id);
        if (data.length == 0) {
            res.status(404).send({errno: 404, error: 'Not found'});
            return;
        }
        res.send(data[0]);
    }
     /**
     * Recibe una petición para crear un recurso:
     * 
     * ```http
     *   POST /usuarios
     *   Content-Type: application/json
     *
     *   {"Nombre": "nuevo"}
     * ```
     */
    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await UsuarioModel.insertar(newData);

            res.status(201)
                .header('Location', `/usuarios/${insertedId}`)
                .send({status: 201, message: 'Created'});
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    static async itemPatch(req, res) {
        try {
            const id = req.params.id;
            const updatedFields = req.body;

            const result = await UsuarioModel.actualizar(id, updatedFields);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Successfull partial update'});
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
}

module.exports = UsuarioController;