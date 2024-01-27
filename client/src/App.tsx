import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

import "./App.css";
import AppBar from "./componets/Appbar";
// import Card from "./components/Card";
// import Paper from "@mui/material/Paper";
import { useState } from "react";
import Footer from "./componets/Footer";
import LandingPage from "./pages/Landingpage";
import DarkMode from "./componets/DarkMode";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const AppTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={AppTheme}>
        <Box>
          <AppBar />
          <DarkMode cheak={darkMode} change={() => setDarkMode(!darkMode)} />

          <LandingPage />

          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
