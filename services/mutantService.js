const utilOperatorMatriz = require('../utils/operatorMatriz');

const MutantService = {

  async checkDNA(dna) {
    const {
      converToMatrizDNA,
      checkHorizontal,
      checkOblique,
      checkVertical,
    } = utilOperatorMatriz;
    // dnaJson = JSON.parse(dna);
    // dnaJson = dna;
    const dnaMatriz = converToMatrizDNA(dna);
    for (let y = 0; y < dna.length; y += 1) {
      for (let x = 0; x < dnaMatriz[y].length; x += 1) {
        const value = dnaMatriz[y][x];
        // console.log(`check: value ${value}, posV: ${y}, indexH: ${x}`);

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

};

module.exports = MutantService;
