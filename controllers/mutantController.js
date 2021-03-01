const MutantService = require('../services/mutantService');
const db = require('../lib/db/init');
const cache = require('../cache/redis');

const MutantController = {};

MutantController.validateDNA = async (req, resp) => {
  const { dna } = req.body;

  let result;
  let dnaObject = await cache.get('dna', JSON.stringify(dna));
  if (!dnaObject) {
    const { DNA } = await db.init();
    dnaObject = await DNA.findByDNA(JSON.stringify(dna));
    if (!dnaObject) {
      result = MutantService.isMutant(dna);
      dnaObject = {
        dna: JSON.stringify(dna),
        isMutant: result,
      };
      DNA.create(dnaObject);
    } else {
      result = dnaObject.isMutant;
    }
    cache.upsert('dna', { dna, isMutant: result });
  }

  if (result) {
    resp.sendStatus(200);
  } else {
    resp.sendStatus(403);
  }
};

module.exports = MutantController;
