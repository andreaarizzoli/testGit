import React from 'react';
import './App.css';
import TodoList from './features/todos/components/TodoList'
import { CreateTodo } from './features/todos/components/CreateTodo';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {MaurizioCreate} from './features/todos/components/MaurizioCreate'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Link to='/Maurizio'>MaurizioCreate</Link>
      

      <Routes>
          <Route path='/' element={<CreateTodo />}></Route>
          <Route path='/Michele' element={<CreateTodo />}></Route>
          <Route path='/Andrea' element={<CreateTodo />}></Route>
          <Route path='/Manuela' element={<CreateTodo />}></Route>
          <Route path='/Cecilia' element={<CreateTodo />}></Route>
          <Route path='/Maurizio' element={<MaurizioCreate />}></Route>
      </Routes>

      <TodoList></TodoList>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
