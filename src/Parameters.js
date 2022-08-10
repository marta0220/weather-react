import React from "react";
import "./Parameters.css";
export default function Parameters(props) {
  return (
    <div className="container Parameters">
      <div className="row">
        <div className="col-md-6">
          Description: <span className="Value">{props.description}</span>
        </div>
        <div className="col-md-6">
          Windspeed: <span className="Value">{props.windspeed}</span> km/h
        </div>
        <div className="col-md-6">
          Humidity: <span className="Value">{props.humidity}</span> %
        </div>
        <div className="col-md-6">
          Visibility: <span className="Value">{props.visibility}</span> km
        </div>
      </div>
    </div>
  );
}
