// src/WeatherSearch.js
import React, { useState } from 'react';

const WeatherSearch = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'ac7e941a35e89453122ff41bd32ea045';

  const handleSearch = async (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (!city) {
        setError('Please enter a city name.');
        return;
      }

      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        if (!response.ok) {
          throw new Error('City not found');
        }
        const data = await response.json();
        setWeatherData({
          tempC: data.main.temp,
          tempF: (data.main.temp * 9/5) + 32,
          condition: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          icon: data.weather[0].icon,
        });
        setError('');
      } catch (err) {
        setError(err.message);
        setWeatherData(null);
      }
    }
  };

  return (
    <div className="weather-search">
      <h1>Medital Weather Search</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleSearch}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h2>{city}</h2>
          <p>Temperature: {weatherData.tempC} °C / {weatherData.tempF.toFixed(2)} °F</p>
          <p>Condition: {weatherData.condition}</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind Speed: {weatherData.windSpeed} m/s</p>
          <img src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`} alt="weather icon" />
        </div>
      )}
    </div>
  );
};

export default WeatherSearch;
