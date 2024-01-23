import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Weather = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleGetWeather = () => {
    if (!cityName) {
      alert("Please enter a city name");
      return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6bcf6c9630948de1fc78a46cd3afc611`)
      .then(response => response.json())
      .then(data => {
        console.log(data.weather[0].description);
        setWeatherData({
          description: data.weather[0].description,
          temperature: (data.main.temp - 273.15).toFixed(2)
        });
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('City not found. Please enter a valid city name.');
      });
  };

  return (
    <div id="background" style={{ backgroundImage: "url('https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundSize: 'cover', height: '100vh', position: 'relative' }}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8" id="content" style={{ background: 'rgba(255, 255, 255, 0.7)', padding: '20px', borderRadius: '10px', marginTop: '50px', color: '#333' }}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter city name"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-primary" onClick={handleGetWeather}>
                  Check Weather
                </button>
              </div>
            </div>
            {weatherData && (
              <div id="weatherOutput" style={{ marginTop: '20px' }}>
                <h1>Weather Information</h1>
                <h3>Description: {weatherData.description}</h3>
                <h5>Temperature: {weatherData.temperature}°C</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
