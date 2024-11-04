import React, {memo, useState} from "react";

import {v4 as uuidv4} from "uuid";

type TodoInputProps = {
  addTodo: ({id, label}: {id: string; label: string}) => void;
};

export const TodoInput = memo(({addTodo}: TodoInputProps) => {
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    addTodo({id: uuidv4(), label: target.todo.value});
    target.reset();
  };

  console.log("render new todo");

  return (
    <div className="w-fit border border-black p-2">
      <form
        autoComplete="off"
        className="min-w-80 outline-none"
        onSubmit={handleAddTodo}
      >
        <input type="text" placeholder="add a new todo" name="todo" />
        <button>add</button>
      </form>
    </div>
  );
});
