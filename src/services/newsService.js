// src/services/newsService.js
import axios from 'axios';

const API_KEY = '29e02e8bb29040cca0284a4cea640a1d'; // Replace with your NewsAPI key
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

const fetchNews = async (category) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apiKey: API_KEY,
        category: category, // Filter by category if provided
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export default fetchNews;
