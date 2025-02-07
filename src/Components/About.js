import React from "react";
import {
  Avatar,
  Container,
  Grid,
  Typography,
  Box,
  Button,
} from "@mui/material";
import styles from "../CssStuff/About.module.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import DownloadIcon from "@mui/icons-material/GetApp"; // Download icon for the button
import Navbar from "../NavBar";
import Footer from "../Footer";

const About = () => {
  return (
    <>
      <div className="content">
        <Container className={styles.aboutDiv}>
          <Grid container spacing={4}>
            {/* Left Column (Text Content) */}
            <Grid item xs={12} sm={7}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  height: "100%",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <Typography
                  variant="h3"
                  color="textPrimary"
                  sx={{
                    marginBottom: "20px",
                    fontWeight: "bold",
                    fontSize: { xs: "2.5rem", sm: "3.5rem" },
                  }}
                >
                  Hello World! I'm Henry
                </Typography>
                <Typography
                  variant="h4"
                  color="textSecondary"
                  sx={{
                    marginBottom: "20px",
                    fontSize: { xs: "1.5rem", sm: "2rem" },
                  }}
                >
                  Passionate software engineer with a deep love for creating
                  innovative solutions through code.
                </Typography>

                {/* Contact Information */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                    }}
                  >
                    <PhoneIcon
                      sx={{ color: "#007BFF", marginRight: 1 }}
                      fontSize="inherit"
                    />
                    +(353) 857317597
                  </Typography>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                    }}
                  >
                    <EmailIcon
                      sx={{ color: "#007BFF", marginRight: 1 }}
                      fontSize="inherit"
                    />
                    <a href="mailto:henry.pan0810@gmail.com">
                      henry.pan0810@gmail.com
                    </a>
                  </Typography>

                  {/* Download Resume Button (below email) */}
                  <Button
                    variant="contained"
                    color="primary"
                    href="/path-to-resume.pdf"
                    target="_blank"
                    download
                    sx={{
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      textTransform: "none",
                      marginTop: "20px",
                    }}
                  >
                    <DownloadIcon />
                    Download Resume
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Right Column (Avatar) */}
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                className={styles.avatar}
                alt="profile picture"
                src="https://imgur.com/0Gg0opC.jpg"
                sx={{
                  width: "80%",
                  height: "auto",
                  borderRadius: "50%",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default About;
