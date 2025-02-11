import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import styles from "../CssStuff/Skills.module.css";
import { LinearProgress } from "@mui/material";

const Skills = () => {
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const skillsList = [
    { name: "Java", icon: "./logos/Java_Logo.png" },
    { name: "Python", icon: "./logos/Python_Logo.png" },
    { name: "JavaScript", icon: "./logos/JavaScript_Logo.png" },
    { name: "C#", icon: "./logos/CSharp_Logo.png" },
    { name: "React.js", icon: "./logos/ReactJs_Logo.png" },
    { name: "Node.js", icon: "./logos/NodeJs_Logo.png" },
    { name: "Spring Boot", icon: "./logos/SpringBoot_Logo.png" },
    { name: "Flask", icon: "./logos/Flask_Logo.png" },
    { name: "PostgreSQL", icon: "./logos/PostgreSQL_Logo.png" },
    { name: "MongoDB", icon: "./logos/MongoDB_Logo.png" },
    { name: "Apache Kafka", icon: "./logos/Kafka_Logo.png" },
    { name: "AWS", icon: "./logos/AWS_Logo.png" },
    { name: "Jenkins", icon: "./logos/Jenkins_Logo.png" },
    { name: "Data Analysis", icon: "./logos/Jupyter_Logo.png" },
    { name: "Git", icon: "./logos/Git_Logo.png" },
    { name: "Linux", icon: "./logos/Linux_Logo.png" },
    { name: "Docker", icon: "./logos/Docker_Logo.png" },
    { name: "Kubernetes", icon: "./logos/Kubernetes_Logo.png" },
  ];

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedImages === skillsList.length) {
      setLoading(false);
    }
  }, [loadedImages]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="content"
    >
      {loading && <LinearProgress />}
      <Container className={styles.container}>
        <Grid container spacing={3}>
          {skillsList.map((skill, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              key={index}
              className={styles.skillsDiv}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className={styles.iconContainer}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={styles.icon}
                    loading="lazy"
                    onLoad={handleImageLoad}
                  />
                </div>
                <Typography variant="subtitle1" className={styles.skillName}>
                  {skill.name}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Skills;
