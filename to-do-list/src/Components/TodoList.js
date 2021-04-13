import React from 'react';
import Todo from "./Todo"

const TodoList = ({todos, setTodos}) => {
    
    return (

        <div className="todo-container">

            <ul className="todo-list">
                {todos.map((todo) => {
                   return <Todo 
                   key = {todo.id} 
                   text ={todo.text} 
                   setTodos = {setTodos} 
                   todos = {todos} 
                   todo = {todo}
                   />
                })}
                
            </ul>
            
        </div>
    );
};

export default TodoList;