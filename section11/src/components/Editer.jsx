import "./Editer.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editer = () => {
  const { onInsert } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const onSubmit = () => {
    if (content === "") {
      alert("내용을 입력해주세요");
      inputRef.current.focus();
      return;
    }
    onInsert(content);
    setContent("");
  };
  const onChangeConetent = (e) => {
    setContent(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div className="editer">
      <input
        value={content}
        ref={inputRef}
        onChange={onChangeConetent}
        onKeyDown={onKeyDown}
        type="text"
        placeholder="새로운 할일 입력요망"
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editer;
