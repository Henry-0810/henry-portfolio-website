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
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "./CssStuff/theme.js";
import { Link } from "react-router-dom";

const linkStyle = {
  fontFamily: "Raleway",
  color: "#EDEADE",
  fontSize: "18px",
  marginRight: "30px",
  textDecoration: "none",
  transition: "all 0.3s ease-in-out", // Smooth hover effect
};

const navbarStyles = {
  position: "sticky",
  top: 0,
  zIndex: 1000,
  backgroundColor: "#1A1A1A",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 10px", // Added padding to avoid unnecessary space around the navbar
};

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuAppear, setMenuAppear] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleResize = () => {
      const isSmallerThanMd = window.innerWidth < theme.breakpoints.values.md;
      setMenuAppear(isSmallerThanMd);
    };

    handleResize(); // Call the function initially
    window.addEventListener("resize", handleResize);

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
              fontSize: "18px",
            }}
          />
        </ListItemButton>
      </Link>
      <Link to="/experience" style={{ textDecoration: "none" }}>
        <ListItemButton onClick={closeMenu}>
          <ListItemText
            primary="Experience"
            sx={{ color: "#EDEADE", fontSize: "18px" }}
          />
        </ListItemButton>
      </Link>
      <Link to="/projects" style={{ textDecoration: "none" }}>
        <ListItemButton onClick={closeMenu}>
          <ListItemText
            primary="Projects"
            sx={{
              color: "#EDEADE",

              fontSize: "18px",
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

              fontSize: "18px",
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

              fontSize: "18px",
            }}
          />
        </ListItemButton>
      </Link>
    </List>
  );

  return (
    <div style={navbarStyles}>
      <ThemeProvider theme={theme}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Henry Pan Mun Li
            </Typography>
            {!isMobile && (
              <div
                className="menu-links"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Link to="/" style={linkStyle}>
                  About Me
                </Link>
                <Link to={"/experience"} style={linkStyle}>
                  Experience
                </Link>
                <Link to="/projects" style={linkStyle}>
                  Projects
                </Link>
                <Link to="/skills" style={linkStyle}>
                  Skills
                </Link>
                <Link to="/contact" style={linkStyle}>
                  Contact
                </Link>
              </div>
            )}
            {/* Mobile Menu Icon */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
              sx={{
                display: { xs: "block", md: "none" },
                color: "#EDEADE", // White icon for mobile menu
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* Drawer for Mobile */}
        <Drawer
          anchor="right"
          open={isMenuOpen}
          onClose={closeMenu}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#333", // Dark background for mobile menu
              color: "#EDEADE",

              paddingTop: "20px",
              width: "250px", // Fixed width for the drawer
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
