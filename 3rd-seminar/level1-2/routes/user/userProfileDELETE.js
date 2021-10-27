const { fail, success } = require('../../lib/util');
const responseMessage = require('../../constants/responseMessage');
const statusCode = require('../../constants/statusCode');

const users = require('../../dbMockup/user');

module.exports = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const existingUser = users.filter((user) => user.id === Number(id))[0];

  if (!existingUser) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  const newUsers = users.filter((user) => user.id !== Number(id));

  res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.USER_DELETE_SUCCESS, newUsers));
};
