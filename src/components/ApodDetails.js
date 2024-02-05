import React from "react";
import "./ApodDetails.css";

export default function ApodDetails({ copyright, title, explanation }) {
  return (
    <div id="apod-details">
      <div className="authorAndTitle">
        {copyright ? <h2>{copyright}</h2> : ""}
        <h3>{title}</h3>
      </div>
      <div className="explanation">
        <p>{explanation}</p>
      </div>
    </div>
  );
}
