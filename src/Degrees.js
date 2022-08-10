import React from "react";
import "./Degrees.css";
export default function Degrees({ degrees }) {
  return (
    <div className="Degrees">
      {degrees}°<span className="Units"> C l F</span>
    </div>
  );
}
