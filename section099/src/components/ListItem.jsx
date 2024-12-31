import "./ListItem.css";
import "./ListItemUpdate";
import ListItemUpdate from "./ListItemUpdate";

const ListItem = ({
  id,
  writer,
  isDone,
  content,
  date,
  isUpdate,
  onUpdate,
  onDelete,
  onUpdateItem,
  onUpdateReal,
}) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onDeleteItem = () => {
    onDelete(id);
  };
  const onUpdateItemBox = () => {
    onUpdateItem(id);
  };
  console.log(`id = ${id}`);
  return (
    <>
      <div className="listItem">
        <input
          readOnly
          onChange={onChangeCheckBox}
          checked={isDone}
          type="checkbox"
        />
        <p className="writer">{writer}</p>
        <p className="content">{content}</p>
        <p className="date">{new Date(date).toLocaleDateString()}</p>
        <button onClick={onDeleteItem}>삭제</button>
        <button onClick={onUpdateItemBox}>수정</button>
      </div>
      {isUpdate === true ? (
        <ListItemUpdate onUpdateReal={onUpdateReal} id={id} />
      ) : (
        ""
      )}
    </>
  );
};

export default ListItem;
