import React from "react";
import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Weather defaultCity="London" />
          </div>
          <div className="col-md-6">
            <Forecast day="Monday" />
          </div>
        </div>
      </div>
    </div>
  );
}
