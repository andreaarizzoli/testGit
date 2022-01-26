import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './features/todos/components/TodoList'
import { CreateTodo } from './features/todos/components/CreateTodo';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { MicheleTodo } from './features/todos/components/MicheleTodo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Link to={'/Michele'}>MicheleTodo</Link>

      <Routes>
          <Route path='/' element={<CreateTodo />}></Route>
          <Route path='/Michele' element={<MicheleTodo />}></Route>
      </Routes>

      <TodoList></TodoList>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
