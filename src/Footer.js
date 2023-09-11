import React from "react";
import { AppBar, Toolbar, Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="fixed"
      style={{ margin: "auto", top: "auto", bottom: 0, height: "60px" }}
    >
      <Container>
        <Toolbar>
          <Typography variant="body1" sx={{ color: "#EDEADE" }}>
            &copy; 2023 Henry Pan
          </Typography>
          <Link
            href="#"
            sx={{ color: "#EDEADE", marginLeft: 2, paddingBottom: "2px" }}
          >
            Home
          </Link>
          <Link
            href="#"
            sx={{ color: "#EDEADE", marginLeft: 2, paddingBottom: "2px" }}
          >
            About
          </Link>
          <Link
            href="#"
            sx={{ color: "#EDEADE", marginLeft: 2, paddingBottom: "2px" }}
          >
            Contact
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
