import { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask((n) => e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      return;
    }
    setTasks((t) => [...t, newTask]);
    setNewTask((n) => "");
  };

  const handleRemoveTask = (index) => {
    const remainingTasks = tasks.filter((_, i) => i != index);
    setTasks((t) => remainingTasks);
  };

  const handleMoveTaskUp = (index) => {
    if (index == 0) {
      return;
    }
    console.log("Did not return");
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = [
      updatedTasks[index - 1],
      updatedTasks[index],
    ];

    setTasks((t) => updatedTasks);
  };

  const handleMoveTaskDown = (index) => {
    if (index == tasks.length - 1) {
      return;
    }

    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = [
      updatedTasks[index + 1],
      updatedTasks[index],
    ];

    setTasks((t) => updatedTasks);
  };

  const tasksList = tasks.map((task, index) => {
    return (
      <li key={index}>
        {task}
        &nbsp;
        <button onClick={() => handleRemoveTask(index)}>Delete</button>
        <button onClick={() => handleMoveTaskUp(index)}>Up</button>
        <button onClick={() => handleMoveTaskDown(index)}>Down</button>
      </li>
    );
  });

  return (
    <>
      <div className="todolist-container">
        <label htmlFor="input">
          <span>Task&nbsp;</span>
          <input
            type="text"
            name="input"
            id="input"
            value={newTask}
            onChange={handleInputChange}
          />
        </label>
        &nbsp;
        <button onClick={handleAddTask}>Add</button>
        <ul>{tasksList}</ul>
      </div>
    </>
  );
}
