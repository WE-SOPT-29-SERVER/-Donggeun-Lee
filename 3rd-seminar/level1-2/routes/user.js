const express = require('express');
const router = express.Router();

const users = require('../dbMockup/user');
const util = require('../lib/util');

router.post('/signup', async (req, res) => {
  const { id, name, password, email } = req.body;

  // data null check
  if (!id || !name || !password || !email) {
    return res.status(400).send(util.fail(400, 'BAD REQUEST'));
  }

  const exist = users.filter((user) => user.email === email).length > 0;
  if (exist) {
    return res.status(409).send(util.fail(409, 'USED EMAIL'));
  }

  const newUser = { id, name, password, email };

  users.push(newUser);

  res.status(200).send(util.success(200, '회원가입 성공', newUser));
});

module.exports = router;
