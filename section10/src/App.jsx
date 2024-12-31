import "./App.css";
import Header from "./components/Header";
import Editer from "./components/Editer";
import List from "./components/List";
import { useState, useRef, useReducer } from "react";
import Exam from "./components/Exam";

// 가상의 데이터(목업)
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "리액트 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "스프링부트 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "유튜브 자바보며 쉬기",
    date: new Date().getTime(),
  },
];

// reducer 함수
function reducer(state, action) {
  switch (action.type) {
    case "INSERT":
      return [action.data, ...state]; // 새 아이템 추가
    case "UPDATE":
      return state.map((item) =>
        item.id === action.data ? { ...item, isDone: !item.isDone } : item
      ); // 아이템의 isDone을 반전
    case "DELETE":
      return state.filter((item) => item.id !== action.data); // 아이템 삭제
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData); // useReducer 사용법 수정
  const idRef = useRef(3);

  // todos 추가할 레코드(객체) 처리하는 핸들러 함수
  const onInsert = (data) => {
    dispatch({
      type: "INSERT",
      data: {
        id: idRef.current++, // pk
        isDone: false,
        content: data,
        date: new Date().getTime(), // 숫자로 관리하면 좋다
      },
    });
  };

  // todos 수정할 레코드 처리할 핸들러 함수
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      data: targetId,
    });
  };

  // todos 삭제할 레코드 처리할 핸들러 함수
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      data: targetId,
    });
  };

  return (
    <div className="app">
      <Exam />
      <Header />
      <Editer onInsert={onInsert} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
