import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className="App">

      <header>
        <h1>To do List</h1>
      </header>

      <Form inputText={inputText} setInputText= {setInputText} todos={todos} setTodos={setTodos}/>

      <TodoList setTodos = {setTodos} todos={todos} />

      <h4 >By Mazen Hesham</h4>
      
    </div>
  );
}

export default App;
