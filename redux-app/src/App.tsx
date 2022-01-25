import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './features/todos/components/TodoList'
import { CreateTodo } from './features/todos/components/CreateTodo';

function App() {
  return (
    <div className="App">
       <CreateTodo />
      <TodoList></TodoList>
    </div>
  );
}

export default App;
