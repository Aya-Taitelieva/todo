import React, { useMemo } from "react";

import { useQuery } from "react-query";
import axios from "axios";
import Card from "./Card";
import { Todo, TodoStatus } from "../entities/todos/types";

type Props = { status: TodoStatus };

const TodoList = ({ status }: Props) => {
  const {
    isLoading,
    error,
    data: todos = [],
  } = useQuery(
    ["todos"],
    async () => await axios.get<Todo[]>(`http://localhost:8000/todos`),
    {
      select: ({ data }) => data,
    }
  );

  const filteredTodos = useMemo(
    () => todos.filter((todo) => todo.status === status),
    [status, todos]
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !todos.length) {
    return <div>you don't have a tasks</div>;
  }

  return (
    <div>
      {filteredTodos.map((todo) => (
        <Card key={todo.id} data={todo} status={status} />
      ))}
    </div>
  );
};

export default TodoList;
