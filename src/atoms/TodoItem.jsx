import Button from "./Button";

const TodoItem = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
  onStartEditing,
  onChangeEditText,
}) => {
  const handleEditClick = () => {
    if (todo.isEditing) {
      onEdit(todo.id, todo.editText);
    } else {
      onStartEditing(todo.id);
    }
  };

  const handleChangeEditText = (e) => {
    onChangeEditText(todo.id, e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        margin: "7px",
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{ accentColor: "violet" }}
      />
      {todo.isEditing ? (
        <input value={todo.editText} onChange={handleChangeEditText} />
      ) : (
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.text}
        </span>
      )}
      <Button
        onclick={handleEditClick}
        text={todo.isEditing ? "Save" : "Edit"}
        style={todo.isEditing ? "save" : "edit"}
      />
      <Button
        onclick={() => onDelete(todo.id)}
        text="Delete"
        style={"delete"}
      />
    </div>
  );
};

export default TodoItem;
