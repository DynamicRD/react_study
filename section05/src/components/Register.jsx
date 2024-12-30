import { useState, useRef } from "react";

const Register = () => {
  const countRef = useRef(0);
  const inputRef = useRef();

  const [input, setInput] = useState({
    name: "이름",
    birth: "",
    country: "",
    bio: "",
  });

  //   //이렇게 들어간다
  //   let input1 = {
  //     name: "이름",
  //     birth: "",
  //     country: "",
  //     bio: "",
  //   };

  function onChange(e) {
    countRef.current++;
    console.log({ ...input, [e.target.name]: e.target.value });
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  //전송을 할때 점검(패턴검색)
  const onSubmit = () => {
    if (input.name === "") {
      alert("name 값이 없습니다");
      inputRef.current.focus();
      console.log(inputRef);
    }
  };

  console.log(countRef.current);

  return (
    <>
      <div>
        <input
          value={input.name}
          ref={inputRef}
          name="name"
          onChange={onChange}
          type="text"
          placeholder="이름"
        />
      </div>
      <div>
        <input
          value={input.birth}
          name="birth"
          type="date"
          onChange={onChange}
        />
      </div>
      <div>
        <select value={input.contry} name="country" onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea value={input.bio} name="bio" onChange={onChange}></textarea>
      </div>
      <button onClick={onSubmit}>전송</button>
    </>
  );
};

export default Register;
