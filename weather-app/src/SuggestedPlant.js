import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const SuggestedPlant = () => {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [currentSeason, setCurrentSeason] = useState('');

  useEffect(() => {
    const determineCurrentSeason = () => {
      const date = new Date();
      const month = date.getMonth() + 1;
      let season;

      if (month >= 3 && month <= 5) {
        season = 'Spring';
      } else if (month >= 6 && month <= 8) {
        season = 'Summer';
      } else if (month >= 9 && month <= 11) {
        season = 'Autumn';
      } else {
        season = 'Winter';
      }

      setCurrentSeason(season);
    };

    determineCurrentSeason();
  }, []);

  useEffect(() => {
    const fetchPlantData = async () => {
      try {
        const response = await axios.get(`https://bmhnryodyk.execute-api.eu-west-1.amazonaws.com/v1/${generateRandomPlantId(currentSeason)}`);
        const responseBody = JSON.parse(response.data.body); // Parse the body string as JSON
        setSelectedPlant(responseBody);
      } catch (error) {
        console.error('Error fetching plant data:', error);
      }
    };

    fetchPlantData();
  }, [currentSeason]);

  const generateRandomPlantId = (season) => {
    let minId, maxId;
    if (season === 'Spring') {
      minId = 1;
      maxId = 8;
    } else if (season === 'Summer') {
      minId = 9;
      maxId = 18;
    } else if (season === 'Autumn') {
      minId = 19;
      maxId = 24;
    } else if (season === 'Winter') {
      minId = 25;
      maxId = 25;
    }

    return Math.floor(Math.random() * (maxId - minId + 1)) + minId;
  };

  return (
    <div>
      <h1>Suggested Plant for {currentSeason}</h1>
      {selectedPlant && (
        <div>
          <h2>{selectedPlant.name}</h2>
          <p>Description: {selectedPlant.description}</p>
          {/* Display other plant details as needed */}
        </div>
      )}
    </div>
  );
};

export default SuggestedPlant;
