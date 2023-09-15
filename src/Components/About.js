import { Avatar, Container, Grid, Typography, Box } from "@mui/material";
import styles from "../CssStuff/About.module.css";

const About = () => {
  return (
    <Container sx={{ margin: "16vh" }} className={styles.aboutDiv}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography
              className={styles.content}
              color={"primary"}
              variant="h2"
              sx={{
                marginBottom: "25px",
              }}
            >
              Software Engineer
            </Typography>
            <Typography
              className={styles.content}
              color="textSecondary"
              variant="h4"
            >
              Hello World! I'm <strong>Henry</strong>, a passionate computer
              science student with a deep love for creating innovative solutions
              through code.
            </Typography>
          </Box>
        </Grid>
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
            alt="profile picture"
            src="https://i.imgur.com/mETAtbH.jpg"
            sx={{
              marginLeft: "8vw",
              width: "85%",
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
