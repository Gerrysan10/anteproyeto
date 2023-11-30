const ComunidadModel = require('../models/comunidad');

class ComunidadController {
    static async indexGet(req, res) {
        let data = await ComunidadModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res) {
        let id = req.params.id;
        let data = await ComunidadModel.consultarPorId(id);
        if (data.length == 0) {
            res.status(404).send({errno: 404, error: 'Not found'});
            return;
        }
        res.send(data[0]);
    }
}

module.exports = ComunidadController;