//1. 변수 (var는 추천하지 않음)
let age = 100;
age = 30;
age = 'a';
age = "문자열변수";
age = false;
age = null;

console.log(age);

//var의 문제점(중복선언이 가능하다)
var wee = 100;
var wee = 20; 

//2. 상수(값 1번만 할당가능, 값을 지정하지 않으면 에러)
const NUM = 10;
console.log(NUM);

//3.변수 명명 규칙(자바식 카멜 표기법), 숫자를 뒤에다가, 앞은 영문자만, $ _(특수문자 허용)
let _name = 1000;
console.log(_name);
let $name = 1000;
console.log($name);

//4.변수명에 예약어는 사용하지 마라
//let for = 10;
//let if = 10;

//5. 변수명,카멜표기법, 상수: 대문자, 단어(가독성있게 설정)
let studentCount = 100;
console.log(100);

let undefinedValue;
console.log(undefinedValue);