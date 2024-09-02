const express = require('express');
const router = express.Router();
const {
  getExpenditures,
  addExpenditure,
  deleteExpenditure
} = require('../controllers/expenditureController'); // Ensure this path is correct

// Get all expenditures
router.get('/', getExpenditures);

// Add a new expenditure
router.post('/', addExpenditure);

// Delete an expenditure by ID
router.delete('/:id', deleteExpenditure);

module.exports = router;
