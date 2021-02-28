class MutantService {
  constructor() {
    this.dna = '';
    this.dnaJson = [];
    this.dnaMatriz = [[]];
  }

  checkDNA(dna) {
    this.dna = dna;
    this.dnaJson = JSON.parse(this.dna);
    if (dna) {
      return true;
    }
    return false;
  }

  converToMatrizDNA() {
    this.dnaJson.forEach((element, index) => {
      this.dnaMatriz[index] = new Array(this.dnaJson.length);
      this.fillMatriz(index, element);
    });
  }

  fillMatriz(indexH, row) {
    [...row].forEach((value, indexV) => {
      this.dnaMatriz[indexH][indexV] = value;
    });
  }
}

module.exports = MutantService;
