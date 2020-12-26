import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, SetTodos] = useState([]);

  // It won't operate if the customer enters too many spaces
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodo = [todo, ...todos];

    SetTodos(newTodo);
    console.log(...todos);
  };

  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  );
}

export default TodoList;
