import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchHourlyWeather } from "../../services/api/GetData";
import { IHoursData } from "../../types/weather";
import { XLine, YLine } from "./TempBlock.styled";

interface ITempBlock {
  name: string;
}

const TempBlock: React.FC<ITempBlock> = ({ name }) => {
  const [hoursData, setHoursData] = useState<IHoursData>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error | string>(null);

  useEffect(() => {
    const getData = async () => {
      setError(null);
      try {
        setIsLoading(true);
        const data = await fetchHourlyWeather(name);
        setHoursData(data);
      } catch (e: unknown) {
        if (typeof e === "string") {
          setError(e.toUpperCase());
        } else if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const temps = hoursData
    ? hoursData.list.map((item, index) => {
        if (index > 10) return;
        return (
          <Box
            key={item.dt_txt}
            component="span"
            sx={{
              position: "absolute",
              width: "45px",
              border: "1px solid black",
              left: `${index * 50}px`,
              top: `calc(50% + ${-item.main.temp * 2}px)`,
              transform: "translateY(-50%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "white",
            }}
          >
            {Math.round(item.main.temp) > 0
              ? `+${Math.round(item.main.temp)}`
              : Math.round(item.main.temp)}
          </Box>
        );
      })
    : null;
  const times = hoursData
    ? hoursData.list.map((item, index) => {
        if (index > 10) return;
        return (
          <Box
            component="span"
            key={item.dt_txt}
            sx={{
              width: "45px",
              left: `${index * 50}px`,
              position: "absolute",
              top: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "12px",
              color: "gray",
            }}
          >
            {item.dt_txt
              .split(" ")
              .reverse()[0]
              .split(":")
              .slice(0, 2)
              .join(":")}
          </Box>
        );
      })
    : null;

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        height: "210px",
        position: "relative",
        p: "5px",
      }}
    >
      {isLoading && <CircularProgress />}
      {error && <div>Whoops...Something wrong</div>}
      <YLine />
      <XLine />
      {times}
      {temps}
    </Box>
  );
};

export default TempBlock;
