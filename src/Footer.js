import React from "react";
import { Typography, ThemeProvider, AppBar, Box, Toolbar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import theme from "./CssStuff/theme.js";
import styles from "./CssStuff/Footer.module.css";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "#edeade",
  fontSize: "16px",
  marginLeft: "1vw",
  marginRight: "1vw",
  ":hover": { textDecoration: "underline" },
};

const removeUnderline = {
  textDecoration: "none",
};

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="footer">
        <AppBar
          sx={{
            position: "fixed",
            bottom: 0,
            top: "auto",
            marginTop: "auto", // For older browsers
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
          }}
          color="primary"
          className={styles.footer}
        >
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box paddingLeft={"1vw"} justifyContent={"flex-start"}>
              <Typography variant="body1">
                &copy; 2023 Henry Pan. All Rights Reserved.
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Link to="/" style={removeUnderline}>
                <Typography
                  variant="body1"
                  style={linkStyle}
                  fontFamily={"Raleway"}
                >
                  About Me
                </Typography>
              </Link>
              <Link to="/skills" style={removeUnderline}>
                <Typography
                  variant="body1"
                  style={linkStyle}
                  fontFamily={"Raleway"}
                >
                  Skills
                </Typography>
              </Link>
              <Link to="/projects" style={removeUnderline}>
                <Typography
                  variant="body1"
                  style={linkStyle}
                  fontFamily={"Raleway"}
                >
                  Projects
                </Typography>
              </Link>
              <Link to="/contact" style={removeUnderline}>
                <Typography
                  variant="body1"
                  style={linkStyle}
                  fontFamily={"Raleway"}
                >
                  Contact
                </Typography>
              </Link>
            </Box>
            <Box paddingRight={"1vw"}>
              <Link
                to="https://www.linkedin.com/in/mun-li-pan-081002henry/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  sx={{
                    fontSize: "4vw",
                    paddingX: "1vw",
                    color: "#0072b1",
                  }}
                />
              </Link>
              <Link
                to="https://github.com/Henry-0810"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  sx={{
                    fontSize: "4vw",
                    paddingX: "1vw",
                    color: "#fbfaf2",
                  }}
                />
              </Link>
              <Link
                to="https://www.instagram.com/henryy0810/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon
                  sx={{
                    fontSize: "4vw",
                    paddingX: "1vw",
                    color: "#d62976",
                  }}
                />
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default Footer;
