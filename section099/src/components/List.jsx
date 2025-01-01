import "./List.css";
import ListItem from "./ListItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete, onUpdateItem, onUpdateReal }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1); // 페이지 상태 추가
  const postsPerPage = 5; // 한 페이지에 표시할 게시물 수

  const onchangeSearch = (e) => {
    setSearch(e.target.value);
  };

  //useState 해당되는 서치내용을 바꾸면 List 리랜더링이 발생한다
  //이때 필터링을 진행한다.
  const getFilterItem = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((item) => {
      return item.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filterItem = getFilterItem();

  const totalPages = Math.ceil(filterItem.length / postsPerPage); 
  const startIndex = (page - 1) * postsPerPage; 
  const currentPosts = filterItem.slice(startIndex, startIndex + postsPerPage); 

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1); // 왼쪽 버튼 클릭 시 페이지 번호 감소
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1); // 오른쪽 버튼 클릭 시 페이지 번호 증가
    }
  };

  return (
    <div className="list">
      <h4>게시판 🎄</h4>
      <input
        type="text"
        onChange={onchangeSearch}
        placeholder="검색어를 입력해주세요"
      />
      <div className="item">
        {currentPosts.map((item) => {
          console.log(item.id);
          return (
            <ListItem
              key={item.id}
              {...item}
              onUpdateItem={onUpdateItem}
              onUpdate={onUpdate}
              onDelete={onDelete}
              onUpdateReal={onUpdateReal}
            />
          );
        })}
      </div>
      <div className="item2">
        <button onClick={handlePrevPage} disabled={page === 1}>왼쪽</button>
        <button onClick={handleNextPage} disabled={page === totalPages}>오른쪽</button>
      </div>
    </div>
  );
};

export default List;