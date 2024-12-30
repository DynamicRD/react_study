import { useState } from "react";

//사용자 훅
//함수명에 use만 붙이면 사용자 컴포넌트로 생각함
function useInput() {
  const [name, setName] = useState("");

  const onChange = (e) => {
    setName(e.target.value);
  };

  return [name, onChange];
}

const HookExam = () => {
  //  const [name, setName] = useState("");
  const [name, setName] = useInput();
  const [name2, setName2] = useInput();

  return (
    <>
      <div>
        <input type="text" value={name} onChange={setName} />
      </div>
      <div>
        <input type="text" value={name2} onChange={setName2} />
      </div>
    </>
  );
};

export default HookExam;
