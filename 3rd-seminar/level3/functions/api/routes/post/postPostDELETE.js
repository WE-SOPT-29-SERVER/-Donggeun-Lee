/*
delete post
METHOD: DELETE
URI: localhost:3000/post/:id
RESPONSE STATUS: 200 (OK)
RESPONSE DATA: 삭제 되지 않은 모든 게시글들
*/

const { fail, success } = require('../../../lib/util');
const responseMessage = require('../../../constants/responseMessage');
const statusCode = require('../../../constants/statusCode');

const posts = require('../../../dbMockup/post');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { writerId } = req.body;

  // 작성자ID 존재 확인
  if (!writerId) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  // 삭제할 게시글 존재 확인
  const existingPost = posts.filter((post) => post.id === Number(id))[0];
  if (!existingPost) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NO_POST));
  }

  // 삭제할 게시글 작성자 일치 확인
  if (existingPost.writerId !== Number(writerId)) {
    return res.status(statusCode.FORBIDDEN).send(fail(statusCode.FORBIDDEN, responseMessage.FORBIDDEN));
  }

  const data = posts.filter((post) => post.id !== Number(id));

  res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.DELETE_POST_SUCCESS, data));
};
