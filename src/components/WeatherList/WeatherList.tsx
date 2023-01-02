import { Grid } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../hooks/useReduxWithType";
import WeatherCard from "./WeatherCard";

const WeatherList = () => {
  const weatherList = useAppSelector((store) => store.weather.entities);
  return (
    <Grid container spacing={4} sx={{ gap: "40px", p: "100px 0" }}>
      {weatherList.map(({ ...item }) => (
        <WeatherCard key={item.id} {...item} />
      ))}
    </Grid>
  );
};

export default WeatherList;
