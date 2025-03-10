import "./ListItem.css";
import { memo } from "react";

const ListItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  console.log(`ListItem ${id}`);
  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onDeleteItem = () => {
    onDelete(id);
  };

  return (
    <div className="listItem">
      <input
        readOnly
        onChange={onChangeCheckBox}
        checked={isDone}
        type="checkbox"
      />
      <p className="content">{content}</p>
      <p className="date">{new Date(date).toLocaleDateString()}</p>
      <button onClick={onDeleteItem}>삭제</button>
    </div>
  );
};

//고차컴포넌트(HOX: Higher order component)
// export default memo(ListItem, (prevProps, nextProps) => {
//   //memo는 이전값과 현재값을 비교한다.
//   //return false  ---> (리랜더링을 발생한다)
//   //return true   ---> (리랜더링을 발생하지 않는다.)
//   if (prevProps.id !== nextProps.id) {
//     return false;
//   }
//   if (prevProps.isDone !== nextProps.isDone) {
//     return false;
//   }
//   if (prevProps.content !== nextProps.content) {
//     return false;
//   }
//   if (prevProps.date !== nextProps.date) {
//     return false;
//   }
//   return true;
// });

export default memo(ListItem);
