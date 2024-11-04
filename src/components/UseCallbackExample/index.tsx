import React, {useCallback, useState} from "react";

import {TodoInput} from "./TodoInput";
import {TodoItem} from "./TodoItem";
import {v4 as uuidv4} from "uuid";

export type TodoItem = {
  id: string
  label: string;
};

export const UseCallbackExample = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleAddTodo = useCallback((newTodo: TodoItem) => {
    setTodos([...todos, newTodo]);
  }, []);

  return (
    <div>
      <TodoInput addTodo={handleAddTodo} />
      {todos.map((item) => {
        return <TodoItem key={item.id} label={item.label} />;
      })}
    </div>
  );
};
