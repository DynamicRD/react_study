import "./controller.css";

const Controller = ({ onClickButton }) => {
  const onClickValue = (e) => {
    onClickButton(Number(e.target.value)); // 버튼의 값을 숫자로 변환해서 전달
  };

  return (
    <div>
      <button
        onClick={(e) => {
          onClickValue(e); // onClickValue 함수 호출
        }}
        value="-1"
      >
        -1
      </button>
      <button
        onClick={(e) => {
          onClickValue(e);
        }}
        value="-10"
      >
        -10
      </button>
      <button
        onClick={(e) => {
          onClickValue(e);
        }}
        value="-100"
      >
        -100
      </button>
      <button
        onClick={(e) => {
          onClickValue(e);
        }}
        value="100"
      >
        100
      </button>
      <button
        onClick={(e) => {
          onClickValue(e);
        }}
        value="10"
      >
        10
      </button>
      <button
        onClick={(e) => {
          onClickValue(e);
        }}
        value="1"
      >
        1
      </button>
    </div>
  );
};

export default Controller;
