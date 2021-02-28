const { request } = require("./app");

const app = require('./app');

app.listen(5332, () => {
    console.log('The server is running in the port: 5332!')
})