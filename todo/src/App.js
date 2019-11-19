import React from 'react';
import TodoList from './components/Components/TodoList';
import TodoForm from './components/Components/TodoForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
