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
}

module.exports = RutinasEjerciciosController;