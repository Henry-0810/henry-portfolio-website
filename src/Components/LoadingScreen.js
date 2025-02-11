// src/Components/LoadingScreen.js
import React, { useEffect, useState } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 3000);
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#121212",
        color: "#fff",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" sx={{ marginBottom: 3 }}>
          Welcome to My Portfolio!
        </Typography>
        <LinearProgress
          sx={{
            width: "80%",
            maxWidth: "500px",
            marginBottom: 3,
            backgroundColor: "#333",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#FFB300",
            },
          }}
        />
        <Typography variant="h6">Loading...</Typography>
      </motion.div>
    </Box>
  );
};

export default LoadingScreen;
