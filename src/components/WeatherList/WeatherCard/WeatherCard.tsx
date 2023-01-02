import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, CardMedia } from "@mui/material";
import { rain } from "../../../assets/images";
import Loader from "../../../helpers/Loader";
import useModal from "../../../hooks/useModal";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useReduxWithType";
import { updateCityWeather } from "../../../redux/weather/operations";
import { removeItemById } from "../../../redux/weather/weatherSlice";
import WeatherCardInfo from "./WeatherCardInfo";
import { ICurrentWeather } from "../../../types/weather";
const WeatherCard: React.FC<ICurrentWeather> = ({
  weather,
  main,
  name,
  wind,
  id,
}) => {
  const { isOpen, toggle } = useModal();
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
          onClick={() => toggle()}
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
          <Box component="div" sx={{ p: "20px", bgcolor: "black" }}>
            <Typography component="p" sx={{ color: "white" }}>
              Wind:
              <Box component="span">{wind.speed.toFixed(1)} m/s</Box>
            </Typography>
            <Typography component="p" sx={{ color: "white" }}>
              Temp:
              <Box component="span">{Math.round(main.temp)}&deg;</Box>
            </Typography>
          </Box>
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
          onClick={() => dispatch(updateCityWeather({ name: name, id: id }))}
        >
          <UpdateIcon />
        </Button>
      </Box>
      {isOpen && <WeatherCardInfo onClose={toggle} />}
      {loading && <Loader />}
    </>
  );
};

export default WeatherCard;
