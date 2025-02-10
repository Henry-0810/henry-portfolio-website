import React, { useState } from "react";
import {
  Avatar,
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import DownloadIcon from "@mui/icons-material/GetApp";
import styles from "../CssStuff/About.module.css";

const About = () => {
  const [open, setOpen] = useState(false); // State to control modal

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="content">
        <Container className={styles.aboutDiv}>
          <Grid container spacing={4} justifyContent="center">
            <Grid
              item
              xs={12}
              sm={8}
              md={7}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                textAlign: "left",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
                  Upcoming software engineering graduate passionate about
                  developing innovative and efficient solutions to complex
                  problems through code.
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

                  {/* Download Resume Button */}
                  <Button
                    variant="contained"
                    color="primary"
                    href="/Henry_Pan_CV.pdf"
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
                    Download CV
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Right Column (Profile Picture) */}
            <Grid
              item
              xs={12}
              sm={4}
              md={5} // Adjust layout for larger screens
              sx={{
                display: "flex",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                className={styles.avatar}
                alt="profile picture"
                src="https://imgur.com/0Gg0opC.jpg"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "50%",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  "&:hover": { transform: "scale(1.05)" },
                }}
                onClick={handleOpen} // Open modal on click
              />
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* Modal for Profile Picture */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 10, right: 10, color: "black" }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src="https://imgur.com/0Gg0opC.jpg"
            alt="Profile"
            style={{
              maxWidth: "100%",
              maxHeight: "80vh",
              borderRadius: "10px",
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default About;
