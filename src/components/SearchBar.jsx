
import { useState } from "react";

function SearchBar({ onSearch, onLocationClick, loading }) {  const [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    if (city.trim() === "") {
      return;
    }
     onSearch(city);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a city please..."
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
      <button type="button" onClick={onLocationClick} disabled={loading}>
        Use My Location
      </button>
    </form>
  );
}
export default SearchBar;