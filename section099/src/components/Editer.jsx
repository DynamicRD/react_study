import "./Editer.css";
import { useState, useRef } from "react";

const Editer = ({ onInsert }) => {
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");
  const inputRef = useRef();

  const onSubmit = () => {
    if (content === "" || writer === "") {
      alert("내용을 입력해주세요");
      inputRef.current.focus();
      return;
    }

    onInsert(content, writer);
    setContent("");
    setWriter("");
  };
  const onChangeConetent = (e) => {
    setContent(e.target.value);
  };
  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div className="editer">
      <input
        value={writer}
        ref={inputRef}
        onChange={onChangeWriter}
        onKeyDown={onKeyDown}
        type="text"
        placeholder="작성자"
      />
      <input
        value={content}
        ref={inputRef}
        onChange={onChangeConetent}
        onKeyDown={onKeyDown}
        type="text"
        placeholder="본문"
      />
      <button onClick={onSubmit}>등록</button>
    </div>
  );
};

export default Editer;
