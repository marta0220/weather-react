import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});
  function showWeather(response) {
    setWeather({
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      windSpeed: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      visibility: Math.round(response.data.visibility / 1000),
    });
    setLoaded(true);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    const apiKey = "d873f8799b310a5282754959e9912176";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  if (loaded) {
    return (
      <div className="CurrentWeather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Your city"
            autoComplete="off"
            className="input"
            onChange={changeCity}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
  }
}
