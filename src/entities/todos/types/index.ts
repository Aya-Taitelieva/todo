export type TodoStatus = "todo" | "inProcess" | "done";

export type Todo = {
  id: number;
  title: string;
  description: string;
  status: TodoStatus;
};
