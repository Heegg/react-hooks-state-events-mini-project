import React, {useState} from "react";
import Task from "./Task"

function TaskList({ tasks,handleDelete }) {
  console.log(tasks)

  const task = tasks.map((task, idx) => (
    <Task 
    category={task.category}
    text={task.text} 
    handleDelete={handleDelete}
    key={idx}
    //idx is index
    />
  ))

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {task}
    </div>
  );
}

export default TaskList;
