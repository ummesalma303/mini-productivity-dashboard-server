const express = require('express');
const router = express.Router();

// Get All The Todo's
router.get('/todo', async (req, res) => {
  res.send('All todos will be returned from here');
});

// Get All The Todo's
router.post('/todo', async (req, res) => {
  res.send('All todos will be returned from here');
});

module.exports = router; 
