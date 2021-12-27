/*
get posts
METHOD: GET
URI: localhost:3000/post/
RESPONSE STATUS: 200 (OK)
RESPONSE DATA: DB에 있는 모든 게시물들
*/

const { fail, success } = require('../../../lib/util');
const responseMessage = require('../../../constants/responseMessage');
const statusCode = require('../../../constants/statusCode');

const posts = require('../../../dbMockup/post');

module.exports = async (req, res) => {
  // DB의 모든 post를 response
  res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.GET_POST_SUCCESS, posts));
};
