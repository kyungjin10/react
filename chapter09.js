// 1. if 조건문(if문)
let num = 9;

if (num >= 10) {
  // console.log('num은 10이상입니다.')
  // console.log('조건이 참 입니다.')
}
else if (num >= 5){
  // console.log('num은 5이상입니다')
}
else {
  // console.log('조건이 거짓입니다')
}

// 2. Switch문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다. 

let animal = 'cat';

switch (animal) {
  case 'cat': {
    console.log('고양이');
    break;
  }
  case 'dog': {
    console.log('강아지');
    break;
  }
  default: {
    console.log('그런 동물은 모릅니다')
  }
}