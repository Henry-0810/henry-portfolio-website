import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion"; // Import Framer Motion
import styles from "../CssStuff/Skills.module.css";

const Skills = () => {
  const skillsList = [
    { name: "Java", icon: "https://imgur.com/BJlwi3P.png" },
    { name: "Python", icon: "https://imgur.com/st2MRPx.png" },
    { name: "JavaScript", icon: "https://i.imgur.com/kUUCtnD.png" },
    { name: "C#", icon: "https://i.imgur.com/mjCMdQT.png" },
    { name: "React.js", icon: "https://i.imgur.com/o41ScOa.png" },
    { name: "Node.js", icon: "https://i.imgur.com/PmDHBDg.png" },
    { name: "Spring Boot", icon: "https://imgur.com/IrfvDvY.png" },
    { name: "Flask", icon: "https://imgur.com/vqvvH5m.png" },
    { name: "PostgreSQL", icon: "https://imgur.com/LSbAsLF.png" },
    { name: "MongoDB", icon: "https://i.imgur.com/3hSg8HL.png" },
    { name: "Apache Kafka", icon: "https://imgur.com/d9gr4qp.png" },
    { name: "AWS", icon: "https://imgur.com/sSyTa8Q.png" },
    { name: "Jenkins", icon: "https://imgur.com/cvTLyvr.png" },
    { name: "Data Analysis", icon: "https://imgur.com/3i5d5wr.png" },
    { name: "Git", icon: "https://i.imgur.com/88t77ql.png" },
    { name: "Linux", icon: "https://imgur.com/16k5oUJ.png" },
    { name: "Docker", icon: "https://imgur.com/y8JB8DV.png" },
    { name: "Kubernetes", icon: "https://imgur.com/ATcGVBP.png" },
  ];

  return (
    <div className="content">
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
              {/* Framer Motion Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className={styles.iconContainer}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={styles.icon}
                />
              </motion.div>
              <Typography variant="subtitle1" className={styles.skillName}>
                {skill.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Skills;
