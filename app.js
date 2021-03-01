const express = require('express');
const swaggerUi = require('swagger-ui-express');
const routerMutant = require('./routes/mutant');
const routerStats = require('./routes/stats');
const swaggerDoc = require('./swagger.json');

const app = express();

app.use(express.json());

app.use('/mutant', routerMutant);
app.use('/stats', routerStats);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

module.exports = app;
