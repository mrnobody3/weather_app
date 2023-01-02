import React from "react";
import Typography from "@mui/material/Typography";
import { Box, CardMedia } from "@mui/material";
import { rain } from "../../../assets/images";
import useModal from "../../../hooks/useModal";
import WeatherCardInfo from "./WeatherCardInfo";
import { ICurrentWeather } from "../../../types/weather";
const WeatherCard: React.FC<ICurrentWeather> = ({
  weather,
  main,
  name,
  wind,
}) => {
  const { isOpen, toggle } = useModal();

  return (
    <>
      <div
        onClick={() => toggle()}
        style={{
          maxWidth: 300,
          width: "300px",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "lightblue",
            justifyContent: "space-between",
            p: "20px",
          }}
        >
          <CardMedia src={rain} component="img" sx={{ width: "100px" }} />
          <Box component="div">
            <Typography component="p" sx={{}}>
              {weather[0].main}
            </Typography>
            <Typography component="p" sx={{ fontWeight: "medium" }}>
              {Math.round(main.temp)}&deg;
            </Typography>
            <Typography component="h3" sx={{ fontWeight: "medium" }}>
              {name}
            </Typography>
          </Box>
        </Box>
        <Box component="div" sx={{ p: "20px" }}>
          <Typography component="p">
            Wind:
            <Box component="span">{wind.speed.toFixed(1)} m/s</Box>
          </Typography>
          <Typography component="p">
            Temp:
            <Box component="span">{Math.round(main.temp)}&deg;</Box>
          </Typography>
        </Box>
      </div>
      {isOpen && <WeatherCardInfo onClose={toggle} />}
    </>
  );
};

export default WeatherCard;
