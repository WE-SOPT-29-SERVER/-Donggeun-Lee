// 선언부가 항상 위로 끌어올려짐

// original code
hoistFunction();

function hoistFunction() {
  console.log(x);
  var x = 'var';
  console.log(x);
}

// same code interpreted by the JS engine
function hoistFunction() {
  // 함수 끌어올려짐
  var x; // 변수도 함수의 최상단으로 끌어올려짐
  console.log(x);
  x = 'var';
  console.log(x);
}

hoistFunction();

// 결론: var 대신에 let과 const를 사용한다!
