import React from "react";
import Api from "./Components/Api";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: ['"Montserrat"', "Open Sans"].join(","),
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Api />
      </ThemeProvider>
    </>
  );
};

export default App;
