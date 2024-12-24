//forEach(함수(value,index,객체배열)) : 향상된 포문 for(객체 : 객체배열)
//forEach마다 각자의 리턴값이 있다
const array =[1,2,3,4];
const array2 = [];

//1.일반 for문으로 출력
for(let i = 0 ;i<array.length;i++){
    console.log(array[i]);

}
//2.forEach
console.log(array);

array.forEach((v,i,a)=>{
    console.log(v);
    console.log(i);
    console.log(a);
    console.log("========");
});

array.forEach((v)=>console.log(v));

array.forEach((v)=>array2.push(v*2));
console.log(array2);

//3.find(객체 위치 배열)
let array3 = [
    { name: "구길동" ,age: 10},
    { name: "홍길동" ,age: 10},
    { name: "저길동" ,age: 10},
    { name: "말길동" ,age: 10},
    { name: "홍길동" ,age: 15}
];
//array3.forEach((v)=>{console.log(v)});

//자바의 쿼리문 같은 역할
//해당되는 객체를 하나 가져온다
const findValue= array3.find((v)=>{
    return v.name === "홍길동";
});
console.log(findValue);

//4.filter -> 배열로 전달
//해당되는 객체들의 배열을 가져온다
//select * where name = ?
const findArray = array3.filter((v)=>{
    return v.name === "홍길동";
})
console.log(findArray);

//5.Map (지도 : 내가 요청하는 정보로 새로 배열로 포함시켜서 리턴한다.)
//배열안의 객체들의 해당 밸류값 가진 배열을 만든다
const nameArray = array3.map((v)=>{
    return v.name + "길동";
});
console.log(nameArray);

//6.findIndex 
//해당된 객체의 인덱스를 찾아준다. 대신 첫번째 하나만
const findIdx = array3.findIndex((v)=>{
    return v.name ==="홍길동";
});
console.log(findIdx);
 
//7.includes
//해당 배열이 매개변수를 포함하는지 확인해서 boolean반환
//const array =[1,2,3,4];
const idx2 = array.includes(3);
console.log(idx2);

//8.indexOf
//해당 배열에 전달한 매개변수값이 존재하는 인덱스를 반환
//없으면 -1을 반환
const idx3 = array.indexOf(3)
console.log(idx3);

//9.slice
//앞숫자 이상, 뒤숫자 미만 인덱스로 자름
const array7 = [1,2,3,4,5,6,7];
const sliceArray = array7.slice(2,5);
console.log(sliceArray);

let array8 = [
    { name: "구길동" ,age: 10},
    { name: "홍길동" ,age: 10},
    { name: "저길동" ,age: 10},
    { name: "말길동" ,age: 10},
    { name: "홍길동" ,age: 15}
];

const sliceArray2 = array8.slice(2,4);
console.log(sliceArray2);

//10.concat
//배열을 서로 더함
let array9 = [
    { name: "구길동" ,age: 10},
    { name: "홍길동" ,age: 10},
];
let array10 = [
    { name: "말길동" ,age: 10},
    { name: "홍길동" ,age: 15}
];

const returnArray = array9.concat(array10);
console.log(returnArray);

//11.sort
//첫글자를 숫자로 안보고 문자로 보고 정렬
const array11 = [1,90,2,20,8,7,6,5,3,4];
array11.sort();
console.log(array11);

array11.sort((a,b)=>{return a-b});
//array11.sort((a,b)=>{return b-a}); 역정렬
console.log(array11);

//12.join
//배열의 구성물들을 붙여준다
const array12 = ["김동진","님","안녕하세요","반가워요"];
console.log(array12.join("=="));

//13.for of 반복문
//자바의 향상된 for문
let array13 = [1, 2, 3];
for (let item of array13) {
 console.log(item);
}

//14.for in
const person = {
    name: "kdj",
    age: 29,
    tall: 178
};
for (let key in person) {
    const value = person[key];
    console.log(key, value);
   }