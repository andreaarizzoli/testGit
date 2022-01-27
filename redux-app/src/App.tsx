import React from 'react';
import './App.css';
import TodoList from './features/todos/components/TodoList'
import { CreateTodo } from './features/todos/components/CreateTodo';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CreateAndrea } from './features/todos/components/CreateAndrea';
import { ManuTodo } from './features/todos/components/ManuTodo';
import { MicheleTodo } from './features/todos/components/MicheleTodo';
import {MaurizioCreate} from './features/todos/components/MaurizioCreate'
import { CreateTodoCecilia } from './features/todos/components/CreateTodoCecilia'
import { PostsList } from './features/posts/components/PostsList'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/Andrea">Inserisci by Andrean</Link>
        <Link to={"/Michele"}>MicheleTodo</Link>
        <Link to="/Cecilia">Cecilia</Link>
        <Link to="/Manuela">Manuela</Link>
        <Link to="/Maurizio">MaurizioCreate</Link>

        <Link to="Posts">Posts</Link>

        <Routes>
          <Route path="/" element={<CreateTodo />}></Route>
          <Route path="/Michele" element={<MicheleTodo />}></Route>
          <Route path="/Andrea" element={<CreateAndrea />}></Route>
          <Route path="/Manuela" element={<ManuTodo />}></Route>
          <Route path="/Cecilia" element={<CreateTodoCecilia />}></Route>
          <Route path="/Maurizio" element={<MaurizioCreate />}></Route>

          <Route path="/Posts" element={<PostsList></PostsList>}></Route>
        </Routes>
        <TodoList></TodoList>
      </BrowserRouter>
    </div>
  );
}

export default App;
