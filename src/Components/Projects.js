import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { FaExternalLinkAlt } from "react-icons/fa";
import "swiper/swiper-bundle.css";
import styles from "../CssStuff/Projects.module.css";

const projectsData = [
  {
    title: "Project A",
    date: "Jan 2025 - Present",
    techStack: ["React", "Java", "Python"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/300",
    liveLink: "https://example.com",
  },
  {
    title: "Project B",
    date: "Sep 2024 - Dec 2024",
    techStack: ["React", "Java", "Python"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/300",
    liveLink: "https://example.com",
  },
  {
    title: "Project C",
    date: "May 2024 - Aug 2024",
    techStack: ["React", "Java", "Python"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/300",
    liveLink: "https://example.com",
  },
];

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <motion.div
        className={styles.titleContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" className={styles.pageTitle}>
          My Projects
        </Typography>
        <Typography variant="body1" className={styles.pageSubtitle}>
          Here are some of the projects I've worked on.
        </Typography>
      </motion.div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        className={styles.swiperContainer}
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className={styles.card}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.cardImage}
                />
                <CardContent>
                  <div className={styles.header}>
                    <Typography variant="h6">{project.title}</Typography>
                    <Typography variant="body2" className={styles.date}>
                      {project.date}
                    </Typography>
                  </div>
                  <Typography variant="body1" className={styles.techStack}>
                    <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                  </Typography>
                  <Typography variant="body2" className={styles.description}>
                    {project.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.liveLinkButton}
                  >
                    Live Demo <FaExternalLinkAlt />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
