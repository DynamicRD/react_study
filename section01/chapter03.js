//1.숫자의 양수무한대값, 음수무한대
let infinityValue = Infinity;
let mInfinityValue = -Infinity;
//나는 숫자가 아니다
let notANumber = NaN;
let nan = 1 * "weegee"; // NAN
    nan = 1 * "10"      // 자동형변환 

console.log(infinityValue);
console.log(mInfinityValue);
console.log(notANumber);
console.log(nan);

//덧셈으로 문자열 만들기
let name = "김" + "철수";
console.log(name);

//템플릿리터널 기능을 잘 사용하자
let name2 = "김구구";
let myLocation = "강남";
let introduceText = `저는 ${myLocation} 에 사는 ${name}입니다`
console.log(introduceText);

//형변환 Number, parseInt(앞에 숫자가 있으면 잘라낸다)
let str2 = "10개10";
console.log(Number(str2));
console.log(Number(str2) + 10);
console.log(parseInt(str2) + 10);

//산술연산자에서 주의할점
let num1 = 1;
let num2 = 2;
console.log(num1/num2);

//비교연산자 (==):비추 (===):강추 ,(!=):비추 ,(!==):강추
console.log("1" == 1);
console.log("1" === 1);

//typeof 연산자
let num3 = null;
console.log(typeof num3);

//병합 연산자 ( ?? ) : null이나 undefined면 그 해당된값을 적용을 안시킨다.
let num5;
num5 = num5 ?? 10;  //변수가 undefined면 다른 값을 준다.
console.log(num5);

//함수 호이스팅: 함수선언식, 함수표현식,화살표함수
//함수 선언식 : function이 붙은 식
//함수 식들을은 맨위로 끝고가서 부를수 있다

