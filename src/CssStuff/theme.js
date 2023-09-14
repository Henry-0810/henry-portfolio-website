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
  },
  typography: {
    h6: {
      fontFamily: "Playfair Display",
      color: "#EDEADE", // Set text color
      fontSize: "35px", // Adjust heading font size
      paddingLeft: "10px",
      paddingBottom: "5px",
    },
    button: {
      fontFamily: "Raleway", // Use a suitable font family
      color: "#EDEADE", // Set text color
      fontSize: "20px", // Adjust heading font size
    },
    body1: {
      fontFamily: "Arial", // Use a suitable font family
      color: "#EDEADE", // Set text color
      fontSize: "16px", // Adjust heading font size
    },
  },
});

export default theme;
