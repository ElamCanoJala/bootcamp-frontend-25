// import React, { useState } from "react";
import TodoItem from "../atoms/TodoItem";
import Button from "../atoms/Button";
import { useReducer } from "react";
import taskReducer, { initialState } from "../assets/taskReducer";

const TodoCard = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const { tasks, input } = state;

  function handleAddTask() {
    dispatch({ type: "added" });
  }

  function handleToggleTask(id) {
    dispatch({ type: "toggled", payload: { id } });
  }

  function handleDeleteTask(id) {
    dispatch({ type: "deleted", payload: { id } });
  }

  function handleEditTask(id, text) {
    dispatch({ type: "edited", payload: { id, text } });
  }
  function handleStartEditing(id) {
    dispatch({ type: "startEditing", payload: { id } });
  }

  function handleChangeEditText(id, text) {
    dispatch({ type: "changeEditText", payload: { id, text } });
  }
  // const [todos, setTodos] = useState([]);
  // const [input, setInput] = useState("");

  // const addTodo = () => {
  //   if (!input.trim()) return;
  //   setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
  //   setInput("");
  // };

  // const toggleTodo = (id) => {
  //   setTodos(
  //     todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
  //   );
  // };

  // const deleteTodo = (id) => {
  //   setTodos(todos.filter((t) => t.id !== id));
  // };

  // const editTodo = (id, newText) => {
  //   setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  // };

  return (
    <div style={{ padding: "10px" }}>
      <h1>Prague itinerary</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={(e) =>
            dispatch({ type: "inputChanged", payload: e.target.value })
          }
          placeholder="Add a task"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAddTask();
          }}
        />
        <Button onclick={handleAddTask} text={"Add"} style={"add"} />
      </div>

      <div>
        {tasks.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
            onStartEditing={handleStartEditing}
            onChangeEditText={handleChangeEditText}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoCard;
