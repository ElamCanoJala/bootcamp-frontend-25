import React, { useState } from "react";

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div style={{ display: "flex", gap: "10px", margin: "7px" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{ accentColor: "violet" }}
      />
      {isEditing ? (
        <input value={editText} onChange={(e) => setEditText(e.target.value)} />
      ) : (
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
