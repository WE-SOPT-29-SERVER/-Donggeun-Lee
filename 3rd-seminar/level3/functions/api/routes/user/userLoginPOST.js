/*
post login
METHOD: POST
URI: localhost:3000/user/login
RESPONSE STATUS: 200 (OK)
RESPONSE DATA: 로그인 유저 정보
*/

const { fail, success } = require('../../../lib/util');
const responseMessage = require('../../../constants/responseMessage');
const statusCode = require('../../../constants/statusCode');

const users = require('../../../dbMockup/user');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const user = users.filter((obj) => obj.email === email)[0];
  if (!user) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  if (user.password !== password) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW));
  }

  const data = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.LOGIN_SUCCESS, data));
};
