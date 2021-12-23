const express = require('express');
const router = express.Router();

const users = require('../dbMockup/user');
const util = require('../lib/util');
const responseMessage = require('../constants/responseMessage');
const statusCode = require('../constants/statusCode');

router.post('/signup', async (req, res) => {
  const { id, name, password, email } = req.body;

  // data null check
  if (!id || !name || !password || !email) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const exist = users.filter((user) => user.email === email).length > 0;
  if (exist) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_EMAIL));
  }

  const newUser = { id, name, password, email };

  users.push(newUser);

  res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.CREATED_USER, newUser));
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // data null check
  const user = users.filter((obj) => obj.email === email)[0];
  if (!user) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  // password correct check
  if (user.password !== password) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW));
  }

  const data = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.LOGIN_SUCCESS, data));
});

module.exports = router;
