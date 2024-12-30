import "./controller.css";
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
          onChange={onChange}
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
