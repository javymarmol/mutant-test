const MutantService = require('../services/mutantService');

class MutantController {
  static async validateDNA(req, resp) {
    console.log(req.body);
    const { dna } = req.body;
    MutantService.checkDNA(dna);
    resp.send(200);
  }
}

module.exports = MutantController;
