import React, { useState } from "react";
export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("celsius");
  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }
  function showFarhenheit(event) {
    event.preventDefault();
    setUnits("farhenheit");
  }
  function convertToFarhenheit() {
    return Math.round(props.celsius * 1.8 + 32);
  }
  if (units === "celsius") {
    return (
      <div className="Degrees">
        {Math.round(props.celsius)}°
        <span className="Units">
          {" "}
          <a href="/" className="d-inline active">
            C
          </a>{" "}
          |{" "}
          <a href="/" onClick={showFarhenheit} className="d-inline">
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Degrees">
        {convertToFarhenheit()}°
        <span className="Units">
          {" "}
          <a href="/" onClick={showCelsius} className="d-inline ">
            C
          </a>{" "}
          l{" "}
          <a href="/" className="d-inline active">
            F
          </a>
        </span>
      </div>
    );
  }
}
