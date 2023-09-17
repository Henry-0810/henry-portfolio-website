import React, { useState, useEffect } from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validSecurityCode) {
      if (formData.securityCode === randomSecurityCode) {
        setValidSecurityCode(true);
        setFormData({
          name: "",
          email: "",
          message: "",
          securityCode: "",
        });
        generateRandomSecurityCode();
      } else {
        alert("Invalid security code. Please enter the correct code.");
        generateRandomSecurityCode();
      }
    } else {
      console.log("Form data:", formData);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom color={"primary.main"}>
        Contact Me
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            {validSecurityCode ? (
              <Typography variant="h6" gutterBottom>
                Security Code Verified!
              </Typography>
            ) : (
              <>
                <Typography variant="h6" gutterBottom>
                  Enter Security Code: {randomSecurityCode}
                </Typography>
                <TextField
                  fullWidth
                  label="Enter Security Code"
                  name="securityCode"
                  value={formData.securityCode}
                  onChange={handleChange}
                  required
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
  );
};

export default Contact;
