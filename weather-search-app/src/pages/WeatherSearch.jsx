import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const WeatherSearch = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState('');
  const [position, setPosition] = useState([0, 0]);

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || 'ac7e941a35e89453122ff41bd32ea045';
  // API key Punya saya untuk pengecekkan saja

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]);
        fetchWeatherData(latitude, longitude);
      },
      () => {
        setError('Unable to retrieve your location');
      }
    );
  }, []);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      return {
        city: data.name,
        tempC: data.main.temp,
        tempF: (data.main.temp * 9/5) + 32,
        condition: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon,
        position: [data.coord.lat, data.coord.lon],
      };
    } catch (err) {
      setError(err.message);
      return null;
    }
  };

  const handleSearch = async (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (!city) {
        setError('Please enter a city name.');
        return;
      }

      const data = await fetchWeatherByCity(city);
      if (data) {
        setWeatherData((prevData) => [data, ...prevData]);
        setCity('');
      }
    }
  };

  const fetchWeatherByCity = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Location not found');
      }
      const data = await response.json();
      const weatherInfo = {
        city: data.name,
        tempC: data.main.temp,
        tempF: (data.main.temp * 9/5) + 32,
        condition: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon,
        position: [data.coord.lat, data.coord.lon],
      };
      setPosition(weatherInfo.position);
      return weatherInfo;
    } catch (err) {
      setError(err.message);
      return null;
    }
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        const data = await fetchWeatherData(lat, lng);
        if (data) {
          setWeatherData((prevData) => [data, ...prevData]);
          setPosition([lat, lng]);
          setCity('');
        }
      },
    });
    return null;
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
      <div style={{ marginTop: '20px'  }}>
        <MapContainer center={position} zoom={13} style={{ height: "300px", width: "100%", rounded: "10px", borderRadius: "10px"}}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">MaditelMap</a> contributors'
          />
          <Marker position={position} icon={L.divIcon({href: 'https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-down-arrow-icon-png-image_956433.jpg', className: 'marker', iconSize: [32, 32] })}>
            <Popup>{city || 'Your Location'}</Popup>
          </Marker>
          <MapClickHandler />
        </MapContainer>
      </div>
      
      <div className="weather-results" style={{ overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap', scrollBehavior: 'smooth', display: 'flex', gap: '20px' }}>
        {weatherData.map((data, index) => (
          <div className="weather-info card shadow" key={index} style={{ flex: '0 0 250px', padding: '15px' }}>
            <h2>{data.city}</h2>
            <img src={`http://openweathermap.org/img/wn/${data.icon}.png`} alt="weather icon" style={{ width: '50px', height: '50px' }} />
            <p>Temperature: {data.tempC} °C / {data.tempF.toFixed(2)} °F</p>
            <p>Condition: {data.condition}</p>
            <p>Humidity: {data.humidity}%</p>
            <p>Wind Speed: {data.windSpeed} m/s</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherSearch;
