import axios from "axios";

export async function getWeatherByCity(city) {
  const response = await axios.get(
    `http://localhost:3001/weather/city/${city}`
  );
  return response.data;
}
