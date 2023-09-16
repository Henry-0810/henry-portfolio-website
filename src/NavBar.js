import React, { useState } from "react";
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
          </Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </AppBar>
        <Drawer
          anchor="right"
          open={isMenuOpen}
          onClose={closeMenu}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "primary.main",
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
