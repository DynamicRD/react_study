import "./App.css";
import Header from "./components/Header";
import Editer from "./components/Editer";
import List from "./components/List";
import { useState, useRef, useReducer } from "react";

// 가상의 데이터(목업)
const mockData = [
  {
    id: 0,
    writer: "영구",
    isDone: false,
    content: "리액트 공부하기",
    date: new Date().getTime(),
    isUpdate: false,
  },
  {
    id: 1,
    writer: "짱구",
    isDone: false,
    content: "스프링부트 공부하기",
    date: new Date().getTime(),
    isUpdate: false,
  },
  {
    id: 2,
    writer: "영희",
    isDone: true,
    content: "유튜브 자바보며 쉬기",
    date: new Date().getTime(),
    isUpdate: false,
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
    case "UPDATEREAL":
      return state.map((item) =>
        item.id === action.data.id
          ? { ...item, content: action.data.content, isUpdate: false }
          : item
      ); // 아이템의 isDone을 반전
    case "UPDATEITEM":
      return state.map((item) => {
        if (item.id === action.data) {
          return { ...item, isUpdate: true };
        } else {
          return { ...item, isUpdate: false };
        }
      });
    case "DELETE":
      return state.filter((item) => item.id !== action.data); // 아이템 삭제
    default:
      return state;
  }
}

// case "UPDATEITEM":
//   return state.map((item) =>
//     item.id === action.data &&
//     state.filter((item) => item.isUpdate === true).length === 0
//       ? { ...item, isUpdate: !item.isUpdate }
//       : item
//   ); // 아이템의 isDone을 반전

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData); // useReducer 사용법 수정
  const idRef = useRef(3);

  // todos 추가할 레코드(객체) 처리하는 핸들러 함수
  const onInsert = (data, data2) => {
    dispatch({
      type: "INSERT",
      data: {
        id: idRef.current++, // pk
        writer: data2,
        isDone: false,
        content: data,
        date: new Date().getTime(), // 숫자로 관리하면 좋다
        isUpdate: false,
      },
    });
  };

  // 본문수정
  const onUpdateReal = (id, data) => {
    dispatch({
      type: "UPDATEREAL",
      data: {
        id: id,
        content: data,
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

  // todos 삭제할 레코드 처리할 핸들러 함수
  const onUpdateItem = (targetId) => {
    dispatch({
      type: "UPDATEITEM",
      data: targetId,
    });
  };

  return (
    <div className="app">
      <Header />
      <Editer onInsert={onInsert} />
      <List
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onUpdateItem={onUpdateItem}
        onUpdateReal={onUpdateReal}
      />
    </div>
  );
}

export default App;
