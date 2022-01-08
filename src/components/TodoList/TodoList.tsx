import React from "react";
import { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import { Todo } from "./Todo.model";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (name: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), name: name },
    ]);
  };

  const todoDeleteHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <h2>Todo List</h2>
      <NewTodo onAddTodo={todoAddHandler} />
        {/*items and onDeleteTodo will be a properties of props object:*/}
      <Todos items={todos} onDeleteTodo={todoDeleteHandler} />{" "}
    </>
  );
};

export default TodoList;
