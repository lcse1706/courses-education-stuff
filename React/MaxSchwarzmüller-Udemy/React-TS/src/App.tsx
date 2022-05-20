import { useState } from 'react';
import React from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import Newtodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text:string) => {
      setTodos((prevTodos) => {
        return prevTodos.concat(new Todo(text))
      } )

  }
  

  const removeItemHandler = (id:string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== id)
    })
  }


  return (
    <div>
      <Newtodo onAddTodo={addTodoHandler }/>
      <Todos items={todos} removeItem={removeItemHandler} />
    </div>
  );
}

export default App;
