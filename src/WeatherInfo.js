import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="City"> {props.data.name} </div>
        <div className="Date">
          <FormattedDate date={props.data.date} />
        </div>

        <div className="Degrees">
          {props.data.temperature}°<span className="Units"> C l F</span>
        </div>
      </div>

      <div className="col-md-6">
        <div className="Icon">
          <img
            src={`..//img/${props.data.icon}.png`}
            alt={props.data.description}
            width="90px"
            className="img-fluid p-1"
          />
        </div>
      </div>

      <div className="Parameters row">
        <div className="col-md-6">
          Description:{" "}
          <span className="Value text-capitalize">
            {props.data.description}
          </span>
        </div>

        <div className="col-md-6">
          Windspeed: <span className="Value">{props.data.windSpeed}</span> km/h
        </div>

        <div className="col-md-6">
          Humidity: <span className="Value">{props.data.humidity}</span> %
        </div>

        <div className="col-md-6">
          Visibility: <span className="Value">{props.data.visibility}</span> km
        </div>
      </div>
    </div>
  );
}
