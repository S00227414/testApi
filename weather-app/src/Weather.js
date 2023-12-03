import React, { useState, useEffect } from 'react';
import './weather.css'; // Import the CSS file

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const desiredStation = 'Gurteen'; // Change this variable as needed

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

  // Find the station with the desired name
  const selectedStation = weatherData?.find(station => station['@name'] === desiredStation);

  return (
    <div>
      <h1>Weather Data</h1>
      {/* Display fetched data for the desired station */}
      {selectedStation && (
        <div className="weather-card">
          <h2>{selectedStation['@name']}</h2>
          <p>Temperature: {selectedStation.temp['#text']} {selectedStation.temp['@unit']}</p>
          <p>Rain: {selectedStation.rain['#text']} {selectedStation.rain['@unit']}</p>
          <p>Sunshine: {selectedStation.sun ? selectedStation.sun['@units'] : 'N/A'}</p>
          <p>Soil Temperature: {selectedStation.soil['#text']} {selectedStation.soil['@units']}</p>
          <p>Wind Speed: {selectedStation.wind['#text']} {selectedStation.wind['@units']}</p>
          <p>Radiation: {selectedStation.radiation['#text']} {selectedStation.radiation['@units']}</p>
          {/* Display other fields as needed */}
        </div>
      )}
    </div>
  );
};

export default Weather;

