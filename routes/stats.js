const router = require('express').Router();
const StatController = require('../controllers/statController');

// Validate DNA
router.get('/', StatController.getStats);

module.exports = router;
