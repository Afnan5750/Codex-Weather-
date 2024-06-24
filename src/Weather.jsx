import React from 'react';

const Weather = ({ weather }) => {
  return (
    <div className="weather-info">
      <h2>{weather.name}</h2>
      <p><i className="fas fa-thermometer-half fa-lg"></i><span className="weather-text"> Temperature: </span>{weather.main.temp}°C</p>
      <p><i className="fas fa-cloud fa-lg"></i> <span className="weather-text">Weather:</span> {weather.weather[0].description}</p>
      <p><i className="fas fa-tint fa-lg"></i><span className="weather-text"> Humidity: </span>{weather.main.humidity}%</p>
      <p><i className="fas fa-wind fa-lg"></i><span className="weather-text"> Wind Speed:</span> {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
