// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴(대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name : '김경진',
  age: 24,
  hobby: '테니스',
  10: 20,
  extra: {},
}


// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

let name = person.name;
console.log(name);

let age = person['age']
console.log(age)

let property = 'hobby'
let hobby = person[property]
console.log(hobby)

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = '학생'
person['favoriteFood'] = '떡볶이'

// 3.3 프로퍼티를 수정하는 방법
person.job = 'educator'
person['favoriteFood'] = '초콜릿'

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person['favoriteFood']

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in연산자)
let result1 = 'name' in person
let result2 = 'cat' in person

console.log(result2)