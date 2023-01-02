import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCityWeather } from "../../services/api/GetData";
import { ICurrentWeather } from "../../types/weather";
import { RootState } from "../store";

export const fetchWeatherByGeo = createAsyncThunk<
  ICurrentWeather,
  string,
  { rejectValue: string }
>("weather/fetchWeatherByGeo", async (name, { rejectWithValue }) => {
  const response = await fetchCityWeather(name);
  if (!response) {
    return rejectWithValue("Server Error!");
  }

  return response.data;
});

export const updateCityWeather = createAsyncThunk<
  { data: ICurrentWeather; idx: number },
  { name: string; id: number },
  { rejectValue: string; state: RootState }
>("weather/updateCityWeather", async (props, { rejectWithValue, getState }) => {
  const response = await fetchCityWeather(props.name);
  const { weather } = getState();
  const idx = weather.entities.findIndex((item) => item.id === props.id);

  if (!response) {
    return rejectWithValue("Server Error!");
  }

  return { data: response.data, idx: idx };
});
