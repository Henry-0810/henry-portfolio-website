import { createTheme } from "@mui/material/styles";

// Define your custom dark theme
const theme = createTheme({
  palette: {
    mode: "dark", // Enable dark mode
    primary: {
      main: "#121212", // Dark background color for primary elements
    },
    secondary: {
      main: "#EDEADE", // Light secondary color for contrast
    },
    background: {
      default: "#121212", // Dark background color for the body
      paper: "#1d1d1d", // Slightly lighter dark background for card-like elements
    },
    text: {
      primary: "#EDEADE", // Light text for primary text
      secondary: "#B0B0B0", // Lighter gray for secondary text
    },
  },
  typography: {
    h6: {
      fontFamily: "Playfair Display",
      color: "#EDEADE",
      fontSize: "35px",
      fontWeight: "bold", // Add bold weight for emphasis
      paddingLeft: "10px",
      paddingBottom: "5px",
    },
    body1: {
      primary: {
        fontFamily: "Raleway",
        color: "#EDEADE",
        fontSize: "18px", // Reduced font size for better readability
      },
      secondary: {
        fontFamily: "Arial",
        color: "#EDEADE",
        fontSize: "16px", // Slightly smaller font size for secondary content
      },
    },
    body2: {
      secondary: {
        fontFamily: "Arial",
        color: "#B0B0B0", // Lighter color for secondary text
        fontSize: "16px",
      },
    },
  },
});

export default theme;
