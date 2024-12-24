//객체순회방법
const person = {
    name: "kdj",
    age: 29,
    tall: 178
};

console.log(person["age"]);

//객체에서 멤버변수의 이름을 배열로 가져오기
const personkey = Object.keys(person);
const personValue = Object.values(person);
console.log(personkey);
//반복문을 객체값에 모든 원소값을 출력한다.
for(let i  = 0;i<personkey.length;i++){
    console.log(personkey[i]);
    console.log(personValue[i]);
}