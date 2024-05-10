import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Navbar from './Navbar';
// Import your no news image

const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  // Assuming you have a state or function to get user information
  const [userFirstName, setUserFirstName] = useState('');

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const apiKey = '0ec0a35220114812be46cb9660a19291';
        const newsEndpoint =
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;

        const response = await axios.get(newsEndpoint);
        setNewsData(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news data:', error);
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredNewsData = newsData.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Assuming you have a function or state to get user information
  // This function or state should set the user's first name
  // when the user logs in
  // Here, setUserFirstName sets the user's first name
  // You need to replace this with your actual implementation
  useEffect(() => {
    // Example: setUserFirstName(getUserFirstName());
    setUserFirstName('John'); // Example: Set the user's first name
  }, []);

  return (
    <>
      <Navbar userFirstName={userFirstName} />
      <div className="news-container">
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search News..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="auth-buttons">
          <Link to="/login" className="auth-button">
            <FaSignInAlt /> Login
          </Link>
          <Link to="/signup" className="auth-button">
            <FaUserPlus /> Signup
          </Link>
        </div>
        <div className="news-header">
          <h2 className="section-title">Latest News Headlines</h2>
        </div>
        <div className="news-list-container">
          {loading ? (
            <div>Loading...</div>
          ) : filteredNewsData.length === 0 ? (
            <div className="no-news-container">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlulR9wZPH3WmgJT6g0qaNPNn-82_LIpZ97nYQuv7sHw&s" alt="No news found" className="no-news-image" />
              <p className="no-news-text">No news found</p>
            </div>
          ) : (
            <div className="news-list">
              {filteredNewsData.map((article, index) => (
                <div className="news-item" key={index}>
                  <h3 className="news-title">{article.title}</h3>
                  <p className="news-description">{article.description}</p>
                  <p className="news-source">Source: {article.source.name}</p>
                  <p className="news-date">
                    Published At: {article.publishedAt}
                  </p>
                  {/* Add more article information as needed */}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsComponent;
