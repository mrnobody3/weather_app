import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCityWeather } from "../../services/api/GetData";
import { ICurrentWeather } from "../../types/weather";

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
