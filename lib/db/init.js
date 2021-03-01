const db = require('./index');

function handleFatalError(err) {
  console.error(`[fatal error]${err.message}`);
  console.error(err.stack);
  process.exit(1);
}

async function init() {
  const config = {
    database: process.env.DB_NAME || 'dbname',
    username: process.env.DB_USER || 'dbuser',
    password: process.env.DB_PASS || 'dbpass',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    setup: true,
  };

  return db(config).catch(handleFatalError);
}

module.exports = {
  init,
};
