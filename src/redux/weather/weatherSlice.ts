import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrentWeather } from "../../types/weather";
import { fetchWeatherByGeo } from "./operations";

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

// Then, handle actions in your reducers:
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
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
  },
});

export const weatherReducer = weatherSlice.reducer;
