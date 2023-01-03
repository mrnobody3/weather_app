import React from "react";
import { Box, Container } from "@mui/material";
import SearchForm from "./SearchForm";
import WeatherList from "./WeatherList";

const WeatherPage = () => {
  return (
    <Box component="section" sx={{ pb: "50px", height: "100%" }}>
      <SearchForm />
      <Container>
        <WeatherList />
      </Container>
    </Box>
  );
};

export default WeatherPage;
