import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { TodoStatus } from "../entities/todos/types";
import { API } from "../utils/consts";

export interface PostDto {
  title: string;
  description: string;
  status: string;
  id: number;
}
export function useCreateTodoQuery() {
  return useMutation({
    mutationFn: (newTodo: PostDto) => axios.post(API, newTodo),
  });
}

export function useDeleteTodoQuery() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => axios.delete(`${API}/${id}`),
    onSuccess: () => client.invalidateQueries("todos"),
  });
}

export function useChangeTodoStatusQuery() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data: { id: number; status: TodoStatus }) =>
      axios.patch(`${API}/${data.id}`, { status: data.status }),
    onSuccess: () => client.invalidateQueries("todos"),
  });
}
