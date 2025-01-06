import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BoardCreate.css";
const BoardCreate = ({ onInsert }) => {
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onInsert(content, writer, title);
    navigate("/");
  };

  return (
    <div className="board-create">
      <h2>새 게시물 작성</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>
              {" "}
              <input
                type="text"
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="작성자"
                value={writer}
                onChange={(e) => setWriter(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              {" "}
              <textarea
                placeholder="내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </td>
          </tr>
        </table>

        <button type="submit">작성</button>
      </form>
    </div>
  );
};

export default BoardCreate;
