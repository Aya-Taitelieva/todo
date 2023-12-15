import React from "react";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { CssBaseline } from "@mui/material";
const defaultTheme = createTheme();
function App() {
  return (
    <>
      {/* <CssBaseline /> */}
      <ThemeProvider theme={defaultTheme}>
        <MainRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
