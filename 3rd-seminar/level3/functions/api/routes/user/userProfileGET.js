/*
get profile
METHOD: GET
URI: localhost:3000/user/profile/:id
RESPONSE STATUS: 200 (OK)
RESPONSE DATA: 비밀번호를 제외한 User 정보
*/

const { fail, success } = require('../../../lib/util');
const responseMessage = require('../../../constants/responseMessage');
const statusCode = require('../../../constants/statusCode');

const users = require('../../../dbMockup/user');

module.exports = async (req, res) => {
  const { id } = req.params;
  const user = users.filter((obj) => obj.id === Number(id))[0];

  if (!user) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  const data = user.id;

  res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.READ_PROFILE_SUCCESS, data));
};
