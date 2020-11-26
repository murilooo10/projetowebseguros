const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const app = require('express');
const jwt = require('jsonwebtoken');
const SECRET = 'amfleet'; //senha utilizada para assinatura digital

module.exports = {

    async create(request, response){ //postx
        try{
            const{email, password} = request.body;

            const id = await connection('usuarios').where('email', email).where('password', password).select('id');
            if(!id){
                return response.status(401).send();
            }else{
                const token = jwt.sign({ id }, SECRET, { expiresIn: 60 });
                return response.json({auth: true, token})
            }
            
        }catch{
            return response.status(401).send();
        }
    },
}