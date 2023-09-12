import React from "react";
import { AppBar, Toolbar, Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="fixed"
      style={{ margin: "auto", top: "auto", bottom: 0, height: "50px" }}
    >
      <Container>
        <Toolbar>
          <Typography
            variant="body1"
            sx={{ color: "#EDEADE", paddingBottom: "10px" }}
          >
            &copy; 2023 Henry Pan
          </Typography>
          <Link
            href="/"
            sx={{ color: "#EDEADE", marginLeft: 2, paddingBottom: "13px" }}
          >
            About Me
          </Link>
          <Link
            href="/Projects"
            sx={{ color: "#EDEADE", marginLeft: 2, paddingBottom: "13px" }}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            sx={{ color: "#EDEADE", marginLeft: 2, paddingBottom: "13px" }}
          >
            Contact
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
