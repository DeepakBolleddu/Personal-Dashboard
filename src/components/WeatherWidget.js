// WeatherWidget.js

import React, { useState, useEffect } from 'react';
import fetchWeatherData from '../services/weatherService';
import './WeatherWidget.css'; // Import CSS file for styling

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('Sydney'); // Default location

  useEffect(() => {
    const loadWeatherData = async () => {
      try {
        const data = await fetchWeatherData(location);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    loadWeatherData();
  }, [location]);

  return (
    <div className="weather-widget">
      {weatherData ? (
        <div>
          <h2>Weather Widget</h2>
          <p>Location: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          {/* Add more weather information as needed */}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
