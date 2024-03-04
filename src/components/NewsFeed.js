// NewsFeed.js

import React, { useState, useEffect } from 'react';
import fetchNews from '../services/newsService';
import './NewsFeed.css'; // Import CSS file for styling

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchNews(category);
      setArticles(data);
    };

    loadNews();
  }, [category]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className="news-feed">
      <h2>News Feed</h2>
      <div className="category-buttons">
        <button onClick={() => handleCategoryChange('general')}>General</button>
        <button onClick={() => handleCategoryChange('technology')}>Technology</button>
        <button onClick={() => handleCategoryChange('business')}>Business</button>
        {/* Add more category buttons as needed */}
      </div>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
