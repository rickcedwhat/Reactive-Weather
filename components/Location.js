import React from "react";
import WeatherCard from "./WeatherCard";

const Location = ({ data, location, setLocation }) => {
  const currentLocation = data.find(({ city }) => city === location.city);
  return <WeatherCard data={currentLocation} isCurrentLocation />;
};

export default Location;
