import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListItem, Typography, Link, Box, ThemeProvider } from "@mui/material";
import theme from "../CssStuff/theme";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const githubUsername = "Henry-0810";
  const selectedRepos = [
    "Accounting-System",
    "NBA-Tickets-Retail-System",
    "Tetris-Game",
  ];

  useEffect(() => {
    const githubToken = "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";
    const fetchRepos = async () => {
      try {
        const reposData = await Promise.all(
          selectedRepos.map(async (repo) => {
            const response = await axios.get(
              `https://api.github.com/repos/${githubUsername}/${repo}`,
              {
                headers: {
                  Authorization: `token ${githubToken}`,
                },
              }
            );
            return response.data;
          })
        );
        setRepos(reposData);
      } catch (error) {
        console.log("Error fetching Github Repositories: ", error);
      }
    };
    fetchRepos();
  });

  return (
    <div className="content">
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {repos.map((repo) => (
            <ListItem key={repo.id}>
              <Link
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                {repo.name}
              </Link>
              <Typography variant="body2">{repo.description}</Typography>
              <Typography variant="body2">Language: {repo.language}</Typography>
              <Typography variant="body2">
                Last Updated: {new Date(repo.updated_at).toLocaleDateString()}
              </Typography>
              {repo.license && (
                <Typography variant="body2">
                  License: {repo.license.name}
                </Typography>
              )}
            </ListItem>
          ))}
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Projects;
