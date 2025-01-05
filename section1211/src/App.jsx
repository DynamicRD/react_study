import React, { useReducer, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BoardList from "./pages/BoardList";
import BoardDetail from "./pages/BoardDetail";
import BoardEdit from "./pages/BoardEdit";
import BoardCreate from "./pages/BoardCreate";
import './App.css'
const mockData = [
  { id: 3, writer: "홍길동", title:"제목1", content: "게시물 1", date: 1736050740000, isUpdate: false },
  { id: 2, writer: "김철수",title:"제목2", content: "게시물 2", date: 1736050740000, isUpdate: false },
  { id: 1, writer: "이영희", title:"제목3",content: "게시물 3", date: 1736050740000, isUpdate: false },
];

function reducer(state, action) {
  switch (action.type) {
    case "INSERT":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.data ? { ...item, isDone: !item.isDone } : item
      );
    case "UPDATEREAL":
      return state.map((item) =>
        item.id === action.data.id
          ? { ...item, content: action.data.content, writer: action.data.writer, title: action.data.title, isUpdate: false }
          : item
      );
    case "UPDATEITEM":
      return state.map((item) => 
        item.id === action.data ? { ...item, isUpdate: !item.isUpdate } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.data);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  const onInsert = (content, writer,title) => {
    dispatch({
      type: "INSERT",
      data: {
        id: idRef.current++, 
        writer: writer,
        title: title,
        content: content,
        date: new Date().getTime(),
        isUpdate: false,
      },
    });
  };

  const onUpdateReal = (id, content,writer,title) => {
    dispatch({
      type: "UPDATEREAL",
      data: { id, content,writer,title },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: id,
    });
  };

  const onUpdateItem = (id) => {
    dispatch({
      type: "UPDATEITEM",
      data: id,
    });
  };

  return (
    <Router>
      <div className="mainBoard">
        <nav>
          <Link to="/">메인화면</Link> | <Link to="/create">글쓰기</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<BoardList todos={todos} onDelete={onDelete} onUpdateItem={onUpdateItem} />}
          />
          <Route
            path="/detail/:id"
            element={<BoardDetail todos={todos} />}
          />
          <Route
            path="/edit/:id"
            element={<BoardEdit todos={todos} onUpdateReal={onUpdateReal} />}
          />
          <Route path="/create" element={<BoardCreate onInsert={onInsert} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;