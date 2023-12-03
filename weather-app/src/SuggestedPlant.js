import React, { useState, useEffect } from 'react';

const SuggestedPlant = () => {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];
  const currentSeason = seasons[0]; // Assuming it's Autumn for example purposes

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        // Choose plant_id range based on the season
        let minPlantId = 0;
        let maxPlantId = 0;

        if (currentSeason === 'Spring') {
          minPlantId = 1;
          maxPlantId = 8;
        } else if (currentSeason === 'Summer') {
          minPlantId = 9;
          maxPlantId = 18;
        } else if (currentSeason === 'Autumn') {
          minPlantId = 19;
          maxPlantId = 24;
        } else if (currentSeason === 'Winter') {
          minPlantId = 25;
          maxPlantId = 25;
        }

        // Generate a random plant_id within the specified range
        const randomPlantId = Math.floor(Math.random() * (maxPlantId - minPlantId + 1)) + minPlantId;

        // Now you have the random plant ID to fetch from the API
        const response = await fetch(`https://bmhnryodyk.execute-api.eu-west-1.amazonaws.com/v1/${randomPlantId}`);
        const data = await response.json();
        setSelectedPlant(data);
      } catch (error) {
        console.error('Error fetching plant data:', error);
      }
    };

    fetchPlant();
  }, [currentSeason]);

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
