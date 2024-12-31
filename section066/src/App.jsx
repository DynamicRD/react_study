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

<<<<<<< HEAD
  const onChangeValue = (value) => {
    setInput(input.count + value);
=======
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

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onClickCalculate = () => {
    calculate();
>>>>>>> 8e47fce8445ff7a0a14a13b15d2039973085717f
  };

  return (
    <div className="app">
      <h1>Simple Calculator</h1>
      <section className="viewer">
        <Viewer count={input.count} /> 
      </section>
      <section className="controller">
<<<<<<< HEAD
        <Controller />
=======
        <Controller
          onChange={onChange}
          input={input}
          onClickCalculate={onClickCalculate}
        />
>>>>>>> 8e47fce8445ff7a0a14a13b15d2039973085717f
      </section>
    </div>
  );
}

export default App;