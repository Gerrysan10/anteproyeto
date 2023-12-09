const RutinasEjerciciosModel = require('../models/rutinasejercicios');

class RutinasEjerciciosController {
    static async indexGet(req, res) {
        let data = await RutinasEjerciciosModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res) {
        let id = req.params.id;
        let data = await RutinasEjerciciosModel.consultarPorId(id);
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
     *   POST /rutinasejercicios
     *   Content-Type: application/json
     *
     *   {"Nombre": "nuevo"}
     * ```
     */
    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await RutinasEjerciciosModel.insertar(newData);

            res.status(201)
                .header('Location', `/rutinasejercicios/${insertedId}`)
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

            const result = await RutinasEjerciciosModel.actualizar(id, updatedFields);

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

module.exports = RutinasEjerciciosController;