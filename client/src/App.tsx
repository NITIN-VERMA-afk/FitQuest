import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container} from "@mui/material"
import "./App.css";
import AppBar from "./componets/Appbar";
// import Card from "./components/Card";
// import Paper from "@mui/material/Paper";
import { useState } from "react";
import Footer from "./componets/Footer";
import LandingPage from "./pages/Landingpage";


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
        <AppBar cheak={darkMode} change={() => setDarkMode(!darkMode)} />
        
          <Container>
            <LandingPage />

            <Footer />
          </Container>
       
      </ThemeProvider>
    </>
  );
}

export default App;
