import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ThemeProvider,
} from "@mui/material";
import theme from "./CssStuff/theme";

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" className="navigation">
        <Toolbar>
          <AccountCircleIcon fontSize="large" />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Henry Pan Mun Li
          </Typography>
          <div className="navigation">
            <Button color="primary" variant="contained" href="/">
              About Me
            </Button>
            <Button color="primary" variant="contained" href="/skills">
              Skills
            </Button>
            <Button color="primary" variant="contained" href="/projects">
              Projects
            </Button>
            <Button color="primary" variant="contained" href="/contact">
              Contact
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
