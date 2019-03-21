const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: "Hello from My Next-Express API "});
});

module.exports = router;