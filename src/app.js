const express = require('express');
const app = express();
const puerto = 80;
const UsuarioController = require('./controllers/usuario_controller');
const RutinasController = require('./controllers/rutinas_controller');
const EjercicioController = require('./controllers/ejercicios.controller');
const RutinasEjerciciosController = require('./controllers/rutinasejercicio_controller');
const registrocorporalController = require('./controllers/registrocorporal_controller');
const ProgresocargasController = require('./controllers/progresocargas_controller');
const ComunidadController = require('./controllers/comunidad_controller');
app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('accedido correctamente');
});

app.get('/usuarios', UsuarioController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuarioController.itemGet);
app.post('/usuarios', UsuarioController.indexPost);
app.patch('/usuarios/:id([0-9]+)', UsuarioController.itemPatch);
/////////////////////////////////////////////////////////////////////////////////
app.get('/rutinas', RutinasController.indexGet);
app.get('/rutinas/:id([0-9]+)', RutinasController.itemGet);
app.post('/rutinas', RutinasController.indexPost);
app.patch('/rutinas/:id([0-9]+)', RutinasController.itemPatch);
/////////////////////////////////////////////////////////////////////////////////
app.get('/ejercicios', EjercicioController.indexGet);
app.get('/ejercicios/:id([0-9]+)', EjercicioController.itemGet);
app.post('/ejercicios', EjercicioController.indexPost);
app.patch('/ejercicios/:id([0-9]+)', EjercicioController.itemPatch);
/////////////////////////////////////////////////////////////////////////////////
app.get('/rutinasejercicios', RutinasEjerciciosController.indexGet);
app.get('/rutinasejercicios/:id([0-9]+)', RutinasEjerciciosController.itemGet);
app.post('/rutinasejercicios', RutinasEjerciciosController.indexPost);
app.patch('/rutinasejercicios/:id([0-9]+)', RutinasEjerciciosController.itemPatch);
/////////////////////////////////////////////////////////////////////////////////
app.get('/registrocorporal', registrocorporalController.indexGet);
app.get('/registrocorporal/:id([0-9]+)', registrocorporalController.itemGet);
app.post('/registrocorporal', registrocorporalController.indexPost);
app.patch('/registrocorporal/:id([0-9]+)', registrocorporalController.itemPatch);
/////////////////////////////////////////////////////////////////////////////////
app.get('/progresocargas', ProgresocargasController.indexGet);
app.get('/progresocargas/:id([0-9]+)', ProgresocargasController.itemGet);
app.post('/progresocargas', ProgresocargasController.indexPost);
app.patch('/progresocargas/:id([0-9]+)', ProgresocargasController.itemPatch);
/////////////////////////////////////////////////////////////////////////////////
app.get('/comunidad', ComunidadController.indexGet);
app.get('/comunidad/:id([0-9]+)', ComunidadController.itemGet);
app.post('/comunidad', ComunidadController.indexPost);
app.patch('/comunidad/:id([0-9]+)', ComunidadController.itemPatch);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});