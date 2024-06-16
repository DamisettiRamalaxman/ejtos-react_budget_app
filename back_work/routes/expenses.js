const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let expenses = [
  { id: uuidv4(), name: 'Groceries', cost: 100 },
  { id: uuidv4(), name: 'Rent', cost: 500 }
];

router.get('/', (req, res) => {
  res.json(expenses);
});

router.post('/', (req, res) => {
  const newExpense = { id: uuidv4(), ...req.body };
  expenses.push(newExpense);
  res.json(expenses);
});

router.delete('/:id', (req, res) => {
  expenses = expenses.filter(expense => expense.id !== req.params.id);
  res.json(expenses);
});

module.exports = router;
