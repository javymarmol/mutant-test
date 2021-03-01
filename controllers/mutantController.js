const MutantService = require('../services/mutantService');
const db = require('../lib/db/init');

const MutantController = {};

MutantController.isMutant = async (req, resp) => {
  const { dna } = req.body;

  const { DNA } = await db.init();
  let result;
  let dnaObject = await DNA.findByDNA(JSON.stringify(dna));
  if (!dnaObject) {
    result = await MutantService.checkDNA(dna);
    dnaObject = {
      dna: JSON.stringify(dna),
      isMutant: result,
    };
    DNA.create(dnaObject);
  } else {
    result = dnaObject.isMutant;
  }

  if (result) {
    resp.sendStatus(200);
  } else {
    resp.sendStatus(403);
  }
};

module.exports = MutantController;
