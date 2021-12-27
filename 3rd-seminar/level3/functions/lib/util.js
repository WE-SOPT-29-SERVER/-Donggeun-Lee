// json의 일관적인 데이터 형태를 위해 미리 지정해둔 파일

const util = {
  success: (status, message, data) => {
    return {
      status,
      success: true,
      message,
      data,
    };
  },
  fail: (status, message) => {
    return {
      status,
      success: false,
      message,
    };
  },
};

module.exports = util;
