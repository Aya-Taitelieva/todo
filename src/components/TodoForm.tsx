import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

// import MenuItem from "@mui/material/MenuItem";
import { PostDto } from "../requests/todoRequests";
import { useForm } from "react-hook-form";

interface FormType extends PostDto {}

type Props = { submit: (data: PostDto) => void };

// const status = [
//   {
//     value: "todo",
//     label: "To do",
//   },
//   // {
//   //   value: "inProcess",
//   //   label: "In process",
//   // },
//   // {
//   //   value: "done",
//   //   label: "Done",
//   // },
// ];

const TodoForm = ({ submit }: Props) => {
  const { register, handleSubmit } = useForm<FormType>({
    defaultValues: {
      status: "todo",
    },
  });
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(submit)}
      noValidate
      sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="title"
        label="Title"
        // name="title"
        autoFocus
        {...register("title")}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        // name="description"
        label="Description"
        type="description"
        id="description"
        {...register("description")}
      />
      {/* input select */}

      {/* <TextField
        id="select"
        select
        label="Select"
        defaultValue="todo"
        {...register("status")}
        style={{
          width: "100%",
          marginTop: "2%",
        }}>
        {status.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField> */}
      {/* input select end */}
      <Button
        type="submit"
        fullWidth
        variant="outlined"
        sx={{
          mt: 3,
          mb: 2,
          background: " rgba(211, 201, 201, 0.601)",
          color: "black",
        }}>
        Add task
      </Button>
    </Box>
  );
};

export default TodoForm;
