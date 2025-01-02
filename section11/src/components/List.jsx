import "./List.css";
import ListItem from "./ListItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
  const todos = useContext(TodoStateContext);
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

  //랜더링이 발생할때마다 전체갯수, 업무를 완료한갯수, 업무를 미완성한갯수 연산한다.
  // const getAnalyzeData = () => {
  //   console.log("getAnalyzeData 호출");
  //   const totalCount = todos.length;
  //   //필터링이 시간을 많이 잡아먹는다
  //   const todosDone = todos.filter((item) => {
  //     return item.isDone === true;
  //   });
  //   const doneCount = todosDone.length;
  //   const notDoneCount = totalCount - doneCount;
  //   return { totalCount, doneCount, notDoneCount };
  // };

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    //console.log("getAnalyzeData 호출");
    const totalCount = todos.length;
    const todosDone = todos.filter((item) => {
      return item.isDone === true;
    });
    const doneCount = todosDone.length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className="list">
      <h4>Todo List 🎄</h4>
      <div>
        <p> totalCount: {totalCount}</p>
        <p> doneCount: {doneCount}</p>
        <p> notDoneCount : {notDoneCount}</p>
      </div>
      <input
        type="text"
        onChange={onchangeSearch}
        placeholder="검색어를 입력해주세요"
      />
      <div className="item">
        {filterItem.map((item) => {
          console.log(item.id);
          return <ListItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default List;
