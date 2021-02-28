const app = require('./app');
const config = require('./config');

app.listen(config.api.port, () => {
  // eslint-disable-next-line no-console
  console.log(`The server is running on port: ${config.api.port}!`);
});
