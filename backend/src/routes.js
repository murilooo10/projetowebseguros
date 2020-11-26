const express = require('express');
const routes = express.Router();
const jwt = require('jsonwebtoken');
const SECRET = 'amfleet';

const PecasController = require('./controllers/PecasController');
const VeiculosController = require('./controllers/VeiculosController');
const UsuariosController = require('./controllers/UsuariosController');
const MotoristaController = require('./controllers/MotoristaController');
const LoginController = require('./controllers/LoginController');


function verifyJWT(request, response, next){
    const token = request.headers['x-acess-token'];

    jwt.verify(token, SECRET, (err, decoded) =>{
        if(err){
            return response.status(400).json({ err: 'Esse token está incorreto' });
        }
        request.id = decoded.id;
        next();
    })
}

routes.post('/login', LoginController.create);

routes.get('/veiculos', verifyJWT, VeiculosController.index);
routes.post('/veiculos', verifyJWT, VeiculosController.create);
routes.delete('/veiculos/:id', verifyJWT, VeiculosController.delete);
routes.put('/veiculos/:id', verifyJWT, VeiculosController.update);

routes.get('/usuarios', UsuariosController.index);
routes.post('/usuarios', UsuariosController.create);
routes.delete('/usuarios/:id', UsuariosController.delete);

routes.get('/motoristas', verifyJWT, MotoristaController.index );
routes.post('/motoristas', verifyJWT, MotoristaController.create);
routes.delete('/motoristas/:id', verifyJWT, MotoristaController.delete);
routes.put('/motoristas/:id', verifyJWT, MotoristaController.update);


routes.get('/pecas', verifyJWT, PecasController.index);
routes.post('/pecas', verifyJWT, PecasController.create);
routes.delete('/pecas/:id', verifyJWT, PecasController.delete);
routes.put('/pecas/:id', verifyJWT, PecasController.update);



module.exports = routes;