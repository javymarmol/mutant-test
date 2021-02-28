const express = require('express');
const routerMutant = require('./routes/mutant');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('It is working! 🤘');
});

app.use('/mutant', routerMutant);

module.exports = app;
