import React from "react";
import { Link } from "react-router-dom";
import "./BoardList.css";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const BoardList = ({ todos, onDelete, onUpdateItem }) => {
  return (
    <div className="board-list">
      <h2>게시물 목록</h2>

      {/* 게시물이 없으면 "게시물 없음" 표시 */}
      {todos.length === 0 ? (
        <p>게시물이 없습니다.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>시간</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>
                  <Link to={`/detail/${todo.id}`}>{todo.title}</Link>
                </td>
                <td>
                  <Link to={`/detail/${todo.id}`}>{todo.writer}</Link>
                </td>
                <td>{formatDate(todo.date)}</td>
                <td>
                  <Link to={`/edit/${todo.id}`}>
                    <button onClick={() => onUpdateItem(todo.id)}>수정</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => onDelete(todo.id)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BoardList;
