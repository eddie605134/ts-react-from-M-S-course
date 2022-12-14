import React from 'react';

import './TodoList.css'

interface TodoListProps {
  items: {
    id: string;
    text: string;
  } [],
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({items, onDeleteTodo}) => {
  
  return (
    <ul>
      {
        items.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button type="button" onClick={onDeleteTodo.bind(null, todo.id)}>Delete</button>
          </li>
        ))
      }
    </ul>
  )
}

export default TodoList;