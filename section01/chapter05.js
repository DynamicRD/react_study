//콜백함수 : 자바콜백함수(service,doGet,doPost)
//1. 함수 선언식을 한다
function checkMood(mood,type){
    if(mood === "good"){
        if(type === 1){
        sing();
        }else{
        dance();
        }
    }else{
        if(type === 1){
        cry();
        }else{
        angry();
        }
    }

}

//콜백함수처리
function checkMood2(mood,goodCallback,badCallback){
    if(mood === "good"){
        goodCallback();
    }else{
        badCallback();
    }

}
checkMood2("good",sing,cry);

checkMood2("good",function dance(){
    console.log("Action :: Dance");
},function angry(){
    console.log("Action :: angry");
});
//함수 표현식
checkMood2("good",function (){
    console.log("Action :: Dance2");
},function (){
    console.log("Action :: angry2");
});
//화살표함수 제일 많이 쓴다
checkMood2("good",()=>{
    console.log("Action :: Dance3");
},()=>{
    console.log("Action :: angry3");
});

function sing(){
    console.log("Action :: Sing");
}
function cry(){
    console.log("Action :: Cry");
}
function angry(){
    console.log("Action :: angry");
}
function dance(){
    console.log("Action :: Dance");
}


//콜백처리 2
function repeat(callback){
    for(let i =1;i<10;i++){
        callback(i);
        //console.log(i);
    }
}
repeat(calculate);

function calculate(i){
    console.log(i**2);
}

repeat(function calculate(i){
    console.log(i*5);
})

repeat(function (i){
    console.log(i*10);
})

repeat(i=>{
    console.log(i*100);
})