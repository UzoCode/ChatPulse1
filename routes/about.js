const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('About ChatPulse');
});

module.exports = router;
