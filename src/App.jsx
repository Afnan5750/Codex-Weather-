import React, { useState } from 'react';
import axios from 'axios';
import Weather from './Weather';
import './App.css'; 

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = 'f00c38e0279b7bc85480c3fe775d518c'; 

  const getWeather = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeather(response.data);
      setError('');
    } catch (err) {
      setWeather(null);
      setError('City not found');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      getWeather(city);
    }
  };

  return (
    <div className="container">
      <h1 className="app-title">Weather Checker</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button"> Get Weather </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {weather && <Weather weather={weather} />}
    </div>
  );
};

export default App;
