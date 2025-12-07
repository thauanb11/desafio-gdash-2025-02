import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getWeatherByCity } from "@/services/weather";

export default function CitySearch() {
  const [city, setCity] = useState("");

  async function handleSearch() {
    if (!city) return;

    try {
      const data = await getWeatherByCity(city);
      console.log("Clima recebido:", data);
    } catch (err) {
      console.error("Erro ao buscar clima:", err);
    }
  }

  return (
    <div className="flex gap-2 p-4">
      <Input
        placeholder="Buscar clima por cidade..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button onClick={handleSearch}>Buscar</Button>
    </div>
  );
}
