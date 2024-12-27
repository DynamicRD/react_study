import "./App.css";
import { useState } from "react";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

//함수같아보이지만 클래스
function App() {
  return (
    <>
      <div>
        <Bulb />
        <Counter />
      </div>
    </>
  );
}

export default App;
