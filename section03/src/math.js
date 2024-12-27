//common js 모듈시스템 math 모듈(계산하는 모듈: 라이브러리: 함수), 클래스
//모듈은 함수 선언식으로만 만든다
export function add(a,b){
    return a+b;
}
export function sub(a,b){
    return a-b;
}

export default function multiply(a,b){
    return a * b;
}

//ESM  모듈방식으로 전환한다
//export {add,sub,multiply};