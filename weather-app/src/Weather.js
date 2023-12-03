// src/Weather.js
import React, { useState, useEffect } from 'react';
import './weather.css'; // Import the CSS file

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://prodapi.metweb.ie/agriculture/report');
        const data = await response.json();
        // Set the fetched data to the state
        setWeatherData(data.report.station);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Weather Data</h1>
      {/* Display fetched data here */}
      <div className="weather-cards">
        {weatherData &&
          weatherData.map((station, index) => (
            <div className="weather-card" key={index}>
              <h2>{station['@name']}</h2>
              <p>Temperature: {station.temp['#text']} {station.temp['@unit']}</p>
              <p>Rain: {station.rain['#text']} {station.rain['@unit']}</p>
              {/* Add more fields as needed */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Weather;
