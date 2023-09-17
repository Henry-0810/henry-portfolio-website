import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  ThemeProvider,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "./CssStuff/theme";
import { Link } from "react-router-dom";

const linkStyle = {
  fontFamily: "Raleway",
  color: "#EDEADE",
  fontSize: "20px",
  marginRight: "20px",
  textDecoration: "none",
};

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuAppear, setMenuAppear] = useState(false);

  useEffect(() => {
    // Function to handle window resize and set isMenuAppear accordingly
    const handleResize = () => {
      const isSmallerThanMd = window.innerWidth < theme.breakpoints.values.md;
      setMenuAppear(isSmallerThanMd);
    };

    // Call the function initially and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuItems = (
    <List>
      <Link to="/" style={{ textDecoration: "none" }}>
        <ListItemButton onClick={closeMenu}>
          <ListItemText
            primary="About Me"
            sx={{
              color: "#EDEADE",
              fontFamily: "Raleway  ",
            }}
          />
        </ListItemButton>
      </Link>
      <Link to="/skills" style={{ textDecoration: "none" }}>
        <ListItemButton onClick={closeMenu}>
          <ListItemText
            primary="Skills"
            sx={{
              color: "#EDEADE",
              fontFamily: "Raleway",
            }}
          />
        </ListItemButton>
      </Link>
      <Link to="/projects" style={{ textDecoration: "none" }}>
        <ListItemButton onClick={closeMenu}>
          <ListItemText
            primary="Projects"
            sx={{
              color: "#EDEADE",
              fontFamily: "Raleway",
            }}
          />
        </ListItemButton>
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <ListItemButton onClick={closeMenu}>
          <ListItemText
            primary="Contact"
            sx={{
              color: "#EDEADE",
              fontFamily: "Raleway",
            }}
          />
        </ListItemButton>
      </Link>
    </List>
  );

  return (
    <div className="navbar" style={{ position: "sticky" }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" className="navigation">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Henry Pan Mun Li
            </Typography>
            {!isMenuAppear && (
              <div
                className="menu-links"
                style={{ display: { xs: "none", md: "block" } }}
              >
                <Link to="/" style={linkStyle}>
                  About Me
                </Link>
                <Link to="/skills" style={linkStyle}>
                  Skills
                </Link>
                <Link to="/projects" style={linkStyle}>
                  Projects
                </Link>
                <Link to="/contact" style={linkStyle}>
                  Contact
                </Link>
              </div>
            )}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="right"
          open={isMenuOpen}
          onClose={closeMenu}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "primary.main",
              fontFamily: "Raleway !important",
            },
          }}
        >
          {menuItems}
        </Drawer>
      </ThemeProvider>
    </div>
  );
};

export default Navbar;
