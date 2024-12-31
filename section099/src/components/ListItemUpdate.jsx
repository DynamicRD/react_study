import "./Editer.css";
import { useState, useRef } from "react";

const ListItemUpdate = ({ onUpdateReal, id }) => {
  const [content2, setContent2] = useState("");
  const inputRef = useRef();

  const onSubmit2 = () => {
    if (content2 === "") {
      alert("내용을 입력해주세요");
      inputRef.current.focus();
      return;
    }

    onUpdateReal(id, content2);
    setContent2("");
  };
  const onChangeContent2 = (e) => {
    setContent2(e.target.value);
  };
  const onKeyDown2 = (e) => {
    if (e.keyCode === 13) {
      onSubmit2();
    }
  };
  return (
    <div className="editer">
      <input
        value={content2}
        ref={inputRef}
        onChange={onChangeContent2}
        onKeyDown={onKeyDown2}
        type="text"
        placeholder="본문"
      />
      <button onClick={onSubmit2}>수정</button>
    </div>
  );
};

export default ListItemUpdate;
