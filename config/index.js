require('dotenv').config();

module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  dna: {
    base: ['A', 'G', 'C', 'T'],
  },
  database: {
    dbUser: process.env.DB_USER || 'postgres',
    dbPassword: process.env.DB_PASSWORD || 'postgres',
    dbHost: process.env.DB_HOST || 'localhost',
    dbName: process.env.DB_NAME || 'mutant-test',
    dbPort: process.env.DB_PORT || 5432,
  },
};
