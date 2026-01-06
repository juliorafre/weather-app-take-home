import type { OneCallResponse } from "../types/weather";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/3.0/onecall";
const ICON_URL = "https://openweathermap.org/img/wn/";

type GetCurrentWeatherByCityProps = {
  lat: number;
  lon: number;
}

export const getCurrentWeatherByCity = async ({lat, lon}: GetCurrentWeatherByCityProps): Promise<OneCallResponse> => {
  const response = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${API_KEY}`);
  const result = await response.json();
  return result;
}

export const getWeatherIconUrl = (iconCode: string) => {
  return `${ICON_URL}${iconCode}@2x.png`;
}