//1. Date 객체 생성
let date1 = new Date();
console.log(date1);

let date2 = new Date(1997,1,1,23,57,58);
console.log(date2);

//2. timeStamp : 시간 => 숫자로 표현하는 방법 1970.1.1.0,0,0초 = 0
//1970.1.1.0,0,2초 = 2000
let date3 = new Date();
let ts1 = date3.getTime();
console.log(ts1);
console.log(date3);
let date4 = new Date(ts1+10000);
console.log(date4);

//3. 시간을 추출하는 방법
let date5 = new Date();
console.log(date5);
let year = date5.getFullYear();
let month = date5.getMonth() + 1;
let date = date5.getDate();
let hours = date5.getHours();
let minute = date5.getMinutes();
let seconds = date5.getSeconds();
let day = date5.getDay();
//day: 0 일
console.log(year,month,date,hours,minute,seconds,day);

//4. 시간을 설정할 수 있다.
let date6 = new Date();
date6.setFullYear(2023);
date6.setMonth(12-1);
date6.setDate(24);
date6.setHours(15);
date6.setMinutes(13);
date6.setSeconds(50);
console.log(date6);

//5. 시간은 빼고 날짜만 출력하기
console.log(date6.toDateString());

//6.현지에 맞는 로컬 시간출력
console.log(date6.toLocaleString());