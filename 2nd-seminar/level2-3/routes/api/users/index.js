const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const result = {
    status: 200,
    message: '/api/users',
  };
  res.status(200).send(result);
});

router.use('/login', require('./login'));
router.use('/signup', require('./signup'));

module.exports = router;
