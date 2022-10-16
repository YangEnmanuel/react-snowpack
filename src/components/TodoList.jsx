import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList(props) {
  return (
    <ul>
      {props.filteredTodos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todos={props.todos}
            setTodos={props.setTodos}
            todo={todo}
          />
        );
      })}
    </ul>
  );
}
