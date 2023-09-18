import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  ThemeProvider,
} from "@mui/material";
import styles from "../CssStuff/Contact.module.css";
import theme from "../CssStuff/theme.js";
import "../CssStuff/Custom.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    securityCode: "",
  });

  const [validSecurityCode, setValidSecurityCode] = useState(false);
  const [randomSecurityCode, setRandomSecurityCode] = useState("");

  useEffect(() => {
    generateRandomSecurityCode();
  }, []);

  const generateRandomSecurityCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
    setRandomSecurityCode(code);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validSecurityCode) {
      if (formData.securityCode === randomSecurityCode) {
        setValidSecurityCode(true);
        generateRandomSecurityCode();
      } else {
        alert("Invalid security code. Please enter the correct code.");
        generateRandomSecurityCode();
      }
    } else {
      try {
        const response = await axios.post("/send-email", formData);

        console.log(response);
      } catch (error) {
        console.error("Error sending mail " + error);
      }
      setFormData({
        name: "",
        email: "",
        message: "",
        securityCode: "",
      });
      setValidSecurityCode(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginY: "4vh" }}>
        <Typography
          variant="h4"
          gutterBottom
          color={"primary.main"}
          sx={{
            fontFamily: "Raleway",
            fontWeight: "bold",
            marginBottom: "3vh",
          }}
        >
          Contact Me
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                className={styles.formInput}
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                color="primary"
                variant="filled"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={styles.formInput}
                fullWidth
                label="Email"
                name="email"
                variant="filled"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={styles.formInput}
                sx={{
                  color: "primary.main",
                  fontWeight: "bold",
                  fontFamily: "Raleway",
                }}
                fullWidth
                label="Message"
                name="message"
                variant="filled"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              {validSecurityCode ? (
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontFamily: "Raleway",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    color: "primary.main",
                  }}
                >
                  Security Code Verified!
                </Typography>
              ) : (
                <>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontFamily: "Raleway",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      color: "primary.main",
                    }}
                  >
                    Enter Security Code: {randomSecurityCode}
                  </Typography>
                  <TextField
                    className={styles.formInput}
                    fullWidth
                    label="Enter Security Code"
                    name="securityCode"
                    variant="filled"
                    value={formData.securityCode}
                    onChange={handleChange}
                    required
                    helperText="All caps, no spaces"
                  />
                </>
              )}
            </Grid>
            <Grid item xs={12}>
              {validSecurityCode ? (
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Submit
                </Button>
              ) : (
                <Button variant="contained" color="primary" type="submit">
                  Verify Security Code
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default Contact;
