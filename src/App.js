import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navbar from "./NavBar.js";
import Footer from "./Footer.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Function to ensure sticky behavior
    const handleStickyFooter = () => {
      const content = document.querySelector(".content");
      const footer = document.querySelector(".footer");
      const navbar = document.querySelector(".navbar");

      if (content && footer && navbar) {
        const windowHeight = window.innerHeight;
        const contentHeight = content.offsetHeight;
        const navbarHeight = navbar.offsetHeight;

        if (windowHeight > contentHeight + navbarHeight) {
          const footerHeight = footer.offsetHeight;
          const remainingHeight =
            (windowHeight - contentHeight - footerHeight - navbarHeight + 15) /
            2;
          content.style.marginTop = `${remainingHeight}px`;
          content.style.marginBottom = `${remainingHeight}px`;
        } else {
          content.style.marginTop = "0px";
          content.style.marginBottom = "0px";
        }
      }
    };

    // Call the function initially and on window resize
    handleStickyFooter();
    window.addEventListener("resize", handleStickyFooter);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleStickyFooter);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
