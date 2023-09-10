import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#0B132B',
    },
    secondary: {
      main: '#EDEADE', 
    },
    background: {
      default: '#3A506B', 
    },
  },
  typography: {
    fontFamily: 'Playfair Display, sans-serif', // Use a suitable font family
    h6: {
      color: '#EDEADE', // Set text color
      fontSize: '35px', // Adjust heading font size
      paddingLeft: '10px',
      paddingBottom: '5px',
    },
    button: {
      fontFamily: 'Raleway, sans-serif', // Use a suitable font family
      color: '#EDEADE', // Set text color
      fontSize: '20px', // Adjust heading font size
    },
    // Add styles for other headings and text as needed
  },
});

export default theme;
