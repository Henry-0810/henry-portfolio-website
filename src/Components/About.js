import { Avatar, Container, Grid, Typography, Box } from "@mui/material";
import styles from "../CssStuff/About.module.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const About = () => {
  return (
    <div className="content">
      <Container className={styles.aboutDiv}>
        <Grid container>
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
                science student with a deep love for creating innovative
                solutions through code.
              </Typography>
              <Typography
                variant="h5"
                color="textSecondary"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <PhoneIcon color="0b132b" fontSize="large" />: +353 85 731 7597
              </Typography>
              <Typography
                variant="h5"
                color="textSecondary"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <EmailIcon color="0b132b" fontSize="large" />:
                ml2002study@gmail.com
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
              className={styles.avatar}
              alt="profile picture"
              src="https://i.imgur.com/mETAtbH.jpg"
              sx={{
                width: "85%",
                height: "auto",
                filter: "drop-shadow(6px 6px 8px #ACACAC)",
                borderRadius: "25%",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
