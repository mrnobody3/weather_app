import { Box, Button, CardMedia, Typography } from "@mui/material";
import React from "react";
import { ICurrentWeather } from "../../../types/weather";
import Modal from "../../Modal/Modal";
import TempBlock from "../../TempBlock";
import CloseIcon from "@mui/icons-material/Close";
interface IWeatherCardInfo {
  onClose: () => void;
  props: ICurrentWeather;
}

const WeatherCardInfo: React.FC<IWeatherCardInfo> = ({ onClose, props }) => {
  const { name, main, wind, weather, clouds } = props;
  return (
    <Modal isOpen={true} toggle={onClose}>
      <Typography
        component="h2"
        sx={{
          textAlign: "center",
          fontSize: "26px",
          fontWeight: "bold",
        }}
      >
        {name}
      </Typography>
      <Box component="div" sx={{ display: "flex", px: "20px" }}>
        <CardMedia
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          component="img"
          sx={{ width: "150px", mr: "20px" }}
        />
        <Box
          component="div"
          sx={{
            pt: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            component="p"
            sx={{ fontSize: "50px", fontWeight: "500", mb: "1px" }}
          >
            {main.temp.toFixed(1)}&deg;C
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "16px", fontWeight: "500" }}
          >
            {weather[0].main}
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "16px", fontWeight: "500" }}
          >
            Pressure:{" "}
            <Box component="span" sx={{ ml: "auto" }}>
              {main.pressure}hPa
            </Box>
          </Typography>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: "20px",
        }}
      >
        <Box>
          <Typography
            component="p"
            sx={{ fontSize: "16px", fontWeight: "500", mb: "6px" }}
          >
            Feels like:{" "}
            <Box component="span" sx={{ ml: "auto" }}>
              {main.feels_like.toFixed(1)}&deg;C
            </Box>
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "16px", fontWeight: "500", mb: "6px" }}
          >
            High:{" "}
            <Box component="span" sx={{ ml: "auto" }}>
              {main.temp_max.toFixed(1)}&deg;C
            </Box>
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "16px", fontWeight: "500", mb: "6px" }}
          >
            Low:{" "}
            <Box component="span" sx={{ ml: "auto" }}>
              {main.temp_min.toFixed(1)}&deg;C
            </Box>
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "16px", fontWeight: "500" }}
          >
            Humidity:{" "}
            <Box component="span" sx={{ ml: "auto" }}>
              {main.humidity}%
            </Box>
          </Typography>
        </Box>
        <Box component="div">
          <Typography
            component="p"
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              textTransform: "uppercase",
              mb: "6px",
            }}
          >
            {weather[0].description}
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "16px", fontWeight: "500", mb: "6px" }}
          >
            Cloudiness:{" "}
            <Box component="span" sx={{ ml: "auto" }}>
              {clouds.all} %
            </Box>
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "16px", fontWeight: "500", mb: "6px" }}
          >
            Wind speed:{" "}
            <Box component="span" sx={{ ml: "auto" }}>
              {wind.speed.toFixed(1)} m/s
            </Box>
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "16px", fontWeight: "500", mb: "6px" }}
          >
            Wind gust:{" "}
            <Box component="span" sx={{ ml: "auto" }}>
              {wind.gust ? `${wind.gust.toFixed(1)} m/s` : "- m/s"}
            </Box>
          </Typography>
        </Box>
      </Box>
      <Button
        sx={{ position: "absolute", top: "10px", right: "10px" }}
        onClick={() => onClose()}
      >
        <CloseIcon />
      </Button>
      <TempBlock name={name} />
    </Modal>
  );
};

export default WeatherCardInfo;
