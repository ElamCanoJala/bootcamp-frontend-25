import { useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

let nextId = 3;

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 0, text: "Visit the museum", done: true },
    { id: 1, text: "Go shopping", done: false },
    { id: 2, text: "Read a book", done: false },
  ]);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(updatedTask) {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <>
      <h1>Task List</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
