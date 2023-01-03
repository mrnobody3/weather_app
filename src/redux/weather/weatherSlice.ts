import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isError } from "../../helpers/getError";
import { ICurrentWeather } from "../../types/weather";
import { fetchWeatherByGeo, updateCityWeather } from "./operations";

interface UsersState {
  entities: ICurrentWeather[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  entities: [],
  loading: false,
  error: null,
} as UsersState;

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    removeItemById: (state, action: PayloadAction<number>) => {
      state.entities = state.entities.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherByGeo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchWeatherByGeo.fulfilled,
      (state, action: PayloadAction<ICurrentWeather>) => {
        state.entities.push(action.payload);
        state.loading = false;
      },
    );
    builder.addCase(updateCityWeather.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      updateCityWeather.fulfilled,
      (
        state,
        action: PayloadAction<{ data: ICurrentWeather; idx: number }>,
      ) => {
        state.entities.splice(action.payload.idx, 1, action.payload.data);
        state.loading = false;
      },
    );
    builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { removeItemById } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
