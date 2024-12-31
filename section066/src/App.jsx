import "./App.css";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import { useState } from "react";

function App() {
  const [input, setInput] = useState({
    firstNum: "",
    secondNum: "",
    symbol: "",
    count: "0",
  });

  // 계산 함수
  const calculate = () => {
    const firstNum = parseInt(input.firstNum);
    const secondNum = parseInt(input.secondNum);
    let result;

    switch (input.symbol) {
      case "+":
        result = firstNum + secondNum;
        break;
      case "-":
        result = firstNum - secondNum;
        break;
      case "*":
        result = firstNum * secondNum;
        break;
      case "/":
        result = secondNum !== 0 ? firstNum / secondNum : "Error";
        break;
      default:
        result = "Error";
    }

    setInput({
      ...input,
      count: result.toString(),
    });
  };

  // 상태 업데이트 함수
  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="app">
      <h1>Simple Calculator</h1>
      <section className="viewer">
        <Viewer count={input.count} />
      </section>
      <section className="controller">
        <Controller
          onChange={onChange}
          input={input}
          onClickCalculate={calculate}
        />
      </section>
    </div>
  );
}

export default App;
