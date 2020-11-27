const express = require('express');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const OpenApiValidator = require('express-openapi-validator');
const openApiDocumentation = require('./openapi.json');

// app.use(
//     OpenApiValidator.middleware({
//       apiSpec: './openapi.yaml',
//       validateRequests: true, // (default)
//       validateResponses: true, // false by default
//     }),
//   );
const app = express();
app.use(express.json());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));
app.use(routes);

app.listen(3333);