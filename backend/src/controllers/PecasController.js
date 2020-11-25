const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const{page = 1} = request.query;
        const [count] = await connection('pecas').count();
        const pecas = await connection('pecas')
        .limit(5)
        .offset((page - 1) * 5)
        .select('*');

        response.header('X-Total-Count', count['count(*)']);


        return response.json(pecas);

    },

    async create(request, response){
        const { nome, quantidade} = request.body;
        try{

                const [id] = await connection('pecas').insert({
                    nome,
                    quantidade
                })
                
                return response.json({ id });
            
        }catch{
            return response.status(401).send();
        }
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('pecas').where('id', id).first().delete();

        return response.status(204).send();
    },

    async update(request, response){
        const{quantidade, id} = request.params;

        await connection('pecas').where('id', id).update({
            quantidade
        })

        return response.json({ id });
    }
}