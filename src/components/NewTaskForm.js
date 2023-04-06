import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

//controlled form?
//1. create a state
//2. derive value
//3. onChange

  const [ category, setCategory ] = useState("Code")
  const [ text, setText ] = useState("")

  const handleInput = (e) => {
    setText(e.target.value)
  }
  //console.log(text)

  const selectNewCategory = (e) => {
    setCategory(e.target.value)
  }
  //console.log(category)

  const handleSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit({text, category})
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text"
          value={text} 
          onChange={handleInput}/>
      </label>
      <label>
        Category
        <select 
          name="category"
          value={category}
          onChange={selectNewCategory}>
          {/* render <option> elements for each category here */}
          {categories.map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
