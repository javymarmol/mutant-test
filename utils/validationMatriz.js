const config = require('../config');

const validateString = (matrix) => matrix.every((item) => typeof item === 'string');

const validateLength = (matrix) => {
  if (matrix.length > 0) {
    const lengthValidator = matrix[0].length;
    return matrix.every((item) => item.length === lengthValidator);
  }
  return false;
};

const validateComposition = (matrix) => {
  const baseDNA = config.dna.base;
  return matrix.every((item) => {
    let validation = true;
    for (let i = 0; i < item.length; i += 1) {
      if (!baseDNA.includes(item.charAt(i))) {
        validation = false;
        break;
      }
    }
    return validation;
  });
};

module.exports = {
  validateString,
  validateLength,
  validateComposition,
};
