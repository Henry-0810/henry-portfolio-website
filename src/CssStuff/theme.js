import { createTheme } from "@mui/material/styles";

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#0B132B",
    },
    secondary: {
      main: "#EDEADE",
    },
    background: {
      default: "#dfe3ee",
    },
    text: { primary: "#EDEADE", secondary: "#0B132B" },
  },
  typography: {
    h6: {
      fontFamily: "Playfair Display",
      color: "#EDEADE",
      fontSize: "35px",
      paddingLeft: "10px",
      paddingBottom: "5px",
    },
    body1: {
      primary: {
        fontFamily: "Raleway",
        color: "#EDEADE",
        fontSize: "20px",
      },
      secondary: {
        fontFamily: "Arial",
        color: "#EDEADE",
        fontSize: "16px",
      },
    },
    body2: {
      secondary: {
        fontFamily: "Arial",
        color: "#0B132B",
        fontSize: "16px",
      },
    },
  },
});

export default theme;
