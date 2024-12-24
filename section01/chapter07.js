//1. 배열생성, 배열 리터널
let array = new Array();
let array2 = [];

//2. 배열 들어올수있는 멤버
let array3 = [
    1,
    1.0,
    true,
    "hello",
    undefined,
    null,
    {},
    [],
    ()=>{
        console.log("나는 함수다");
        return 0;
    }
];

console.log(array3[8]());
console.log(array3[8]);