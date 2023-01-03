import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, CardMedia } from "@mui/material";
import Loader from "../Loader";
import useModal from "../../hooks/useModal";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxWithType";
import { updateCityWeather } from "../../redux/weather/operations";
import { removeItemById } from "../../redux/weather/weatherSlice";
import WeatherCardInfo from "./WeatherCardInfo";
import { ICurrentWeather } from "../../types/weather";
const WeatherCard: React.FC<ICurrentWeather> = (props) => {
  const { weather, main, name, wind, id } = props;
  const { isOpen, onOpen, onClose } = useModal();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.weather.loading);

  return (
    <>
      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <Box
          onClick={() => onOpen()}
          sx={{
            width: "300px",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#c9e2f6",
              p: "30px 20px 20px",
            }}
          >
            <CardMedia
              src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
              component="img"
              sx={{ width: "100px", mr: "20px" }}
            />
            <Box component="div">
              <Typography component="p">{weather[0].main}</Typography>
              <Typography component="p" sx={{ fontWeight: "medium" }}>
                {Math.round(main.temp)}&deg;C
              </Typography>
              <Typography
                component="h3"
                sx={{ fontWeight: "bold", fontSize: "24px" }}
              >
                {name}
              </Typography>
            </Box>
          </Box>
          <Box component="div" sx={{ p: "20px", bgcolor: "black" }}>
            <Typography
              component="p"
              sx={{
                color: "white",
                width: "200px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Wind:
              <Box component="span" sx={{ width: "80px" }}>
                {wind.speed.toFixed(1)} m/s
              </Box>
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "white",
                width: "200px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Temp:
              <Box component="span" sx={{ width: "80px" }}>
                {Math.round(main.temp)}&deg;C
              </Box>
            </Typography>
          </Box>
          <Button
            sx={{
              position: "absolute",
              top: "10px",
              left: "10px",
              zIndex: "101",
            }}
            onClick={() => dispatch(removeItemById(id))}
          >
            <DeleteIcon />
          </Button>
          <Button
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: "101",
            }}
            onClick={(e) => {
              dispatch(updateCityWeather({ name: name, id: id }));
              e.stopPropagation();
            }}
          >
            <UpdateIcon />
          </Button>
        </Box>
      </Box>
      {isOpen && <WeatherCardInfo onClose={onClose} props={props} />}
      {loading && <Loader />}
    </>
  );
};

export default WeatherCard;
