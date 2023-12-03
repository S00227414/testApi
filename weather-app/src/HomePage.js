import React from 'react';
import './App.css'; // Import your CSS file
import Weather from './Weather'; // Import the Weather component
import SuggestedPlant from './SuggestedPlant'; // Import the SuggestedPlant component file path


const Homepage = () => {
  // Assume the profile picture and logo are imported and assigned to appropriate variables

  // Placeholder data for suggested plant and sensor data
  
  const sensorData = 'Sensor data placeholder'; // Replace this with the sensor data

  return (
    <div className="homepage">
      <div className="header">
        Profile picture
         <img  alt="Profile" className="profile-pic" />

        {/* Logo */}
        <img  alt="Logo" className="logo" />
      </div>

      <div className="main-content">
        {/* Weather component */}
        <Weather />

       {/* Suggested plant component */}
      <section>
        <SuggestedPlant />
      </section>

        {/* Sensor data placeholder */}
        <div className="sensor-data">
          <h2>Sensor Data</h2>
          <p>{sensorData}</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
