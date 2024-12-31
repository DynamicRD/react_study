import "./controller.css";

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
        <select name="symbol" value={input.symbol} onChange={onChange}>
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
