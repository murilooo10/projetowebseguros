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

routes.get('/users', UsuariosController.index);
routes.post('/users', UsuariosController.create);
routes.delete('/users/:id', UsuariosController.delete);

routes.get('/motoristas', verifyJWT, MotoristaController.index );
routes.post('/motoristas', verifyJWT, MotoristaController.create);
routes.delete('/motoristas/:id', verifyJWT, MotoristaController.delete);
routes.put('/motoristas/:id', verifyJWT, MotoristaController.update);


routes.get('/pecas', verifyJWT, (req, res) => {
    // #swagger.tags = ['Pecas']
    // #swagger.description = 'Endpoint para obter uma peça.'
    // #swagger.parameters['id'] = { description: 'ID da Peca.' }

    /* #swagger.parameters['nome'] = {
           description: 'Um nome qualquer.',
           type: 'string'
    } */

    /* #swagger.parameters['quantidade'] = {
           description: 'Uma quantidade qualquer.',
           type: 'integer'
    } */
    const nome = req.query.nome
    const quantidade = req.query.quantidade;

    if(false)
        return res.status(404).send(false)
  
    /* #swagger.responses[200] = { 
           schema: { $ref: "#/definitions/Pecas" },
           description: 'Peça encontrada.' 
    } */
    return res.status(200).send(data)

});


// routes.post('/pecas', verifyJWT, PecasController.create);
// routes.delete('/pecas/:id', verifyJWT, PecasController.delete);
// routes.put('/pecas/:id', verifyJWT, PecasController.update);




module.exports = routes;