import { Container, Paper, Typography } from "@mui/material";
import styles from "../CssStuff/Skills.module.css";

const Skills = () => {
  return (
    <Container>
      <Typography variant="h4" className={styles.title}>
        I'm experienced with these technologies
      </Typography>
      <Paper elevation={4} className={styles.surface}></Paper>
    </Container>
  );
};

export default Skills;
