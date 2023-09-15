import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, Toolbar, Typography, ThemeProvider } from "@mui/material";
import theme from "./CssStuff/theme";
import { Link } from "react-router-dom";

const linkStyle = {
  fontFamily: "Raleway",
  color: "#EDEADE",
  fontSize: "20px",
  marginRight: "20px",
  ":hover": { textDecoration: "underline" },
};

const removeUnderline = {
  textDecoration: "none",
};

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" className="navigation">
        <Toolbar>
          <AccountCircleIcon fontSize="large" />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Henry Pan Mun Li
          </Typography>
          <Link to="/" style={removeUnderline}>
            <Typography variant="body1" style={linkStyle}>
              About Me
            </Typography>
          </Link>
          <Link to="/skills" style={removeUnderline}>
            <Typography variant="body1" style={linkStyle}>
              Skills
            </Typography>
          </Link>
          <Link to="/projects" style={removeUnderline}>
            <Typography variant="body1" style={linkStyle}>
              Projects
            </Typography>
          </Link>
          <Link to="/contact" style={removeUnderline}>
            <Typography variant="body1" style={linkStyle}>
              Contact
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
