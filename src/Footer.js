import React from "react";
import { Typography, ThemeProvider, AppBar, Box, Toolbar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import theme from "./CssStuff/theme.js";
import styles from "./CssStuff/Footer.module.css";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.footerContainer}>
        <AppBar position="static" className={styles.footer}>
          <Toolbar className={styles.footerToolbar}>
            {/* Copyright */}
            <Box className={styles.footerCopyright}>
              <Typography variant="body1" className={styles.footerText}>
                &copy; 2025 Henry Pan. All Rights Reserved.
              </Typography>
            </Box>

            {/* Navigation Links */}
            <Box className={styles.footerLinks}>
              <Link to="/" className={styles.footerLink}>
                About Me
              </Link>
              <Link to="/skills" className={styles.footerLink}>
                Skills
              </Link>
              <Link to="/projects" className={styles.footerLink}>
                Projects
              </Link>
              <Link to="/contact" className={styles.footerLink}>
                Contact
              </Link>
            </Box>

            {/* Social Icons */}
            <Box className={styles.footerIcons}>
              <Link
                to="https://www.linkedin.com/in/mun-li-pan-081002henry/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className={styles.icon} />
              </Link>
              <Link
                to="https://github.com/Henry-0810"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className={styles.icon} />
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default Footer;
