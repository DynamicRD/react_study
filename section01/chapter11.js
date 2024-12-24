//1.push 배열에 요소 첨가
let array1 = [1,2,3];
let count = array1.push(5);
console.log(array1);

//2.pop배열에서 가져온다
//배열의 요소를 맨뒤에서 빼낸다
let array2 = [1,2,3];
let value = array2.pop();
console.log(value);
console.log(array2);

//3.shift (pop기능이 같타 : 위치 앞에서 뺀다) : 문제점이 있다
//인덱스를 전부 앞으로 땡겨서 렉걸린다
let array3 = [1,2,3];
let value3 = array3.shift();
console.log(value3);
console.log(array3);

//4.unshift (pop기능이 같타 : 위치 앞에서 뺀다) : 문제점이 있다
//인덱스를 전부 앞으로 땡겨서 렉걸린다
let array4 = [1,2,3];
let value4 = array4.unshift(5,6);
console.log(value4);
console.log(array4);

//5.tosorted() : 기존의 배열을 정렬하는게 아니라 정렬한 배열을 새로 만든다
let array5 = [3,2,1];
const array6 = array5.toSorted();
console.log(array5);
console.log(array6);