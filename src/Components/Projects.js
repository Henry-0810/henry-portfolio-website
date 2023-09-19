import React, { useState } from "react";
import {
  Typography,
  ThemeProvider,
  Card,
  Container,
  Link,
  Button,
} from "@mui/material";
import theme from "../CssStuff/theme.js";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styles from "../CssStuff/Projects.module.css";

const projectsData = [
  {
    title: "Accounting System",
    images: [
      {
        src: "https://i.imgur.com/srnpvcc.jpg",
        width: 700,
        height: 350,
      },
      {
        src: "https://i.imgur.com/GHkopiz.jpg",
        width: 700,
        height: 350,
      },
    ],
    codeLink: "https://github.com/Henry-0810/Accounting-System",
  },
  {
    title: "NBA Tickets Retail System",
    images: [
      {
        src: "https://i.imgur.com/iVzcq2T.jpg",
        width: 600,
        height: 350,
      },
      {
        src: "https://i.imgur.com/nhxyHDu.jpg",
        width: 600,
        height: 350,
      },
    ],
    codeLink: "https://github.com/Henry-0810/NBA-Tickets-Retail-System",
  },
  {
    title: "Tetris Game",
    images: [
      {
        src: "https://i.imgur.com/n0pTWhI.jpg",
        width: 400,
        height: 400,
      },
      {
        src: "https://i.imgur.com/vSe8MjM.jpg",
        width: 400,
        height: 280,
      },
    ],
    codeLink: "https://github.com/Henry-0810/Tetris-Game",
  },
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardOpacity, setCardOpacity] = useState(1); // Initialize opacity to 1 (fully visible)

  const handlePrev = () => {
    setCardOpacity(0); // Set opacity to 0 (invisible) when changing projects
    setTimeout(() => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
      setCardOpacity(1); // Set opacity back to 1 (visible) after a short delay
    }, 300); // Adjust the delay as needed for the desired transition speed
  };

  const handleNext = () => {
    setCardOpacity(0);
    setTimeout(() => {
      setCurrentPage((prevPage) =>
        Math.min(prevPage + 1, projectsData.length - 1)
      );
      setCardOpacity(1);
    }, 300);
  };

  const project = projectsData[currentPage];

  return (
    <div className="content">
      <ThemeProvider theme={theme}>
        <Container
          className={styles.container}
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "5vh",
            marginBottom: "15vh",
          }}
        >
          <div style={{ display: "flex" }}>
            <Button
              variant="contained"
              onClick={handlePrev}
              disabled={currentPage === 0}
              sx={{
                height: "10vw",
                borderRadius: "5%",
              }}
            >
              <ArrowLeftIcon fontSize="large" />
            </Button>
          </div>
          <Card
            className="card"
            sx={{
              marginX: "5vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "primary.main",
              opacity: cardOpacity,
              transition: "opacity 0.3s ease-in-out",
              borderRadius: "30px",
            }}
          >
            <div
              className="content"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "3vh 3vw",
              }}
            >
              <Typography
                variant="h6"
                className={styles.title}
                sx={{ color: "#edeade", fontFamily: "Raleway" }}
              >
                {project.title}
              </Typography>
              <img
                className={styles.image}
                src={project.images[0].src}
                alt={project.title}
                width={project.images[0].width}
                height={project.images[0].height}
                style={{
                  borderRadius: "15px",
                  border: "2px solid #dfe3ee",
                  marginBottom: "2vh",
                }}
              />
              <img
                className={styles.image}
                src={project.images[1].src}
                alt={project.title}
                width={project.images[1].width}
                height={project.images[1].height}
                style={{ borderRadius: "15px", border: "2px solid #dfe3ee" }}
              />
              <Link
                className={styles.link}
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#edeade",
                  fontFamily: "Raleway",
                  fontSize: "1.5rem",
                  marginTop: "2vh",
                }}
              >
                See the code
              </Link>
            </div>
          </Card>
          <div style={{ display: "flex" }}>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={currentPage === projectsData.length - 1}
              sx={{
                height: "10vw",
                borderRadius: "5%",
              }}
            >
              <ArrowRightIcon fontSize="large" />
            </Button>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Projects;
