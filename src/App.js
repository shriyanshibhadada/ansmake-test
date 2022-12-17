import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Profile from "./components/Profile";
import { Grid } from "@mui/material";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFF",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{
          minHeight: "100vh",
          backgroundImage:
            "url(https://thumbs.gfycat.com/RawMiserableArachnid-size_restricted.gif)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
        }}
      >
        <Grid item sx={{ mt: 3, p: 1, mb: 10 }}>
          <Profile />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
