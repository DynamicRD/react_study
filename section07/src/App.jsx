import "./App.css";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import Even from "./component/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(10);
  const [input, setInput] = useState("");
  const isMount = useRef(false);
  //마운트 될때, 모든 스태이트가 바뀔때
  useEffect(() => {
    console.log(isMount.current);
    if (isMount.current === false) {
      isMount.current = true;
      console.log(`(Mount)count:`);
      return;
    }
    console.log(`(Update)count:`);
  });
  const onClickButton = (value) => {
    setCount(count + value);
  };
  //input 변화된값 setting
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <div>
        <input type="text" value={input} onChange={onChangeInput} />
      </div>
      <section className="viewer">
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section className="controller">
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
