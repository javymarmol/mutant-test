const Sequelize = require('sequelize');
const setupDatabase = require('../lib/db/setup');

const setupDNAModel = (config) => {
  const sequelize = setupDatabase(config);

  return sequelize.define('dna', {
    dna: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    isMutant: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  });
};

module.exports = setupDNAModel;
