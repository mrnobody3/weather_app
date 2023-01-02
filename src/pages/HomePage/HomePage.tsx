import { Box, Container, Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Box component="section" sx={{ py: "50px", height: "100%" }}>
      <Container>
        <Typography component="h1">Home Page</Typography>
      </Container>
    </Box>
  );
};

export default HomePage;
