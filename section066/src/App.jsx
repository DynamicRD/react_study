import "./App.css";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import { useState } from "react";

function App() {
  const [input, setInput] = useState({
    count: "0",
    firstNum: "",
    secondNum: "",
    symbol: "",
  });

<<<<<<< HEAD
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
=======
  function onChange(e) {
    console.log({ ...input, [e.target.name]: e.target.value });
    setInput({ ...input, [e.target.name]: Number(e.target.value) });
  }

  const onClickButton = (value) => {
    setInput(input.count + value);
>>>>>>> parent of 8e47fce (간단한 계산기)
  };

  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <section className="viewer">
        <Viewer count={input.count} />
      </section>
      <section className="controller">
<<<<<<< HEAD
<<<<<<< HEAD
        <Controller />
=======
        <Controller
          onChange={onChange}
          input={input}
          onClickCalculate={onClickCalculate}
        />
>>>>>>> 8e47fce8445ff7a0a14a13b15d2039973085717f
=======
        <Controller onClickButton={onClickButton} />
>>>>>>> parent of 8e47fce (간단한 계산기)
      </section>
    </div>
  );
}

export default App;
