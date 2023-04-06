

import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [ tasks, setTasks ] = useState(TASKS)
  const [ selectedCategory, setSelectedCategory ] = useState("All")

  const handleDelete = (taskToDeleteText) => {
    setTasks(tasks.filter(task => task.text !== taskToDeleteText))
  }

  const handleSelectedCate = (selectedCategory) => {
    setSelectedCategory(selectedCategory)
  }
  // console.log(selectedCategory)

  const taskToDisplay = tasks.filter(task => {
    if (selectedCategory === "All") return task;
    return task.category === selectedCategory
  })

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask]) //obj
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories = {CATEGORIES}
      handleSelectedCate = {handleSelectedCate}
      selectedCategory = {selectedCategory}/>
      <NewTaskForm 
      categories = {CATEGORIES.filter(cat => cat !=="All")}
      onTaskFormSubmit={addNewTask}/>
      <TaskList 
      tasks={taskToDisplay}
      handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
