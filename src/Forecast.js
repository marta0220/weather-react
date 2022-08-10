import React from "react";
import "./Forecast.css";
export default function Parameters(props) {
  return (
    <div className="Forecast container">
      <div className="row">
        <div className="col-md-4">icon</div>
        <div className="col-md-4">{props.day}</div>
        <div className="col-md-4">temperature °C</div>
      </div>
    </div>
  );
}
