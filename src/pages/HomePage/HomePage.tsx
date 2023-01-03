import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const HomePage = () => {
  return (
    <Box component="section" sx={{ py: "50px", height: "100%" }}>
      <Container>
        <Typography
          component="h1"
          sx={{ textAlign: "center", fontSize: "60px", fontWeight: "bold" }}
        >
          Welcome to the best app
        </Typography>
        <Typography
          component="p"
          sx={{ textAlign: "center", fontSize: "30px", fontWeight: "600" }}
        >
          Let's check your
          <Link
            to="/weather"
            style={{
              fontSize: "30px",
              fontWeight: "600",
              color: "#0991ef",
              marginLeft: "5px",
            }}
          >
            Weather
            <ArrowOutwardIcon />
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default HomePage;
