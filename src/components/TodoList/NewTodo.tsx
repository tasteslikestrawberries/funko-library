import React from "react";
import { useRef } from "react";

interface INewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<INewTodoProps> = ({ onAddTodo }) => {
  const userInput = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = userInput.current!.value;
    onAddTodo(enteredText);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo-name">Todo Name</label>
        <input className="form-control" type="text" ref={userInput}></input>
      </form>
    </>
  );
};

export default NewTodo;
