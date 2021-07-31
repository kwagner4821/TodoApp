import React from 'react';
import Form from './Form.js';
import Todo from './Todo.js';
import './App.css';

function App() {
  function handleClick(e){
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <div className="App">
      <div className = "Button">
        <Form />
      </div>
      <Todo />
    </div>
  );
}

export default App;
