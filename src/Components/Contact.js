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
import emailjs from "@emailjs/browser";
import validator from "validator";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    securityCode: "",
  });

  const [validSecurityCode, setValidSecurityCode] = useState(false);
  const [randomSecurityCode, setRandomSecurityCode] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [verificationComplete, setVerificationComplete] = useState(false);

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

    // Validate email as the user types
    if (name === "email") {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    validator.isEmail(email)
      ? setValidEmail("")
      : setValidEmail("Invalid email address");
  };

  const handleVerify = () => {
    if (formData.securityCode === randomSecurityCode && validEmail === "") {
      setValidSecurityCode(true);
      setVerificationComplete(true);
      generateRandomSecurityCode();
    } else {
      alert("Invalid security code or email address. Please check.");
      generateRandomSecurityCode();
    }
  };

  const handleSubmit = (e) => {
    let contactInfo = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      if (verificationComplete && validSecurityCode && validEmail === "") {
        emailjs
          .send(
            "service_wd6z371",
            "template_xjg60l3",
            contactInfo,
            "vsQMnVvW_zkEYfzjd"
          )
          .then(
            (result) => {
              console.log(result.text);
              console.log("Email sent successfully!");
            },
            (error) => {
              console.log(error.text);
              console.log("Email failed to send.");
            }
          );

        setFormData({
          name: "",
          email: "",
          message: "",
          securityCode: "",
        });
        setValidSecurityCode(false);
        setLoading(false);

        setVerificationComplete(false); // Reset verification state
      } else {
        alert("Please verify the security code and email address.");
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <ThemeProvider theme={theme}>
      {loading && (
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontFamily: "Raleway",
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "primary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Sending message...
        </Typography>
      )}
      {!loading && (
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
                  InputProps={{ style: { color: "#0b132b" } }}
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
                  InputProps={{ style: { color: "#0b132b" } }}
                  error={validEmail !== ""}
                  helperText={validEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={styles.formInput}
                  fullWidth
                  label="Message"
                  name="message"
                  variant="filled"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  InputProps={{ style: { color: "#0b132b" } }}
                />
              </Grid>
              <Grid item xs={12}>
                {!verificationComplete ? (
                  <>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontFamily: "Arial",
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
                      InputProps={{ style: { color: "#0b132b" } }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleVerify}
                    >
                      Verify Security Code
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Submit
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        </Container>
      )}
    </ThemeProvider>
  );
};

export default Contact;
