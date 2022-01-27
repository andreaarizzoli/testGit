import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import PhotoList from './features/photos/components/PhotoList';
import { CreateAndrea } from './features/todos/components/CreateAndrea';
import { CreateTodo } from './features/todos/components/CreateTodo';
import { ManuTodo } from './features/todos/components/ManuTodo';
import { MaurizioCreate } from './features/todos/components/MaurizioCreate';
import { MicheleTodo } from './features/todos/components/MicheleTodo';
import TodoList from './features/todos/components/TodoList';
import { CreateTodoCecilia } from './features/todos/components/CreateTodoCecilia'
import { UsersList } from './features/users/components/UsersList';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Link to='/Andrea'>Inserisci by Andrean</Link>
        <Link to={'/Michele'}>MicheleTodo</Link>
        <Link to="/Cecilia">Cecilia</Link>
        <Link to="/Manuela">Manuela</Link>
        <Link to='/Maurizio'>MaurizioCreate</Link>
        <br />
        <Link to='/Users'>Utenti</Link>
        <Link to='Photos'>Photo</Link>

        

        <Routes>
          <Route path='/' element={<CreateTodo />}></Route>
          <Route path='/Michele' element={<MicheleTodo />}></Route>
          <Route path='/Andrea' element={<CreateAndrea />}></Route>
          <Route path='/Manuela' element={<ManuTodo />}></Route>
          <Route path='/Cecilia' element={<CreateTodoCecilia />}></Route>
          <Route path='/Maurizio' element={<MaurizioCreate />}></Route>

          <Route path='/Users' element={<UsersList />}></Route>
          <Route path='Photos' element={<PhotoList />}></Route>
        </Routes>
        <TodoList></TodoList>
      </BrowserRouter>

    </div>
  );
}

export default App;
