# Weather App

A responsive weather application developed using React and JavaScript as part of the Product Manager Accelerator (PMA) Technical Assessment.

## Features

- Search for cities and postal codes.
- Search locations using latitude and longitude coordinates.
- Display current weather conditions.
- Show temperature, feels-like temperature, humidity, and wind speed.
- Get weather information using the device's current location.
- Display a five-day weather forecast.
- Handle invalid searches and geolocation errors.
- Responsive interface for desktop and mobile devices.

## Technologies Used

- React
- JavaScript
- CSS
- Vite
- Open-Meteo Weather API
- Open-Meteo Geocoding API
- Browser Geolocation API

## APIs

This project uses the following Open-Meteo services:

- [Weather Forecast API](https://open-meteo.com/en/docs)
- [Geocoding API](https://open-meteo.com/en/docs/geocoding-api)

No API key is required.

## Installation and Setup

Make sure you have Node.js and npm installed.

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## Project Structure

```text
weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Forecast.jsx
│   │   └── SearchBar.jsx
│   ├── services/
│   │   ├── geocodingService.js
│   │   ├── weatherService.js
│   │   └── weatherUtils.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── package-lock.json
```

## Author

Raouen Saoudi

Developed for the Product Manager Accelerator Technical Assessment.
**Raouen Saoudi**

Developed for the Product Manager Accelerator Technical Assessment.
