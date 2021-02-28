const router = require('express').Router();
const MutantController = require('../controllers/mutantController');

// Validate DNA
router.post('/', MutantController.validateDNA);

module.exports = router;
