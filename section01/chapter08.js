//1. 단락평가
let a = false;
let b = true;

let funca = () =>{
    console.log("funca");
    return false;
}
let funcb = () =>{
    console.log("funcb");
    return true;
}

console.log(funca() && funcb());

//자바스크립트의 특성 
//타입별로 false값을 가진게 있다
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

//객체 기본값은 다 true다
let f8=[];
let f9={};


//자바스크립트의 이상한 특징
function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
   }

function printName2(person) {
    if(typeof person === 'object'){
        console.log(person.name);

    }else{
        console.log("객체 아님");
    }

    const name = person && person.name;
    console.log(name || "person의 값이 없음");
   }
   
//빈값이면 매개변수가 undefined를 전달한다
printName();

printName({
    name: "hello"
})

console.log("참이에요" && false);
console.log(false && "참이에요");

console.log("참이에요" && "참이에요2");
console.log(undefined&& false);

console.log("참이에요" || false);
console.log(false || "참이에요");

console.log("참이에요" || "참이에요2");
console.log(undefined || false);