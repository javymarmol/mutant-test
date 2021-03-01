const express = require('express');

const config = require('../config');
const router = require('./network');

const app = express();

app.use(express.json());

// RUTAS
app.use('/', router);

app.listen(config.cacheService.port, () => {
  // eslint-disable-next-line no-console
  console.log('Servicio de caché redis escuchando en el puerto', config.cacheService.port);
});
