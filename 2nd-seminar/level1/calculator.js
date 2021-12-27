const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

module.exports = calculator;

/*
  // 또 다른 방식
  const add = () => {}
  const subtract = () => {}
  
  // key와 value의 이름이 같다면 생략 가능
  const calculator = {
      add, subtract
  }
  
  module.exports = calculator;
  */
