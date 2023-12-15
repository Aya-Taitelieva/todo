import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TodoList from "../components/TodoList";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Stack
        spacing={1}
        direction="row"
        style={{ display: "flex", justifyContent: "end" }}>
        <Button variant="outlined" onClick={() => navigate(`/add`)}>
          + Create new task
        </Button>
      </Stack>
      <Box
        className="homePage_box"
        sx={{
          "& > :not(style)": { m: 1, width: "40ch" },
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}>
        <Box className="homePage_input__box">
          <p>To do</p>
          <TodoList status="todo" />
        </Box>
        <Box className="homePage_input__box">
          <p>In process</p>
          <TodoList status="inProcess" />
        </Box>
        <Box className="homePage_input__box">
          <p>Done</p>
          <TodoList status="done" />
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
