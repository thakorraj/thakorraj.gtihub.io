import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';


const API_KEY='53d941e46af079b1011cc4a947609199';
function App() {

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  
  const handleInputChange= async (e) =>{
    e.preventDefault();
    let city=e.target.value;
    if(city!=""){
      setCity(e.target.value);
      const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
    }
    else{
      setCity('');
      setWeatherData(null);
    } 
  }


  return (
    <div className="App">
      <form>

        <select value={city} onChange={handleInputChange}>
          <option value=''>Please select the value</option>
          <option value='London'>London</option>
          <option value='New York'>New York</option>
          <option value='Toronto'>Toronto</option>
          <option value='Ottawa'>Ottawa</option>
          <option value='Montreal'>Montreal</option>
          <option value='Hamilton'>Hamilton</option>
          <option value='Paris'>Paris</option>
        </select>
      </form>

      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Max Temperature: {weatherData.main.temp_max}°C</p>
          <p>Min Temperature: {weatherData.main.temp_min}°C</p>
          <p>Wind Speed: {weatherData.wind.speed} km/h</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
