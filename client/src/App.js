import React, { useState } from 'react';
import Form from './Form.js';
import Todo from './Todo.js';
import './App.css';
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  function addTask(name) {
    const newTask = {id : "todo-" + nanoid(), name: name};
    setTasks([newTask,...tasks]);
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }
  const taskList = tasks.map((task) => 
    <Todo
        id = {task.id} 
        name = {task.name}
        key = {task.id}
        deleteTask={deleteTask}
      />
  );
  
  return (
    <div className="App">
      <div className = "Button">
        <Form addTask = {addTask} />
        <ul className = "no-bullets">
        {taskList}
        </ul>
      </div>
    </div>
  );
}

export default App;
