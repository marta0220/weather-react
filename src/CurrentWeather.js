import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";
import FormattedDate from "./FormattedDate";
export default function CurrentWeather(props) {
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
        <div className="row">
          <div className="col-md-6">
            <div className="City"> {weather.name} </div>
            <div className="Date">
              <FormattedDate date={weather.date} />
            </div>
            <div className="Degrees">
              {weather.temperature}°<span className="Units"> C l F</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="Icon">
              <img
                src={`..//img/${weather.icon}.png`}
                alt={weather.description}
                width="90px"
                className="img-fluid p-1"
              />
            </div>
          </div>
        </div>
        <div className="Parameters row">
          <div className="col-md-6">
            Description:{" "}
            <span className="Value text-capitalize">{weather.description}</span>
          </div>
          <div className="col-md-6">
            Windspeed: <span className="Value">{weather.windSpeed}</span> km/h
          </div>
          <div className="col-md-6">
            Humidity: <span className="Value">{weather.humidity}</span> %
          </div>
          <div className="col-md-6">
            Visibility: <span className="Value">{weather.visibility}</span> km
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d873f8799b310a5282754959e9912176";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }
}
