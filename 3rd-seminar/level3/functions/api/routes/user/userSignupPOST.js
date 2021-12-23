/*
signup
METHOD: POST
URI: localhost:3000/user/signup
RESPONSE STATUS: 200 (OK)
RESPONSE DATA: 생성된 유저 정보
*/

// return res VS res
// express는 res 이후에도 작업을 수행할 수 있음 (ex -> 검색결과 반환 후 검색 history 저장)
// if절 안에서 return을 안해주면, 계속해서 코드가 진행되기 때문에 예상치 못한 오류가 발생

// 미리 선언한 form을 활용하여 모양을 통일
const { fail, success } = require('../../../lib/util');
const responseMessage = require('../../../constants/responseMessage');
const statusCode = require('../../../constants/statusCode');

const users = require('../../../dbMockup/user');

module.exports = async (req, res) => {
  // get email, password

  // destructing assignment (비구조화 할당)
  // const email = req.body.email을 다음과 같이 변경
  const { email, name, password } = req.body;

  // request body가 잘못되었을 때
  if (!email || !name || !password) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  // 해당 email을 가진 user가 이미 있을 때
  const existingUser = users.filter((obj) => obj.email === email).length > 0; // 조건을 만족하는 배열을 return
  if (existingUser) {
    // 409: conflict
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_EMAIL));
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password,
  };

  res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.CREATED_USER, newUser));
};
