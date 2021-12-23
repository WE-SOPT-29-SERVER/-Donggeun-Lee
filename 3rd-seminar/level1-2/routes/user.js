const express = require('express');
const router = express.Router();

const users = require('../dbMockup/user');

router.post('/signup', async (req, res) => {
  const { id, name, password, email } = req.body;

  // data null check
  if (!id || !name || !password || !email) {
    return res.status(400).send({ status: 400, message: 'BAD REQUEST' });
  }

  const exist = users.filter((user) => user.email === email).length > 0;
  if (exist) {
    return res.status(409).send({ status: 409, message: 'USED EMAIL' });
  }

  const newUser = { id, name, password, email };

  users.push(newUser);

  res.status(200).send(newUser);
});

module.exports = router;
