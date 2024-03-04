// src/api.js
import axios from 'axios';

const API_KEY = 'ea01ce62ea0dc6d721ccb889c984d07a'; // Replace with your actual API key

const api = axios.create({
  baseURL: 'http://api.openweathermap.org/', // Replace with your API base URL
  params: {
    apiKey: API_KEY,
  },
});

export default api;
