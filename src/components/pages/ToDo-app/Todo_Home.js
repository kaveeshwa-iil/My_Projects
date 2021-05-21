import React from 'react';
import TodoList from './components/TodoList';
import './Todo_Home.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <div className='todo-app'>
      <TodoList />
    </div>
    <div className="back-container">
    <Link to='/'> <button className="button-back">Back</button></Link>
    </div>
    </>
  );
}

export default App;