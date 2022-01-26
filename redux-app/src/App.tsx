import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './features/todos/components/TodoList'
import { CreateTodo } from './features/todos/components/CreateTodo';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CreateAndrea } from './features/todos/components/CreateAndrea';
import { ManuTodo } from './features/todos/components/ManuTodo';
import { MicheleTodo } from './features/todos/components/MicheleTodo';


import { CreateTodoCecilia } from './features/todos/components/CreateTodoCecilia'

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
=======
      <BrowserRouter>
      
      <Link to="/Cecilia">Cecilia</Link>
>>>>>>> features/44444/cecilia

      <BrowserRouter>
        <Link to='/Andrea'>Inserisci by Andrean</Link>
        <Link to={'/Michele'}>MicheleTodo</Link>

        
        <Routes>
          <Route path='/' element={<CreateTodo />}></Route>
<<<<<<< HEAD
          <Route path='/Michele' element={<MicheleTodo />}></Route>
          <Route path='/Andrea' element={<CreateAndrea />}></Route>
          <Route path='/Manuela' element={<ManuTodo />}></Route>
          <Route path='/Cecilia' element={<CreateTodo />}></Route>
=======
          <Route path='/Michele' element={<CreateTodo />}></Route>
          <Route path='/Andrea' element={<CreateTodo />}></Route>
          <Route path='/Manuela' element={<CreateTodo />}></Route>
          <Route path='/Cecilia' element={<CreateTodoCecilia />}></Route>
>>>>>>> features/44444/cecilia
          <Route path='/Maurizio' element={<CreateTodo />}></Route>
        </Routes>
        <TodoList></TodoList>
      </BrowserRouter>

    </div>
  );
}

export default App;
