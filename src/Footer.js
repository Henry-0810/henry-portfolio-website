import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Container,
  ThemeProvider,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "./CssStuff/Footer.module.css";
import theme from "./CssStuff/theme";

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" className={styles.footer}>
        <Container sx={{ padding: 0 }}>
          <Toolbar sx={{ padding: 0 }}>
            <Typography variant="body1" className={styles.text}>
              &copy; 2023 Henry Pan. All Rights Reserved.
            </Typography>
            <div className={styles.links}>
              <Link href="/" className={styles.link} sx={{ color: "#edeade" }}>
                About Me
              </Link>
              <Link
                href="/Skills"
                className={styles.link}
                sx={{ color: "#edeade" }}
              >
                Skills
              </Link>
              <Link
                href="/Projects"
                className={styles.link}
                sx={{ color: "#edeade" }}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={styles.link}
                sx={{ color: "#edeade" }}
              >
                Contact
              </Link>
            </div>
            <div className={styles.iconDiv}>
              <a
                href="https://www.linkedin.com/in/mun-li-pan-081002henry/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  sx={{
                    fontSize: "3vw", // Adjust icon size with vw unit for responsiveness
                    paddingRight: "2vw", // Adjust spacing with vw unit for responsiveness
                    color: "#0072b1",
                  }}
                />
              </a>
              <a
                href="https://github.com/Henry-0810"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  sx={{
                    fontSize: "3vw", // Adjust icon size with vw unit for responsiveness
                    paddingRight: "2vw", // Adjust spacing with vw unit for responsiveness
                    color: "#fbfaf2",
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/henryy0810/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon
                  sx={{
                    fontSize: "3vw", // Adjust icon size with vw unit for responsiveness
                    color: "#d62976",
                  }}
                />
              </a>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Footer;
