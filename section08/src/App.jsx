import "./App.css";
import Header from "./components/Header";
import Editer from "./components/Editer";
import List from "./components/List";
import { useState, useRef } from "react";

//가상의 데이터(마운트 : 서버에서 데이터를 가져온다(Ajax json))
//목업 : 실제와 유사한 외형을 가진 모형
const mockData = [
  {
    id: 0, //pk
    isDone: false,
    content: "리액트 공부하기",
    date: new Date().getTime(), //숫자로 관리하면좋다
  },
  {
    id: 1, //pk
    isDone: false,
    content: "스프링부트 공부하기",
    date: new Date().getTime(), //숫자로 관리하면좋다
  },
  {
    id: 2, //pk
    isDone: true,
    content: "유튜브 자바보며 쉬기",
    date: new Date().getTime(), //숫자로 관리하면좋다
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  //todos 추가할 레코드(객체) 처리하는 핸들러함수
  const onInsert = (data) => {
    const newTodo = {
      id: idRef.current++, //pk
      isDone: false,
      content: data,
      date: new Date().getTime(), //숫자로 관리하면좋다
    };
    setTodos([newTodo, ...todos]);
  };
  //todos 수정할 레코드 처리할 핸들러 함수
  const onUpdate = (targetId) => {
    setTodos(
      todos.map((item) => {
        return item.id === targetId ? { ...item, isDone: !item.isDone } : item;
      })
    );
  };

  //todos 삭제할 레코드 처리하는 핸들러 함수
  const onDelete = (targetId) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== targetId;
      })
    );
  };

  return (
    <div className="app">
      <Header />
      <Editer onInsert={onInsert} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
