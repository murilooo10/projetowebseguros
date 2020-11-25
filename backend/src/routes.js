const express = require('express');
const routes = express.Router();


const PecasController = require('./controllers/PecasController');
const VeiculosController = require('./controllers/VeiculosController');
const UsuariosController = require('./controllers/UsuariosController');
const MotoristaController = require('./controllers/MotoristaController');
const LoginController = require('./controllers/LoginController');

routes.post('/login', LoginController.login);

routes.get('/veiculos', VeiculosController.index);
routes.post('/veiculos', VeiculosController.create);
routes.delete('/veiculos/:id', VeiculosController.delete);
routes.put('/veiculos/:id', VeiculosController.update);

//routes.get('/usuarios', UsuariosController.index);
routes.post('/usuarios', UsuariosController.create);
routes.delete('/usuarios/:id', UsuariosController.delete);

routes.get('/motoristas', MotoristaController.index );
routes.post('/motoristas', MotoristaController.create);
routes.delete('/motoristas/:id', MotoristaController.delete);
routes.put('/motoristas/:id', MotoristaController.update);


routes.get('/pecas', PecasController.index);
routes.post('/pecas', PecasController.create);
routes.delete('/pecas/:id', PecasController.delete);
routes.put('/pecas/:id', PecasController.update);



module.exports = routes;