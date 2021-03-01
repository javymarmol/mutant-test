const MutantService = require('../services/mutantService');
const db = require('../lib/db/init');

const StatController = {};

StatController.getStats = async (req, resp) => {
  const { DNA } = await db.init();
  let result;
  const dnaObject = await DNA.findAll();

  if (dnaObject) {
    result = MutantService.generateStats(dnaObject);
  } else {
    result = {
      count_mutant_dna: 0,
      count_human_dna: 0,
      ratio: 0,
    };
  }
  resp.send(result);
};

module.exports = StatController;
