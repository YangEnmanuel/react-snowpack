import React from 'react';
import { v1 as uuid } from 'uuid';

import swal from 'sweetalert';

export default function Form(props) {
  const inputHandler = e => {
    // console.log(e.target.value);
    props.setTextInput(e.target.value);
  };

  const submitTodo = e => {
    e.preventDefault();

    props.setTodos([
      ...props.todos,
      { id: uuid(), title: props.textInput, done: false },
    ]);

    props.setTextInput('');
    document.querySelector('#input').focus();

    swal({
      title: 'Task added succesfully!',
      icon: 'success',
    });
  };

  const handleStatus = e => {
    props.setStatus(e.target.value);
  };

  return (
    <>
      <form onSubmit={submitTodo}>
        <input
          id='input'
          type='text'
          placeholder='Add a todo'
          onChange={inputHandler}
          value={props.textInput}
          required
        />

        <button type='submit' className='submit'>
          {/* <img src={plus} alt='submit' /> */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-plus-lg'
            viewBox='0 0 16 16'
          >
            <path d='M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z' />
          </svg>
        </button>

        <select onChange={handleStatus}>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </form>
    </>
  );
}
