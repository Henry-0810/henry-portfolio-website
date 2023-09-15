import React from "react";
import {
  Typography,
  Link,
  ThemeProvider,
  AppBar,
  Box,
  Toolbar,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import theme from "./CssStuff/theme";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "./CssStuff/Footer.module.css";

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary" className={styles.footer}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box paddingLeft={"1vw"}>
            <Typography variant="body1">
              &copy; 2023 Henry Pan. All Rights Reserved.
            </Typography>
          </Box>
          <Box>
            <Link
              href="/"
              color={"secondary"}
              sx={{
                paddingX: "1vw",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              About Me
            </Link>
            <Link
              href="/Skills"
              color={"secondary"}
              sx={{
                paddingX: "1vw",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              Skills
            </Link>
            <Link
              href="/Projects"
              color={"secondary"}
              sx={{
                paddingX: "1vw",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              color={"secondary"}
              sx={{
                paddingX: "1vw",
                textDecoration: "none",
                ":hover": { textDecoration: "underline" },
              }}
            >
              Contact
            </Link>
          </Box>
          <Box paddingRight={"1vw"}>
            <Link
              href="https://www.linkedin.com/in/mun-li-pan-081002henry/"
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
              href="https://github.com/Henry-0810"
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
              href="https://www.instagram.com/henryy0810/"
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
    </ThemeProvider>
  );
};

export default Footer;
