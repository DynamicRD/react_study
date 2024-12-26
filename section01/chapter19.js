//1. promise pending 상태

// const promise = new Promise(()=>{
//     //작업처리 2초 걸렸다고 생각해라
//     setTimeout(()=>{
//         console.log("hello");
//     }, 2000);
// });

//promise를 2초후에 부르는게아니라 바로 리턴되는 promise 콜한것이다.
//console.log(promise);


//2. propmise fullfilled 상태
// const promise2 = new Promise((resolve,reject)=>{
//     //작업처리 2초 걸렸다고 생각해라
//     setTimeout(()=>{
//         console.log("hello");
//         resolve("hello");
//     }, 2000);
// });

// setTimeout(()=>{
//     console.log(promise2);
// },3000)


//3. propmise rejected 상태
// const promise3 = new Promise((resolve,reject)=>{
//     //작업처리 2초 걸렸다고 생각해라
//     setTimeout(()=>{
//         console.log("hello");
//         reject("실패하는 이유를 점검해봐");
//     }, 2000);
// });

// setTimeout(()=>{
//     console.log(promise3);
// },3000)


//4.promiset 실제 적용
// const promise4 = new Promise((resolve,reject)=>{
//     //작업처리 2초 걸렸다고 생각해라
//     //excutor 처리문
//     //숫자값을 주면 타입을 점검해서 number 타입이면 resolve, 아니면 reject
//     setTimeout(()=>{
//         const num = "10";
//         if(typeof num === 'number'){
//             resolve(num + 10);
//         }else{
//             reject(`${num}은 숫자가 아닙니다.`);
//         }
//         console.log("hello");
//         reject("실패하는 이유를 점검해봐");
//     }, 2000);
// });

// setTimeout(()=>{
//     console.log(promise4);
// },3000)


//5. promise 실제적용 성공했을때와 실패했을때를 처리한다
// const promise5 = new Promise((resolve,reject)=>{
//     //작업처리 2초 걸렸다고 생각해라
//     //excutor 처리문
//     //숫자값을 주면 타입을 점검해서 number 타입이면 resolve, 아니면 reject
//     setTimeout(()=>{
//         const num = "십";
//         if(typeof num === 'number'){
//             resolve(num + 10);
//         }else{
//             reject(`${num}은 숫자가 아닙니다.`);
//         }
//     }, 2000);
// });

// //성공했을때 실행하는 함수로 결과를 화면에 출력해야한다
// promise5.then((value)=>{
//     console.log(value);
// });
// promise5.catch((value)=>{
//     console.log(value);
// });


//6. promise 실제적용 성공했을때와 실패했을때를 처리한다 => 편리하게 처리
//promise 체인
// promise5.then((value)=>{
//     console.log(value);
// }).catch((value)=>{
//     console.log(value);
// });

//7.함수를 통해서 promise 실행하기
//선언적인 함수
// function add(num){
//     const promise5 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const num = "십";
//             if(typeof num === 'number'){
//                 resolve(num + 10);
//             }else{
//                 reject(`${num}은 숫자가 아닙니다.`);
//             }
//         }, 2000);
//     });
//     return promise5;
// }

// const promise6 = add(10);
// promise6.then((value)=>{
//     console.log(value);
// }).catch((value)=>{
//     console.log(value);
// });

//8.함수를 통해서 promise 실행하기 두번 콜백처리한다.
function add(num){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const num = 10;
            if(typeof num === 'number'){
                resolve(num + 10);
            }else{
                reject(`${num}은 숫자가 아닙니다.`);
            }
        }, 2000);
    });
    return promise;
}

//콜백지옥
// const promise7 = add(10);
// promise7.then((value)=>{
//     console.log("promise7"+value);
//     const promise8 = add(20);
//     promise8.then((result)=>{
//         console.log("promise8"+result);
//     }).catch((result)=>{
//         console.log("promise8"+result);
//     });
// }).catch((value)=>{
//     console.log("promise7"+value);
// });

//콜백지옥 해결
// const promise7 = add(10);
// promise7.then((value)=>{
//     console.log("promise7 "+value);
//     return add(20);
// }).then((result)=>{
//     console.log("promise8 "+result);
//     return add(30);
// }).then((result)=>{
//     console.log("promise9 "+result);
//     return add(40);
// }).catch((error)=>{
//     console.log("promise7~9 "+error);
// });

//음식을 주문하는 상황 promise chain
function orderFood2(flag,food){
    const promise = new Promise((resolve,reject)=>{
        console.log(food+" 음식 주문 ");
        setTimeout(()=>{
            if(flag === true){
                resolve(food+"주문 완료");
            }else{
                reject(food+" 음식 실패");
            }
        },3000);
    });
    return promise;
}

function coolFood2(food){
    promise = new Promise((resolve,reject)=>{
        console.log(food+" 음식 차게 주문");
        setTimeout(()=>{
            let flag = true;
            if(flag){
                resolve(food+" 음식 차게주문 성공");
            }else{
                reject(food+" 음식 차게 실패");
            }
        },3000);
    });
    return promise;
};

function freezeFood2(food){
    const promise = new Promise((resolve,reject)=>{
        console.log(food+" 음식 냉동 주문");
        setTimeout(()=>{
            let flag = true;
            if(flag){
                resolve(food);
            }else{
                reject(food+" 음식 냉동 실패");
            }
        },3000);
    });
    return promise;
}


// orderFood2(true,"떡볶이").then((value)=>{
//     console.log(value);
// }).catch((value)=>{
//     console.log(value);
// });

// coolFood2(true,"떡볶이").then((value)=>{
//     console.log(value);
// }).catch((value)=>{
//     console.log(value);
// });

// freezeFood2(true,"떡볶이").then((value)=>{
//     console.log(value);
// }).catch((value)=>{
//     console.log(value);
// });

//3단계 떡볶이 음식 주문 = >차게 주문
orderFood2(true,"떡볶이")
.then((value)=>{
    console.log(value);
    return coolFood2("떡볶이");
}).then((value)=>{
    console.log(value);
    return freezeFood2("떡볶이");
}).then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
});