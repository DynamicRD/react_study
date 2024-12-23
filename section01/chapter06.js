//1. 객체생성 생성자, 객체 리터널
let obj1 = new Object();
let obj2 = {};

//2. 객체 프로퍼티(객체속성)
let person = {
    house: "서초구",
    age: 30,
    hobby: "축구",
    extra : {},
    extra2: function (){
        console.log("나는 멤버함수입니다.")
    },
    isLike: true
};
person.name = "홍길동";
//멤버변수 새로 추가
person.address = "강남구 352";
//멤버변수 삭제
delete person.address;
//멤버변수 유무
let flag = "name" in person;
console.log(`flag=${flag}`);
//첨자식으로 가능하다
console.log(`person["address"] = ${person["address"]}`);

//상수객체는 번지가 상수이지 내용이 상수가 아니다
//그래서 내용 객체는 추가할수 있다
const animal = {
    type: "고양이",
    type: "나비"
}