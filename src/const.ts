import type { CityData } from "./types/weather";

export const DEFAULT_CITIES: CityData[]= [
  {
    "city_id": 123456,
    "city_name": "Rio de Janeiro",
    "state_code": "25",
    "country_code": "BR",
    "country_full": "Brazil",
    lat: -22.9068,
    lon: -43.1729,
  }, 
  {
    "city_id": 888888,
    "city_name": "Beijing",
    "state_code": "25",
    "country_code": "CN",
    "country_full": "China",
    lat: 39.9075,
    lon: 116.3972,
  },
  {
    "city_id": 111111,
    "city_name": "Los Angeles",
    "state_code": "25",
    "country_code": "USA",
    "country_full": "USA",
    lat: 34.0522,
    lon: -118.2437,
  },
]
