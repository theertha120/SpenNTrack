const express = require('express');
const router = express.Router();
const { getExpenditures, addExpenditure } = require('../controllers/expenditureController');

// Ensure that the imported functions exist
if (!getExpenditures || !addExpenditure) {
  throw new Error('Route handlers not found');
}

router.get('/', getExpenditures);
router.post('/', addExpenditure);

module.exports = router;
