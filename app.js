const express = require('express');
const routerMutant = require('./routes/mutant');
const routerStats = require('./routes/stats');

const app = express();

app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('It is working! 🤘');
});

app.use('/mutant', routerMutant);
app.use('/stats', routerStats);

module.exports = app;
