const express = require('express');
const app = express();
const puerto = 80;
const UsuarioController = require('./controllers/usuario_controller');
app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('accedido correctamente');
});

app.get('/usuarios', UsuarioController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuarioController.itemGet);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});