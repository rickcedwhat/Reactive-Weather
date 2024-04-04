import React from "react";
import WeatherCard from "./WeatherCard";

const CurrentLocation = ({ city }) => {
  return <WeatherCard city={city} isCurrentLocation />;
};

export default CurrentLocation;
