import React from "react";
import { Todo, TodoStatus } from "../entities/todos/types";
import {
  useChangeTodoStatusQuery,
  useDeleteTodoQuery,
} from "../requests/todoRequests";

interface TodoCardProps {
  data: Todo;
  status: TodoStatus;
}

const Card: React.FC<TodoCardProps> = ({ data, status }) => {
  const { mutate: deleteTodo } = useDeleteTodoQuery();
  function handleDeleteTodo() {
    deleteTodo(data.id);
  }

  const { mutate: changeStatus } = useChangeTodoStatusQuery();
  function handleChangeStatus() {
    const nextStatus: TodoStatus = status === "todo" ? "inProcess" : "done";
    changeStatus({ id: data.id, status: nextStatus });
  }

  return (
    <div>
      <div className="task-card">
        <span className="title">{data.title}</span>
        <p className="description">{data.description}</p>
        <div className="actions">
          <button className="accept" onClick={handleDeleteTodo}>
            Delete
          </button>
          {status === "done" ? null : (
            <button className="accept" onClick={handleChangeStatus}>
              next status
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
