import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import styles from "../CssStuff/Skills.module.css";

const Skills = () => {
  // Define an array of objects with icon names and corresponding icons
  const skillsList = [
    {
      name: "HTML",
      icon: <img src="https://i.imgur.com/4PzraaT.png" alt="HTML" />,
    },
    {
      name: "CSS",
      icon: <img src="https://i.imgur.com/cDfIJqj.png" alt="CSS" />,
    },
    {
      name: "Javascript",
      icon: <img src="https://i.imgur.com/kUUCtnD.png" alt="Javasript" />,
    },
    {
      name: "PHP",
      icon: <img src="https://i.imgur.com/YGiDzjZ.png" alt="PHP" />,
    },
    {
      name: "Material-UI",
      icon: <img src="https://i.imgur.com/t1mBq2j.png" alt="Material-UI" />,
    },
    {
      name: "NodeJs",
      icon: <img src="https://i.imgur.com/PmDHBDg.png" alt="NodeJs" />,
    },
    {
      name: "ExpressJs",
      icon: <img src="https://i.imgur.com/3IX7EVe.png" alt="ExpressJs" />,
    },
    {
      name: "AngularJs",
      icon: <img src="https://i.imgur.com/1mc1Mt4.png" alt="AngularJs" />,
    },
    {
      name: "ReactJs",
      icon: <img src="https://i.imgur.com/o41ScOa.png" alt="ReactJs" />,
    },
    {
      name: "Python",
      icon: <img src="https://i.imgur.com/st2MRPx.png" alt="Python" />,
    },
    {
      name: "Django",
      icon: <img src="https://i.imgur.com/e86tyGK.png" alt="Django" />,
    },
    {
      name: "Java",
      icon: <img src="https://i.imgur.com/1bVr8Kk.png" alt="Java" />,
    },
    {
      name: "C# .NET",
      icon: <img src="https://i.imgur.com/mjCMdQT.png" alt=".Net" />,
    },
    {
      name: "Azure DevOps",
      icon: <img src="https://i.imgur.com/B0BEXbz.png" alt="Azure Devops" />,
    },
    {
      name: "Git",
      icon: <img src="https://i.imgur.com/88t77ql.png" alt="Git" />,
    },
    {
      name: "Vim",
      icon: <img src="https://i.imgur.com/D2d5eVq.png" alt="Vim" />,
    },
    {
      name: "MongoDB",
      icon: <img src="https://i.imgur.com/3hSg8HL.png" alt="MongoDB" />,
    },
    {
      name: "MySQL",
      icon: <img src="https://i.imgur.com/2yoEqWP.png" alt="MySQL" />,
    },
  ];

  return (
    <div className="content">
      <Container className={styles.container}>
        <Grid container spacing={2}>
          {skillsList.map((skill, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              key={index}
              className={styles.skillsDiv}
              sx={{ flexDirection: "column" }}
            >
              <div className={styles.icon}>{skill.icon}</div>
              <Typography
                className={styles.skillName}
                variant="subtitle1"
                color={"primary"}
                sx={{ fontFamily: "Raleway", fontWeight: "bold" }}
              >
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
