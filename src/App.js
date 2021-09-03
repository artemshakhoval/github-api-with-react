import "./App.css";
import Wrapper from "./components/index";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: ['"Montserrat"', "Open Sans"].join(","),
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper />
      </ThemeProvider>
    </>
  );
}

export default App;
