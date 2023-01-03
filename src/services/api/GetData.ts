import axios from "axios";
const API_KEY = "5b85ff149378c97bcef5ac8e6550eb95";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org",
});

export const fetchCountryList = async (q: string | undefined) => {
  const { data } = await instance.get(`/geo/1.0/direct`, {
    params: {
      q: q,
      limit: "5",
      units: "metric",
      appid: API_KEY,
    },
  });
  return data;
};

export const fetchCityWeather = async (name: string) => {
  return await instance.get("/data/2.5/weather", {
    params: {
      q: name,
      appid: API_KEY,
      units: "metric",
    },
  });
};

export const fetchHourlyWeather = async (name: string) => {
  const { data } = await instance.get("/data/2.5/forecast", {
    params: {
      q: name,
      appid: API_KEY,
      units: "metric",
    },
  });
  return data;
};
