const express = require('express');
const app = express();
const puerto = 80;
const VigilantesController = require('./controllers/vigilantes_controller');
app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('accedido correctamente');
});

app.get('/vigilantes', VigilantesController.indexGet);
app.get('/vigilantes/:id([0-9]+)', VigilantesController.itemGet);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});