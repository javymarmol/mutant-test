const utilValidationMatriz = require('../utils/validationMatriz');

const validationHandler = () => (req, res, next) => {
  const { dna } = req.body;
  console.log(dna);
  // const matrix = dna;
  if (
    utilValidationMatriz.validateLength(dna)
      && utilValidationMatriz.validateString(dna)
      && utilValidationMatriz.validateComposition(dna)
  ) {
    next();
  } else {
    res.sendStatus(400);
  }
};

module.exports = validationHandler;
