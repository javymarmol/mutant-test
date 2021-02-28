const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('It is working! 🤘');
})

module.exports = app;