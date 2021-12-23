/*
update post
METHOD: PUT
URI: localhost:3000/post/:id
RESPONSE STATUS: 200 (OK)
RESPONSE DATA: 업데이트 된 게시글 정보
*/

const { fail, success } = require('../../lib/util');
const responseMessage = require('../../constants/responseMessage');
const statusCode = require('../../constants/statusCode');

const posts = require('../../dbMockup/post');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { writerId, title, content } = req.body;

  // update할 게시글 존재 확인
  const existingPost = posts.filter((post) => post.id === Number(id))[0];
  if (!existingPost) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NO_POST));
  }

  // 수정할 내용 존재 확인
  if (!writerId || !(title || content)) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  // update할 게시글 작성자 일치 확인
  if (existingPost.id !== Number(writerId)) {
    return res.status(statusCode.FORBIDDEN).send(fail(statusCode.FORBIDDEN, responseMessage.FORBIDDEN));
  }

  const data = {
    writerId,
    ...(title && { title }),
    ...(!title && { title: existingPost.title }),
    ...(content && { content }),
    ...(!content && { content: existingPost.content }),
  };
  res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.POST_UPDATE_SUCCESS, data));
};
