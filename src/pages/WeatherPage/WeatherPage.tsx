import React from "react";
import { Box, Container } from "@mui/material";
import SearchForm from "../../components/SearchForm";
import WeatherList from "../../components/WeatherList";

const WeatherPage = () => {
  return (
    <Box component="section" sx={{ py: "50px", height: "100%" }}>
      <Container>
        <SearchForm />
        <WeatherList />
      </Container>
    </Box>
  );
};

export default WeatherPage;
