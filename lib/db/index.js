const defaults = require('defaults');
const setupDatabase = require('./setup');
const setupDNAModel = require('../../model/dna');
const setupDNA = require('./dna');

module.exports = async (config) => {
  const configDB = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
    query: {
      raw: true,
    },
  });

  const sequelize = setupDatabase(configDB);
  const DNAModel = setupDNAModel(configDB);

  await sequelize.authenticate();

  if (config.setup) {
    await sequelize.sync();
  }

  const DNA = await setupDNA(DNAModel);

  return {
    DNA,
  };
};
