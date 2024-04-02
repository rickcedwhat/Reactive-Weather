import React from "react";
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import cloudy from "../assets/Cloudy.svg";

function WeatherCard({
  data: { city, temperature, forecast },
  isCurrentLocation,
}) {
  let src;
  switch (forecast) {
    case "Sunny":
      src = sunny;
      break;
    case "Rainy":
      src = rainy;
      break;
    case "Cloudy":
      src = cloudy;
      break;
    default:
      src = sunny;
      break;
  }

  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={src}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">
          {city}
          {isCurrentLocation ? " (Current Location)" : ""}
        </h3>
        <h5 className="card-text">{temperature}</h5>
        <h5 className="card-text">{forecast}</h5>
      </div>
    </div>
  );
}

export default WeatherCard;

// Export the WeatherCard
