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

  const onChangeValue = (value) => {
    setInput(input.count + value);
  };

  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <section className="viewer">
        <Viewer count={input.count} />
      </section>
      <section className="controller">
        <Controller />
      </section>
    </div>
  );
}

export default App;
