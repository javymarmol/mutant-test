const router = require('express').Router();
const MutantController = require('../controllers/mutantController');
const validationHandler = require('../middleware/validationHandler');

// Validate DNA
router.post('/', validationHandler(), MutantController.isMutant);

module.exports = router;
