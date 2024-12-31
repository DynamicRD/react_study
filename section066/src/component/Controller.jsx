import "./controller.css";
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";

const Controller = (input) => {
  function onChange(e) {
    console.log({ ...input, [e.target.name]: e.target.value });
    input.setInput({ ...input, [e.target.name]: Number(e.target.value) });
  }
  function onChangeSymbol(e) {
    console.log({ ...input, [e.target.name]: e.target.value });
    input.setInput({ ...input, [e.target.name]: e.target.value });
  }
=======
>>>>>>> 8e47fce8445ff7a0a14a13b15d2039973085717f
=======
import { useState } from "react";

const Controller = ({ onClickButton }) => {
  const [input, setInput] = useState({
    firstNum: "",
    secondNum: "",
    symbol: "",
  });

  function onChange(e) {
    console.log({ ...input, [e.target.name]: e.target.value });
    setInput({ ...input, [e.target.name]: e.target.value });
  }
>>>>>>> parent of 8e47fce (간단한 계산기)

  return (
    <>
      <div>
        <input
          //value={input.name}
          //ref={input.firstNum}
          name="firstNum"
          onChange={onChange}
          type="text"
        />
      </div>
      <div>
        <select
          //value={input.symbol}
          name="symbol"
<<<<<<< HEAD
<<<<<<< HEAD
          onChange={onChangeSymbol}
=======
          value={input.symbol}
=======
>>>>>>> parent of 8e47fce (간단한 계산기)
          onChange={onChange}
>>>>>>> 8e47fce8445ff7a0a14a13b15d2039973085717f
        >
          <option value=""></option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>
      <div>
        <input
          //value={input.name}
          //ref={input.secondNum}
          name="secondNum"
          onChange={onChange}
          type="text"
        />
      </div>
    </>
  );
};

export default Controller;
