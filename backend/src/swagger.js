const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const routesFiles = ['./routes.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "My API",
        description: "Documentation automatically generated by the <b>swagger.autogen</b> module."
    },
    host: "localhost:3333",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Pecas",
            "description": "Endpoints"
        }
    ],
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header"
        },
        petstore_auth: {
            type: "oauth2",
            authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
            flow: "implicit"
        }
    },
    definitions: {
        User: {
            name: "Pneu",
            age: 10
        },
        AddPecas: {
            $name: "Pneu",
            $quantidade: 12
        }
    }
}

swaggerAutogen(outputFile, routesFiles, doc).then(() => {
    require('./index.js')
})