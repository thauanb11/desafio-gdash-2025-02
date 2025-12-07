export default function WeatherCard({ weather }: any) {
  return (
    <div className="p-4 bg-gray-800 rounded-xl w-80 mb-4">
      <h2 className="text-lg font-bold mb-3">Clima Atual</h2>
      <p>Temperatura: {weather.temperature}°C</p>
      <p>Vento: {weather.windspeed} km/h</p>
      <p>Tempo: {weather.time}</p>
      <p>Lat: {weather.lat}</p>
      <p>Lon: {weather.lon}</p>
    </div>
  );
}
