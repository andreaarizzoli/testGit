import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './features/todos/components/TodoList'
import { CreateTodo } from './features/todos/components/CreateTodo';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { CreateAndrea } from './features/todos/components/CreateAndrea';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Link to='/Andrea'>Inserisci by Andrean</Link>

      <Routes>
          <Route path='/' element={<CreateTodo />}></Route>
          <Route path='/Michele' element={<CreateTodo />}></Route>
          <Route path='/Andrea' element={<CreateAndrea />}></Route>
          <Route path='/Manuela' element={<CreateTodo />}></Route>
          <Route path='/Cecilia' element={<CreateTodo />}></Route>
          <Route path='/Maurizio' element={<CreateTodo />}></Route>
      </Routes>

      <TodoList></TodoList>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
