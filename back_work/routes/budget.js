const express = require('express');
const router = express.Router();

let budget = 1000;

router.get('/', (req, res) => {
  res.json({ budget });
});

router.post('/', (req, res) => {
  budget = req.body.budget;
  res.json({ budget });
});

module.exports = router;
