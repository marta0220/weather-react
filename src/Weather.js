import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  function showWeather(response) {
    setWeather({
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      windSpeed: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      visibility: response.data.visibility / 1000,
    });

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="CurrentWeather">
        <form>
          <input
            type="search"
            placeholder="Your city"
            autoFocus
            autoComplete="off"
            className="input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    const apiKey = "d873f8799b310a5282754959e9912176";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }
}
