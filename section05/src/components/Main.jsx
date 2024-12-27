import "./Main.css";

function Main(){
  const number = 9;
  const obj = {name:"kdj",age: 10,isLogin:false};

  return(
    <>
      {obj.isLogin === false ? 
      (<div className="logout">로그아웃</div>) :
      (<div className="logout">로그인</div>)
      }    
    
    
    
    
    </>
  )
  
}

export default Main;
/* <h1>Main</h1>
<h2>삼항연산자 가능 = {number % 2 === 0 ? "짝수" : "홀수"}</h2>
<h2>number = {number}</h2>
<h2>[1,2,3] = {[1,2,3]}</h2>
<h2>true = {true}</h2>
<h2>undefined = {undefined}</h2>
<h2>null = {null}</h2>
<h2>obj.name = {obj.name}</h2> */


// if(obj.isLogin === true){
//   return(<div className="logout">{obj.name} 로그아웃</div>);
// }else{
//   return(<div style={{backgroundColor: "green",border: "1px solid black",padding:"20px"}}>{obj.name} 로그인</div>);
// }