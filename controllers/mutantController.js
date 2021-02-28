const MutantService = require('../services/mutantService');

const MutantController = {};

MutantController.validateDNA = async (req, resp) => {
  // const { body:dna } = req;
  // console.log(body);
  const { dna } = req.body;
  const result = await MutantService.checkDNA(dna);
  // console.log('result:', result);
  if (result) {
    resp.sendStatus(200);
  } else {
    resp.sendStatus(403);
  }
};

// class MutantController {
//   constructor() {
//     this.mutantService = new MutantService();
//   }

//   async validateDNA(req, resp) {
//     const { dna } = req.body;
//     console.log('dna', dna);
//     console.log('mutantService', this);
//     if (this.mutantService.checkDNA(dna)) {
//       resp.send(200);
//     } else {
//       resp.sendStatus(403);
//     }
//   }
// }

module.exports = MutantController;
