
const BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";

export async function searchLocation(city) {
  const url = `${BASE_URL}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to search for this location.");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("Location not found. Please try another city.");
  }

  return data.results[0];
}
