import "./ListItem.css";

const ListItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
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

export default ListItem;
