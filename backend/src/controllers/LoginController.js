const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const app = require('express');
const jwt = require('jsonwebtoken');
const SECRET = 'amfleet'; //senha utilizada para assinatura digital

module.exports = {

    async login(request, response){ //postx
        try{
            const { id } = request.params;

            const email = await connection('usuarios').select('email').where('id', id);
            //const senha = await connection('usuarios').select('password').where('id', id);
            console.log(email);
            //console.log(senha);
            if(email === request.body.email && senha === request.body.password){
                const token = jwt.sign({ id }, SECRET, { expiresIn: 60 });
                return response.json({auth: true, token})
            }
            
        }catch{
            return response.status(401).send();
        }
    },
}