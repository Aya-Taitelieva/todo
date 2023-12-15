import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { PostDto, useCreateTodoQuery } from "../requests/todoRequests";
import TodoForm from "../components/TodoForm";

interface FormType extends PostDto {}

export default function AddPage() {
  const navigate = useNavigate();

  const { mutate, isLoading, isSuccess } = useCreateTodoQuery();
  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);

    mutate(data, { onSuccess: () => navigate("/") });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography component="h1" variant="h5">
          Create a new task
        </Typography>
        <TodoForm submit={onSubmit} />
      </Box>
    </Container>
  );
}
