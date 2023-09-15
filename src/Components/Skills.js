import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import styles from "../CssStuff/Skills.module.css";

const Skills = () => {
  // Define an array of objects with icon names and corresponding icons
  const skillsList = [
    { name: "HTML", icon: <img src="./icons/Html.svg" alt="HTML" /> },
    { name: "CSS", icon: <img src="./icons/Css.svg" alt="CSS" /> },
    {
      name: "Javascript",
      icon: <img src="./icons/Javascript.svg" alt="Javasript" />,
    },
    { name: "PHP", icon: <img src="./icons/Php.svg" alt="PHP" /> },
    {
      name: "Material-UI",
      icon: <img src="./icons/MaterialUI.svg" alt="Material-UI" />,
    },
    { name: "NodeJs", icon: <img src="./icons/Nodejs.svg" alt="NodeJs" /> },
    {
      name: "ExpressJs",
      icon: <img src="./icons/Express.svg" alt="ExpressJs" />,
    },
    {
      name: "AngularJs",
      icon: <img src="./icons/Angular.svg" alt="AngularJs" />,
    },
    { name: "ReactJs", icon: <img src="./icons/React.svg" alt="ReactJs" /> },
    { name: "Python", icon: <img src="./icons/Python.svg" alt="Python" /> },
    { name: "Django", icon: <img src="./icons/Django.svg" alt="Django" /> },
    { name: "Java", icon: <img src="./icons/Java.svg" alt="Java" /> },
    { name: "C# .NET", icon: <img src="./icons/Csharp.svg" alt=".Net" /> },
    {
      name: "Azure DevOps",
      icon: <img src="./icons/Azure.svg" alt="Azure Devops" />,
    },
    { name: "Git", icon: <img src="./icons/Git.svg" alt="Git" /> },
    { name: "Vim", icon: <img src="./icons/Vim.svg" alt="Vim" /> },
    {
      name: "MongoDB",
      icon: <img src="./icons/MongoDB.svg" alt="MongoDB" />,
    },
    { name: "MySQL", icon: <img src="./icons/MySQL.svg" alt="MySQL" /> },
  ];

  return (
    <Container className={styles.container}>
      <Grid container spacing={2}>
        {skillsList.map((skill, index) => (
          <Grid
            item
            xs={2}
            key={index}
            className={styles.skillsDiv}
            sx={{ flexDirection: "column" }}
          >
            <div className={styles.icon}>{skill.icon}</div>
            <Typography variant="subtitle1" color={"primary"}>
              {skill.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
