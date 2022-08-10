import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form>
        <input
          type="search"
          placeholder="Your city"
          autoComplete="off"
          className="Input"
        />
        <input type="submit" value="Search" className="Search" />
      </form>
    </div>
  );
}
