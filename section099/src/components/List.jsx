import "./List.css";
import ListItem from "./ListItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete, onUpdateItem, onUpdateReal }) => {
  const [search, setSearch] = useState("");
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
  return (
    <div className="list">
      <h4>게시판 🎄</h4>
      <input
        type="text"
        onChange={onchangeSearch}
        placeholder="검색어를 입력해주세요"
      />
      <div className="item">
        {filterItem.map((item) => {
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
    </div>
  );
};

export default List;
