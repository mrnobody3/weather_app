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
  onClear: () => void;
}

const QueryList: React.FC<IQueryList> = ({ data, onClear }) => {
  const dispatch = useAppDispatch();

  const onHandleAddItem = (name: string) => {
    dispatch(fetchWeatherByGeo(name));
    onClear();
  };
  return (
    <List
      sx={{
        width: "300px",
        position: "absolute",
        bgcolor: "gray",
        zIndex: "105",
        top: "44px",
        p: "5px 1px 5px 7px",
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
              onClick={() => onHandleAddItem(item.name)}
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
