import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#0B132B', // Dark Blue
    },
    secondary: {
      main: '#1C2541', // Navy Blue
    },
    background: {
      default: '#3A506B', // Darker Blue
    },
    text: {
      primary: '#5BC0BE', // Turquoise
      secondary: '#6FFFE9', // Cyan
    },
  },
  typography: {
    fontFamily: 'Alice, sans-serif', // Use a suitable font family
    h6: {
      fontSize: '35px', // Adjust heading font size
    },
    // Add styles for other headings and text as needed
  },
});

export default theme;
