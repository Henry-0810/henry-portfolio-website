import { Avatar, Container, Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Container>
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
              Hello! I'm <strong>Henry</strong>, a passionate computer science
              student with a deep love for creating innovative solutions through
              code.
            </Typography>
            <LinkedInIcon
              sx={{
                fontSize: 50,
                paddingRight: "15px",
                color: "#0072b1",
              }}
            />
            <GitHubIcon
              sx={{
                fontSize: 48,
                paddingRight: "15px",
                color: "#171515",
              }}
            />
            <InstagramIcon sx={{ fontSize: 48, color: "#E1306C" }} />
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
