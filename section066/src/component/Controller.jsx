import "./controller.css";
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
          onChange={onChangeSymbol}
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
