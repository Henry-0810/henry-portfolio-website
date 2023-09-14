import { Avatar, Container, Grid, Typography } from "@mui/material";
import styles from "../CssStuff/About.module.css";

const About = () => {
  return (
    <Container sx={{ marginBottom: "50px" }} className={styles.aboutDiv}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <div>
            <Typography
              className={styles.content}
              variant="h2"
              sx={{
                marginBottom: "25px",
              }}
            >
              Software Engineer
            </Typography>
            <Typography
              className={styles.content}
              variant="h4"
              sx={{
                marginBottom: "1rem",
              }}
            >
              Hello World! I'm <strong>Henry</strong>, a passionate computer
              science student with a deep love for creating innovative solutions
              through code.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Avatar
            alt="profile picture"
            src="avatar.jpg"
            sx={{
              width: "80%", // Adjust image size with percentage for responsiveness
              height: "auto",
              filter: "drop-shadow(6px 6px 8px #ACACAC)",
              borderRadius: "25%",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
