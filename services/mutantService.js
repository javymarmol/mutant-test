let dnaJson = [];
const dnaMatriz = [[]];
let lengthH = 0;
let lengthV = 0;
const isMutant = false;

const fillMatriz = (indexV, column) => {
  lengthH = [...column].length;
  [...column].forEach((value, indexH) => {
    dnaMatriz[indexV][indexH] = value;
  });
};

const converToMatrizDNA = () => {
  dnaJson.forEach((element, index) => {
    lengthV = dnaJson.length;
    dnaMatriz[index] = new Array(dnaJson.length);
    fillMatriz(index, element);
  });
};

const checkVertical = (value, indexH, indexV) => {
  if (lengthV - (indexV + 1) < 4) {
    return false;
  }

  for (let index = 0; index < 4; index += 1) {
    if (dnaMatriz[indexV + index][indexH] !== value) {
      return false;
    }
  }
  // console.log(`checkVertical: value ${value}, posV: ${indexV}, indexH: ${indexH}`);
  return true;
};

const checkHorizontal = (value, indexH, indexV) => {
  if (lengthH - (indexH + 1) < 4) {
    return false;
  }

  for (let index = 0; index < 4; index += 1) {
    if (dnaMatriz[indexV][indexH + index] !== value) {
      return false;
    }
  }
  // console.log(`checkHorizontal: value ${value}, posV: ${indexV}, indexH: ${indexH}`);
  return true;
};

const checkRigthDiag = (value, indexH, indexV) => {
  if ((lengthV - (indexV + 1) < 4) || (lengthH - (indexH + 1) < 4)) {
    return false;
  }
  for (let index = 1; index < 4; index += 1) {
    if (dnaMatriz[indexV + index][indexH + index] !== value) {
      return false;
    }
  }
  return true;
};

const checkLeftDiag = (value, indexH, indexV) => {
  if ((indexV < 3) || (indexH < 3)) {
    return false;
  }
  for (let index = 1; index < 4; index += 1) {
    if (dnaMatriz[indexV - index][indexH - index] !== value) {
      return false;
    }
  }
  return true;
};

const checkOblique = (value, indexH, indexV) => {
  if (
    checkRigthDiag(value, indexH, indexV)
    || checkLeftDiag(value, indexH, indexV)
  ) {
    // console.log(`checkOblique: value ${value}, posV: ${indexV}, indexH: ${indexH}`);
    return true;
  }
  return false;
};

const MutantService = {

  async checkDNA(dna) {
    // dnaJson = JSON.parse(dna);
    dnaJson = dna;
    converToMatrizDNA();
    for (let y = 0; y < dnaJson.length; y += 1) {
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
