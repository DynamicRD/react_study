import "./controller.css";
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

const Controller = ({ onChange, input, onClickCalculate }) => {
  return (
    <>
      <div>
        <input
          name="firstNum"
          value={input.firstNum}
          onChange={onChange}
          type="number"
        />
      </div>
      <div>
        <select
          name="symbol"
<<<<<<< HEAD
          onChange={onChangeSymbol}
=======
          value={input.symbol}
          onChange={onChange}
>>>>>>> 8e47fce8445ff7a0a14a13b15d2039973085717f
        >
          <option value="">연산자</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>
      <div>
        <input
          name="secondNum"
          value={input.secondNum}
          onChange={onChange}
          type="number"
        />
      </div>
      <div>
        <button onClick={onClickCalculate}>계산</button>
      </div>
    </>
  );
};

export default Controller;