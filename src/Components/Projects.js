import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { FaExternalLinkAlt } from "react-icons/fa";
import styles from "../CssStuff/Projects.module.css";

const projectsData = [
  {
    title: "Real-Time Payment Fraud Detection Platform",
    date: "Sep 2024 - Present",
    techStack: [
      "Python",
      "Java Spring Boot",
      "Apache Kafka",
      "Apache Flink",
      "Docker",
      "Kubernetes",
      "Microservices",
    ],
    description:
      "Designed a microservices-based architecture for real-time fraud detection, leveraging Apache Kafka for messaging and Apache Flink for data analysis. Built a scalable system with Docker and Kubernetes, enabling efficient model retraining to adapt to evolving fraud patterns.",
    githubLink:
      "https://github.com/orgs/Henry-s-Final-Year-Project/repositories",
    liveLink: "",
  },
  {
    title: "Smart Distributed System Incident Classifier",
    date: "Jan 2025 - Present",
    techStack: ["Python", "NLP", "API Development", "Distributed Systems"],
    description:
      "Developed AI-driven log classification using NLP (BART) with 95% accuracy on 10,000+ logs. Implemented real-time solution suggestions, reducing incident resolution time and improving operational efficiency.",
    githubLink:
      "https://github.com/orgs/Smart-DS-Incident-Classifier/repositories",
    liveLink: "",
  },
  {
    title: "Keep Safe, Password Manager Website",
    date: "Sep 2024 - Dec 2024",
    techStack: [
      "Flask",
      "React.js",
      "AWS DynamoDB",
      "Cryptography",
      "Design Patterns",
    ],
    description:
      "Developed a secure password manager using Flask, React, AWS DynamoDB, and bcrypt for encryption. Applied design patterns like Proxy, Decorator, and Strategy for scalability and maintainability.",
    githubLink: "https://github.com/Henry-0810/Keep-Safe",
    liveLink: "",
  },
  {
    title: "Connecting-Kerry, Volunteer App",
    date: "May 2024 - Aug 2024",
    techStack: ["React", "Node.js", "PostgreSQL", "Firebase"],
    description:
      "Led a team in building a volunteer management platform, enhancing community engagement by 30%. Implemented CI/CD pipelines and secure Firebase authentication, reducing development time by 30%.",
    githubLink: "https://github.com/Give-Up-Squad/VolunterHub",
    liveLink: "https://connectingkerry.netlify.app/",
  },
  {
    title: "Student Dropout and Academic Success Prediction",
    date: "Oct 2023 - Nov 2023",
    techStack: [
      "Python",
      "Pandas",
      "Random Forest",
      "Logistic Regression",
      "Support Vector Machine",
    ],
    description:
      "Developed a machine learning model predicting student dropout and academic success using demographic, academic, and socio-economic data. Achieved 85% accuracy and improved retention strategies.",
    githubLink:
      "https://github.com/Henry-0810/Data-Analysis/blob/main/Project/DropOutRate.ipynb",
    liveLink: "",
  },
  {
    title: "Henry’s Financial Frontiers: Ledger Keeping System",
    date: "Mar 2023 - May 2023",
    techStack: ["HTML", "CSS", "JQuery", "MySQL", "PHP"],
    description:
      "Built a comprehensive ledger keeping and accounting system, streamlining financial record management with features like department organization and real-time updates. Focused on data integrity and user-friendly interface.",
    githubLink: "https://github.com/Henry-0810/Accounting-System",
    liveLink: "",
  },
  {
    title: "NBA Tickets Retail System",
    date: "Sep 2022 - Apr 2023",
    techStack: ["C#", ".NET Framework", "Oracle SQL Developer"],
    description:
      "Developed a robust basketball ticket system for efficient ticket purchasing, processing returns, and seat assignments. Optimized data retrieval and storage using Oracle SQL and ensured scalability with C# and .NET.",
    githubLink: "https://github.com/Henry-0810/NBA-Tickets-Retail-System",
    liveLink: "",
  },
  {
    title: "Object-Oriented Programming: Tetris Game",
    date: "Oct 2022 - Dec 2022",
    techStack: ["Java", "OOP", "Java GUI", "Java Threading"],
    description:
      "Created a classic Tetris game using Java, implementing object-oriented principles, multi-level arrays, and Java GUI with threading for smooth gameplay.",
    githubLink: "https://github.com/Henry-0810/Tetris-Game",
    liveLink: "",
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
          Here are some of the projects I've worked on. Count:{" "}
          {projectsData.length} 😊
        </Typography>
      </motion.div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        modules={[Navigation, Pagination]}
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
                <CardContent>
                  <div className={styles.header}>
                    <Typography variant="h6" className={styles.projectTitle}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" className={styles.date}>
                      {project.date}
                    </Typography>
                  </div>
                  <Typography
                    variant="body1"
                    className={styles.techStack}
                    gutterBottom
                  >
                    <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                  </Typography>
                  <Typography variant="body2" className={styles.description}>
                    {project.description}
                  </Typography>
                  <div className={styles.links}>
                    {project.githubLink && (
                      <Button
                        variant="contained"
                        color="secondary"
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button
                        variant="contained"
                        color="primary"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo{" "}
                        <FaExternalLinkAlt style={{ marginLeft: "8px" }} />
                      </Button>
                    )}
                  </div>
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
