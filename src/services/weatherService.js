
// src/services/weatherService.js
import axios from 'axios';

const API_KEY = 'ea01ce62ea0dc6d721ccb889c984d07a'; // Replace with your OpenWeatherMap API key

const fetchWeatherData = async (location) => {
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const params = {
    q: location,
    appid: API_KEY,
    units: 'metric', // You can specify units as per your preference (metric, imperial, etc.)
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export default fetchWeatherData;
