//1. 함수 선언식 자동으로 호이스팅이 발생한다
let area1 = getArea(10,20);
console.log(area1);

function getArea(width,height){
    return width * height;
}

//2. 함수 표현식은 자동으로 호이스팅이 발생하지 않는다
let getArea2 =function (width,height){
    return width * height;
}


let area2 = getArea2(10,20);
console.log(area2);


//3. 화살표함수는 자동으로 호이스팅이 안된다
let getArea3 = (width,height)=> width * height;

let area3 = getArea3(10,20);
console.log(area3);

// 함수안 함수는 중첩함수인데 지역변수처럼 작동한다.
function getArea4(width,height){
    function getArea5(){
        console.log('중첩함수입니다');
    }
    getArea5();
    return width * height;
}
let area4 = getArea4(100,200);