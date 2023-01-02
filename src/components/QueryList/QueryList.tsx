import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { nanoid } from "nanoid";
import React from "react";
import { useAppDispatch } from "../../hooks/useReduxWithType";
import { fetchWeatherByGeo } from "../../redux/weather/operations";

interface IData {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

interface IQueryList {
  data: IData[];
}

const QueryList: React.FC<IQueryList> = ({ data }) => {
  const dispatch = useAppDispatch();

  return (
    <List
      sx={{
        width: "250px",
        position: "absolute",
        top: "57px",
        zIndex: "100",
        p: "5px",
        borderRadius: "0 0 20px 20px",
      }}
    >
      {data.map((item) => (
        <ListItem
          key={nanoid()}
          disableGutters
          secondaryAction={
            <IconButton
              aria-label="comment"
              onClick={() => dispatch(fetchWeatherByGeo(item.name))}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          }
        >
          <ListItemText primary={`${item.name} ${item.country}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default QueryList;
