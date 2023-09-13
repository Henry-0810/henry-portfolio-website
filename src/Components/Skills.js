import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import styles from "../CssStuff/Skills.module.css";
import SvgIcon from "@mui/material/SvgIcon";

const Skills = () => {
  // Define an array of objects with icon names and corresponding icons
  const skillsList = [
    { name: "HTML", icon: <SvgIcon component="Html.svg" /> },
    { name: "CSS", icon: <SvgIcon component="Css.svg" /> },
    { name: "Javascript", icon: <SvgIcon component="Javascript.svg" /> },
    { name: "ExpressJs", icon: <SvgIcon component="Express-js.svg" /> },
    { name: "Azure DevOps", icon: <SvgIcon component="Azure.svg" /> },
    { name: "Azure DevOps", icon: <SvgIcon component="Azure.svg" /> },
    { name: "Azure DevOps", icon: <SvgIcon component="Azure.svg" /> },
    { name: "Azure DevOps", icon: <SvgIcon component="Azure.svg" /> },
    { name: "Azure DevOps", icon: <SvgIcon component="Azure.svg" /> },
    { name: "Azure DevOps", icon: <SvgIcon component="Azure.svg" /> },
    { name: "Azure DevOps", icon: <SvgIcon component="Azure.svg" /> },
    { name: "Azure DevOps", icon: <SvgIcon component="Azure.svg" /> },
    { name: "Azure DevOps", icon: <SvgIcon component="Azure.svg" /> },
    { name: "Azure DevOps", icon: <SvgIcon component="Azure.svg" /> },
    { name: "Azure DevOps", icon: <SvgIcon component="Azure.svg" /> },
  ];

  return (
    <Container>
      <Typography variant="h4" className={styles.title}>
        I'm experienced with these technologies
      </Typography>
      <Grid container spacing={3}>
        {skillsList.map((skill, index) => (
          <Grid item xs={4} key={index}>
            <div className={styles.icon}>{skill.icon}</div>
            <Typography variant="subtitle1">{skill.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
