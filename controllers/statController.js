const MutantService = require('../services/mutantService');
const db = require('../lib/db/init');
const cache = require('../cache/redis');

const StatController = {};

StatController.getStats = async (req, resp) => {
  let result;
  let dnas = await cache.list('dna');
  if (!dnas) {
    const { DNA } = await db.init();
    dnas = await DNA.findAll();
    cache.upsert('dna', dnas);
  }

  if (dnas) {
    result = MutantService.generateStats(dnas);
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
