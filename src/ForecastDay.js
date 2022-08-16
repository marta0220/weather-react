import React from "react";
export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }
  return (
    <div className="Forecast container">
      <div className="row">
        <div className="col-md-4 day">{day()}</div>
        <div className="col-md-4">
          <img
            src={`..//img/${props.data.weather[0].icon}.png`}
            alt={props.data.weather[0].description}
            width="40px"
            className="img-fluid "
          />
        </div>
        <div className="col-md-4 temperature">
          {Math.round(props.data.temp.max)}°
          <span className="text-muted">
            /{Math.round(props.data.temp.min)}°
          </span>
          C
        </div>
      </div>
    </div>
  );
}
