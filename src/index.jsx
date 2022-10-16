import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //States
  const [textInput, setTextInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getStoredTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    storeTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.done === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.done === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //Store data
  const storeTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getStoredTodos = () => {
    if (localStorage.getItem('todos') == null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      // let storedData = JSON.parse(localStorage.getItem('todos'));
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  };

  return (
    <div id='container'>
      <h1>Todo App</h1>

      <Form
        textInput={textInput}
        setTextInput={setTextInput}
        //
        todos={todos}
        setTodos={setTodos}
        //
        status={status}
        setStatus={setStatus}
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

render(<App />, document.querySelector('#app'));
