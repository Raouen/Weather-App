
import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Forecast from "./components/Forecast";
import About from "./components/About";
import { searchLocation } from "./services/geocodingService";
import { getWeather } from "./services/weatherService";
import { getWeatherDescription } from "./services/weatherUtils";
function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const currentWeather = weather
    ? getWeatherDescription(weather.current.weather_code)
    : null;
async function handleSearch(city) {
  setLoading(true);
  setError("");
  setWeather(null);
  try {
    const parts = city.split(",").map((value) => value.trim());

    const latitude = Number(parts[0]);
    const longitude = Number(parts[1]);

    const isCoordinates =
      parts.length === 2 &&
      parts[0] !== "" &&
      parts[1] !== "" &&
      Number.isFinite(latitude) &&
      Number.isFinite(longitude) &&
      latitude >= -90 &&
      latitude <= 90 &&
      longitude >= -180 &&
      longitude <= 180;

    let weatherData;
    let locationData;
    if (isCoordinates) {
      weatherData = await getWeather(latitude, longitude);
      locationData = {
        name: `${latitude}, ${longitude}`,
        country: "",
      };
    } else {
      locationData = await searchLocation(city);
      weatherData = await getWeather(
        locationData.latitude,
        locationData.longitude
      );
    }

    setLocation(locationData);
    setWeather(weatherData);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
}
  function handleLocationClick() {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    setLoading(true);
    setError("");
    setWeather(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const weatherData = await getWeather(latitude, longitude);
          setLocation({
            name: "Your Current Location",
            country: "",
          });
          setWeather(weatherData);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError(
          "Unable to access your location. Please allow location access."
        );
        setLoading(false);
      }
    );
  }
  return (
    <>
      <main className="app">
        <header className="app-header">
          <h1>Weather App</h1>
          <p>Check the weather anywhere in the world.</p>
        </header>
        <SearchBar
          onSearch={handleSearch}
          onLocationClick={handleLocationClick}
          loading={loading}
        />
        {loading && <p>Loading weather...</p>}
        {error && <p>{error}</p>}
        {weather && location && (
          <div className="weather-info">
            <h2>
              {location.name}
              {location.country ? `, ${location.country}` : ""}
            </h2>
            <h1 className="temperature">
              {weather.current.temperature_2m}°C
            </h1>
            <p className="weather-condition">
              {currentWeather.icon} {currentWeather.description}
            </p>
            <p>
              Feels like: {weather.current.apparent_temperature}°C
            </p>
            <p>
              Humidity: {weather.current.relative_humidity_2m}%
            </p>
            <p>
              Wind speed: {weather.current.wind_speed_10m} km/h
            </p>
            <Forecast daily={weather.daily} />
          </div>
        )}
      </main>
      <About />
    </>
  );
}
export default App;
