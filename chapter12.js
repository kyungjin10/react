// 1. 함수 표현식
function funcA() {
  console.log('funcA');
}

let varA = funcA;
varA();

let varB = function funcB() { //익명함수
  console.log('funcB');
}

varB();


// 2. 화살표 함수
let varc = (value) => {
  console.log(value)
  return value + 1
};

console.log(varc(10))
