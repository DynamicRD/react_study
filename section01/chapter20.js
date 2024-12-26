//async  new Promise()를 사용하지 않고 비동기로 처리한다
//리턴값으로 promise를 준다
async function getData() {
    return {name:"kdj", id:"kdj123"};
}

console.log(getData());

//async
async function getData2() {
    const primise =new Promise((resolve,reject)=>{
        setTimeout(() => {
           resolve({name:"kdj", id:"kdj123"}); 
        }, 2000);
    })
    return primise;
}
console.log(getData2());

//3. awit : async 함수 내부에서만 사용이 가능한 키워드
//비동기 함수가 다 처리되기를 기다리는 역할
async function printData() {
    getData()
    .then((value)=>{
        console.log(value);
    })
    .catch((value)=>{
        console.log(value);
    });
}
async function printData2() {
    const data = await getData()
    console.log(data);
}
printData2();