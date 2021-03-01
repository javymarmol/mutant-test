const utilOperatorMatriz = require('../utils/operatorMatriz');

const MutantService = {
  isMutant(dna) {
    const {
      converToMatrizDNA,
      checkHorizontal,
      checkOblique,
      checkVertical,
    } = utilOperatorMatriz;
    const dnaMatriz = converToMatrizDNA(dna);
    for (let y = 0; y < dna.length; y += 1) {
      for (let x = 0; x < dnaMatriz[y].length; x += 1) {
        const value = dnaMatriz[y][x];
        if (
          checkHorizontal(value, x, y)
          || checkVertical(value, x, y)
          || checkOblique(value, x, y)
        ) {
          return true;
        }
      }
    }
    return false;
  },
  generateStats(dnas) {
    const isNotMutant = dnas.filter((item) => item.isMutant === false).length;
    const isMutant = dnas.filter((item) => item.isMutant === true).length;
    const ratio = isNotMutant === 0 ? 100 : isMutant / isNotMutant;
    return {
      count_mutant_dna: isMutant,
      count_human_dna: isNotMutant,
      ratio,
    };
  },
};

module.exports = MutantService;
