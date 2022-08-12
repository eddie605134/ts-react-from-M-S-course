import React, { useState } from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

import { Todo } from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]) 

  const todoAddHandler = (todoText: string) => {
    setTodos((prevTodos) => [...prevTodos, {
      id: Math.random().toString(), 
      text: todoText
    }])
  }

  const todoDeketeHandler = (todiId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todiId);
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeketeHandler}/>
    </div>
  );
}

export default App;
