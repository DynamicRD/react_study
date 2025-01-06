import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BoardEdit.css";

const BoardEdit = ({ todos, onUpdateReal }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [editWrite, setEditWrite] = useState("");
  const [editTitle, setEditTitle] = useState("");

  useEffect(() => {
    const currentPost = todos.find((todo) => todo.id === parseInt(id));
    if (currentPost) {
      setPost(currentPost);
      setEditContent(currentPost.content);
      setEditTitle(currentPost.title); // 수정된 부분: title을 가져옵니다.
      setEditWrite(currentPost.writer); // 수정된 부분: writer를 가져옵니다.
    }
  }, [id, todos]);

  const handleUpdate = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    onUpdateReal(post.id, editContent, editWrite, editTitle); // 수정된 값으로 업데이트
    navigate("/"); // 수정 후 목록 페이지로 돌아가기
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="board-edit">
      <h2>게시물 수정하기</h2>
      <form onSubmit={handleUpdate}>
        <table>
          <tr>
            <td>제목:</td>
            <td>
              {" "}
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </td>
            <td>작성자:</td>
            <td>
              {" "}
              <input
                type="text"
                value={editWrite}
                onChange={(e) => setEditWrite(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>내용:</td>
            <td colSpan={3}>
              {" "}
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
            </td>
          </tr>
        </table>
        <button type="submit">수정 완료</button>
      </form>
    </div>
  );
};

export default BoardEdit;
