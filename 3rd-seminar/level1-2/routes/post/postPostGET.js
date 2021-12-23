/*
get post
METHOD: GET
URI: localhost:3000/post/:id
RESPONSE STATUS: 200 (OK)
RESPONSE DATA: 선택한 게시글
*/

const { fail, success } = require('../../lib/util');
const responseMessage = require('../../constants/responseMessage');
const statusCode = require('../../constants/statusCode');

const posts = require('../../dbMockup/post');

module.exports = async (req, res) => {
  const { id } = req.params;

  // post가 존재하는지 확인
  const data = posts.filter((post) => post.id === Number(id))[0];
  if (!data) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NO_POST));
  }

  res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.GET_POST_SUCCESS, data));
};
