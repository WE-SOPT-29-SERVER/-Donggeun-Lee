// Block Scope
// var
if (true) {
  var x = 'var';
}
console.log(`var: ${x}`);

// let or const
if (true) {
  let y = 'let';
  const z = 'const';
}
console.log(`let: ${y}`);
console.log(`const: ${z}`);

// Function Scope
// var is inaccessible from outside of the function
// 함수를 벗어난 곳에서는 사용 불가능
function colorFunction() {
  if (true) {
    var color = 'blue';
    console.log(color);
  }
  console.log(color);
}

colorFunction();
console.log(color);
