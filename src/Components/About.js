import { Avatar, Container, Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "../CssStuff/About.module.css";

const Home = () => {
  return (
    <Container sx={{ marginBottom: "50px" }} className={styles.aboutDiv}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <div
            style={{
              paddingTop: "20%",
            }}
          >
            <Typography
              className={styles.content}
              variant="h2"
              sx={{ marginBottom: "25px" }}
            >
              Software Engineer
            </Typography>
            <Typography
              className={styles.content}
              variant="h4"
              sx={{ marginBottom: "15%" }}
            >
              Hello World! I'm <strong>Henry</strong>, a passionate computer
              science student with a deep love for creating innovative solutions
              through code.
            </Typography>
            <a
              href="https://www.linkedin.com/in/mun-li-pan-081002henry/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                sx={{
                  fontSize: 50,
                  paddingRight: "15px",
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
                  fontSize: 48,
                  paddingRight: "15px",
                  color: "#171515",
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/henryy0810/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon sx={{ fontSize: 48, color: "#E1306C" }} />
            </a>
          </div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Avatar
            alt="profile picture"
            src="avatar.jpg"
            sx={{
              paddingTop: "100px",
              paddingLeft: "70px",
              width: 350,
              height: 420,
              filter: "drop-shadow(6px 6px 8px #ACACAC)",
              borderRadius: "25%",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
