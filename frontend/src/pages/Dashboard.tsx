import { useEffect, useState } from "react";
import { api } from "../services/api";
import CitySearch from "../components/CitySearch";
import WeatherCard from "../components/WeatherCard";
import InsightsCard from "../components/InsightsCard";

export default function Dashboard() {
  const [weather, setWeather] = useState(null);
  const [insights, setInsights] = useState("");

  async function fetchWeather(city: string) {
    const token = localStorage.getItem("token");

    const res = await api.get(`/weather?city=${city}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setWeather(res.data.weather);

    const resInsights = await api.get(`/weather/insights`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setInsights(resInsights.data.insights);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard Climático</h1>

      <CitySearch onSearch={fetchWeather} />

      {weather && <WeatherCard weather={weather} />}

      {insights && <InsightsCard text={insights} />}
    </div>
  );
}
