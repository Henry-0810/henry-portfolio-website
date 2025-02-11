import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  ThemeProvider,
} from "@mui/material";
import { motion } from "framer-motion";
import theme from "../CssStuff/theme.js";
import emailjs from "@emailjs/browser";
import validator from "validator";
import styles from "../CssStuff/Contact.module.css";

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
    setFormData({ ...formData, [name]: value });
    if (name === "email") validateEmail(value);
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
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (verificationComplete && validSecurityCode && validEmail === "") {
        emailjs.send(
          "service_wd6z371",
          "template_xjg60l3",
          {
            user_name: formData.name,
            user_email: formData.email,
            message: formData.message,
          },
          "vsQMnVvW_zkEYfzjd"
        );
        setFormData({ name: "", email: "", message: "", securityCode: "" });
        setValidSecurityCode(false);
        setVerificationComplete(false);
      } else {
        alert("Please verify the security code and email address.");
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <ThemeProvider theme={theme}>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h6" align="center" color="primary">
            Sending message...
          </Typography>
        </motion.div>
      )}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Container
            sx={{
              marginY: "4vh",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "10px",
              padding: "3vh",
            }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Contact Me
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    variant="filled"
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
                    variant="filled"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    error={validEmail !== ""}
                    helperText={validEmail}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
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
                  {!verificationComplete ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Typography
                        variant="h6"
                        className={styles.securityCode}
                        gutterBottom
                      >
                        Enter Security Code: {randomSecurityCode}
                      </Typography>
                      <TextField
                        fullWidth
                        label="Enter Security Code"
                        name="securityCode"
                        variant="filled"
                        value={formData.securityCode}
                        onChange={handleChange}
                        required
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleVerify}
                        sx={{ marginTop: "1.5vh" }}
                      >
                        Verify Security Code
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                      >
                        Submit
                      </Button>
                    </motion.div>
                  )}
                </Grid>
              </Grid>
            </form>
          </Container>
        </motion.div>
      )}
    </ThemeProvider>
  );
};

export default Contact;
