/*
update profile
METHOD: PUT
URI: localhost:3000/user/:id
RESPONSE STATUS: 200 (OK)
RESPONSE DATA: 업데이트 된 유저 정보
*/

const { fail, success } = require('../../../lib/util');
const responseMessage = require('../../../constants/responseMessage');
const statusCode = require('../../../constants/statusCode');

const users = require('../../../dbMockup/user');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { newName } = req.body;

  if (!id || !newName) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const existingUser = users.filter((user) => user.id === Number(id))[0];

  if (!existingUser) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  const updatedUser = { ...existingUser, name: newName };

  res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.USER_UPDATE_SUCCESS, updatedUser));
};
