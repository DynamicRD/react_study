//1.비동기처리 작업
function task(){
    setTimeout(()=>{
        console.log("~~3초 걸려서 hello");
    },3000);
}

function task2(callback){
    setTimeout(callback,3000);
}

//함수 선언,표현식(익명함수),화살표함수 다 똑같다
let callback = ()=>{
    console.log("~~3초 걸려서 hello");
};

task2(callback);

//task();

//2.비동기 처리 작업진행
function add(a,b){
    const sum = a+b;
    setTimeout(()=>{
        console.log(sum);
    },3000);
}

function add2(a,b,callback2){
    setTimeout(callback2,3000);
}
function add22(a,b,callback2){
    setTimeout(()=>{
        callback2},3000);
}

function add3(a,b,callback3){
    setTimeout(()=>{
        const sum = a+b;
        callback3(sum);
    },3000);
}
add3(10,20,(sum)=>{
    console.log(sum);
})

//add(10,20);

add22(10,20,(a,b)=>{
    const sum = a+b;
    console.log(sum);
})