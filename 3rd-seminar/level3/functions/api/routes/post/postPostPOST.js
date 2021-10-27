/*
create post
METHOD: POST
URI: localhost:3000/post/
RESPONSE STATUS: 200 (OK)
RESPONSE DATA: 생성 된 게시글
*/

const { fail, success } = require('../../../lib/util');
const responseMessage = require('../../../constants/responseMessage');
const statusCode = require('../../../constants/statusCode');

const users = require('../../../dbMockup/user');
const posts = require('../../../dbMockup/post');

module.exports = async (req, res) => {
  const { writerId, title, content } = req.body;

  // 입력값 잘못됬을 시 NULL_VALUE return
  if (!writerId || !title || !content) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  // 작성자가 회원DB에 없을 시 NO_USER return
  const writer = users.filter((user) => user.id === Number(writerId))[0];
  if (!writer) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  // response data -> 작성된 post, 작성자 정보
  const data = {
    post: {
      id: posts.length + 1,
      title,
      content,
      writerId,
    },
    writer,
  };

  res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.WRITE_POST_SUCCESS, data));
};
