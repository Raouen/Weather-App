import { getWeatherDescription } from "../services/weatherUtils";

function Forecast({ daily }) {
  return (
    <div>
<h2 className="forecast-title">5-Day Forecast</h2>
        <div className="forecast-container">
        {daily.time.map((date, index) => {
          const weatherInfo = getWeatherDescription(
            daily.weather_code[index]
          );

          return (
            <div className="forecast-day" key={date}>
              <h3>
                {new Date(date).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </h3>
              <p>
                {weatherInfo.icon} {weatherInfo.description}
              </p>
              <p>Max: {daily.temperature_2m_max[index]}°C</p>
              <p>Min: {daily.temperature_2m_min[index]}°C</p>
              <p>
                Rain probability:{" "}
                {daily.precipitation_probability_max[index]}%
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;