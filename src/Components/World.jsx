import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WorldNews.css'; // Import your CSS file

const WorldNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorldNews = async () => {
      try {
        const apiKey = 'YOUR_API_KEY';
        const newsEndpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

        const response = await axios.get(newsEndpoint);
        setNewsData(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching world news:', error);
        setLoading(false);
      }
    };

    fetchWorldNews();
  }, []);

  return (
    <div className="world-news-container">
      <h1 className="world-news-title">World News</h1>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="news-list">
          {newsData.map((article, index) => (
            <div className="news-item" key={index}>
              <h2 className="news-title">{article.title}</h2>
              <p className="news-description">{article.description}</p>
              <p className="news-source">Source: {article.source.name}</p>
              <p className="news-date">Published At: {article.publishedAt}</p>
              {/* Add more article information as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorldNews;
