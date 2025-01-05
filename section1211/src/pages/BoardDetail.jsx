import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './BoardDetail.css'

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const BoardDetail = ({ todos, onUpdateReal }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);


  useEffect(() => {
    // todos에서 id가 일치하는 게시물 찾기
    const currentPost = todos.find((todo) => todo.id === parseInt(id));
    if (currentPost) {
      setPost(currentPost);
    // 본문 내용도 상태에 설정
    }
  }, [id, todos]);



  if (!post) return <div>Loading...</div>;

  return (
    <div className="board-detail">
      <h2>게시물 상세보기</h2>
      <table>
        <tr>
          <td>번호</td>
          <td>{post.id}</td>
          <td>제목</td>
          <td>{post.title}</td>
          <td>작성자</td>
          <td>{post.writer}</td>
          <td>작성일</td>
          <td>{formatDate(post.date)}</td>
        </tr>
        <tr>
          <td>본문</td>
          <td colSpan={7}>{post.content}</td>
        </tr>
      </table>
      <div>
        <button onClick={() => navigate("/")}>목록으로 돌아가기</button>
      </div>
    </div>
  );
};

export default BoardDetail;