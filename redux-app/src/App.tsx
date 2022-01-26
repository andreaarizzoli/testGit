import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './features/todos/components/TodoList'
import { CreateTodo } from './features/todos/components/CreateTodo';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import { CreateTodoCecilia } from './features/todos/components/CreateTodoCecilia'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Link to="/Cecilia">Cecilia</Link>

      <Routes>
          <Route path='/' element={<CreateTodo />}></Route>
          <Route path='/Michele' element={<CreateTodo />}></Route>
          <Route path='/Andrea' element={<CreateTodo />}></Route>
          <Route path='/Manuela' element={<CreateTodo />}></Route>
          <Route path='/Cecilia' element={<CreateTodoCecilia />}></Route>
          <Route path='/Maurizio' element={<CreateTodo />}></Route>
      </Routes>

      <TodoList></TodoList>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
