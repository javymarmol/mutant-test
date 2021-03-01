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
  cacheService: {
    host: process.env.CACHE_HOST || 'localhost',
    port: process.env.CACHE_PORT || 3003,
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD || 'b8ca54c133a76f19679f05e5f011d03a05aa7306cc80f44926d9d75d722e785f',
  },
};
