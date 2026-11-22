export function getWeatherDescription(code) {
  if (code === 0) {
    return { description: "Clear sky", icon: "☀️" };
  }

  if (code === 1 || code === 2) {
    return { description: "Mainly clear", icon: "🌤️" };
  }

  if (code === 3) {
    return { description: "Overcast", icon: "☁️" };
  }

  if (code >= 45 && code <= 48) {
    return { description: "Foggy", icon: "🌫️" };
  }

  if (code >= 51 && code <= 67) {
    return { description: "Rain", icon: "🌧️" };
  }

  if (code >= 71 && code <= 77) {
    return { description: "Snow", icon: "❄️" };
  }

  if (code >= 80 && code <= 82) {
    return { description: "Rain showers", icon: "🌦️" };
  }

  if (code >= 85 && code <= 86) {
    return { description: "Snow showers", icon: "🌨️" };
  }

  if (code >= 95) {
    return { description: "Thunderstorm", icon: "⛈️" };
  }

  return { description: "Unknown", icon: "🌡️" };
}