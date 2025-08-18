import { useEffect, useState } from "react";
import styles from "./To do.module.css";
function ToDo() {
  let [tasks, setTasks] = useState([
    { id: 1, name: "Play", completed: false },
    { id: 2, name: "Code", completed: false },
  ]);
  const [newTask, setNewtask] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTask = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });
  function handleTaskinput(event) {
    setNewtask(event.target.value);
  }
  function AddTask() {
    if (newTask.trim() !== "") {
      const newTasks = {
        id: tasks.length + 1,
        name: newTask,
        completed: false,
      };
      setTasks((t) => [...t, newTasks]);
      setNewtask("");
    }
  }
  function DelTask(index) {
    const updatedTasks = [...tasks];
    setTasks(updatedTasks.filter((_, i) => i !== index));
  }
  function edit(index, task) {
    setNewtask(task.name);
    const updatedTasks = [...tasks];
    setTasks(updatedTasks.filter((_, i) => i !== index));
  }
  function isComp(task, event) {
    task.completed = task.completed ? false : true;
    event.target.innerText = task.completed ? "Completed" : "Pending";
    event.target.parentElement.style.backgroundColor = task.completed
      ? "Green"
      : "";
    console.log(task.completed);
  }
  return (
    <div className={styles.container}>
      <h1>To Do list</h1>
      <div className={styles.addcont}>
        <input
          type="text"
          placeholder="Enter Task"
          onChange={handleTaskinput}
          value={newTask}
        />
        <button onClick={AddTask} className={styles.Addbtn}>
          Add
        </button>
      </div>
      <div className={styles.filter}>
        <button className={styles.filterbtn} onClick={() => setFilter("all")}>
          All
        </button>
        <button
          className={styles.filterbtn}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className={styles.filterbtn}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>
      <div>
        <ul className={styles.taskContainer}>
          {filteredTask.map((task, index) => (
            <li key={task.id}>
              <span className={styles.text}>{task.name}</span>
              <button
                className={styles.editbtn}
                onClick={() => edit(index, task)}
              >
                Edit
              </button>
              <button className={styles.delbtn} onClick={() => DelTask(index)}>
                Delete
              </button>
              <button
                className={styles.compbtn}
                onClick={() => isComp(task, event)}
              >
                Pending
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ToDo;
