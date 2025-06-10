// 함수 선언 

function greeting () {
  console.log('안녕하세요');
}

console.log('호출 전');
greeting();  //반드시 소괄호 함께 호출
console.log('호출 후');




let area1 = getArea(10, 20);
console.log(area1);

// 이거쓸거면 함수 안에 console.log로 쓰기
getArea(10, 20);  // 인수 전달 
getArea(120, 200);


// 이렇게 선언 후에 함수를 정의해도됨 
// 호이스팅 
// -> 끌어올리다 라는 뜻

function getArea(width, height) { //매개변수 

  function another() {
    console.log('another')
  }
  another();
    
  let area = width * height

  return area; //반환값
}