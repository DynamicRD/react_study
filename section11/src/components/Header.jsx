import "./Header.css";
import { memo } from "react";

const Header = () => {
  console.log("헤더 랜더링 발생");
  return (
    <div className="header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default memo(Header);
