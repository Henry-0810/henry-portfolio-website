import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navbar from "./NavBar.js";
import Footer from "./Footer.js";
import theme from "./CssStuff/theme.js";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {/* Wrap the entire app with ThemeProvider */}
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <div
            className="mainContent"
            style={{
              flex: 1,
              padding: "20px",
              overflow: "auto",
            }}
          >
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
