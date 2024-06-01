import React, { useState, useEffect } from "react";
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import cloudy from "../assets/Cloudy.svg";
import dotenv from "dotenv";
import { Stack, IconButton, Button } from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";

const weatherCodes = {
  0: "Unknown",
  1000: "Clear, Sunny",
  1100: "Mostly Clear",
  1101: "Partly Cloudy",
  1102: "Mostly Cloudy",
  1001: "Cloudy",
  2000: "Fog",
  2100: "Light Fog",
  4000: "Drizzle",
  4001: "Rain",
  4200: "Light Rain",
  4201: "Heavy Rain",
  5000: "Snow",
  5001: "Flurries",
  5100: "Light Snow",
  5101: "Heavy Snow",
  6000: "Freezing Drizzle",
  6001: "Freezing Rain",
  6200: "Light Freezing Rain",
  6201: "Heavy Freezing Rain",
  7000: "Ice Pellets",
  7101: "Heavy Ice Pellets",
  7102: "Light Ice Pellets",
  8000: "Thunderstorm",
};

function WeatherCard({ isCurrentLocation, city, setCurrentLocation }) {
  const [temperature, setTemperature] = useState(75);
  const [weatherCode, setWeatherCode] = useState("1000");

  useEffect(() => {
    const getWeather = async () => {
      console.log(`getting weather for ${city}`);
      const response = await fetch(
        `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${process.env.REACT_APP_TOMORROW_API_KEY}&units=imperial`
      );
      if (response.ok) {
        const data = await response.json();
        const { temperature: temp, weatherCode: wc } = data?.data?.values || {
          temp: 75,
          wc: 1000,
        };
        console.log({ temp, wc, data });
        setTemperature(Math.round(temp, 0));
        setWeatherCode(wc);
      }
    };
    getWeather();
  }, []);

  const weather = weatherCodes[weatherCode];
  const weatherUnderscored = weather.replaceAll(" ", "_");

  let src = `../assets/png/${weatherCode}${weatherUnderscored}_large.png`;
  // switch (forecast) {
  //   case "Sunny":
  //     src = sunny;
  //     break;
  //   case "Rainy":
  //     src = rainy;
  //     break;
  //   case "Cloudy":
  //     src = cloudy;
  //     break;
  //   default:
  //     src = sunny;
  //     break;
  // }

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
          <div className="show-on-hover">
            <IconButton onClick={() => setCurrentLocation(city)}>
              <AddLocationIcon />
            </IconButton>
          </div>
        </h3>
        <h5 className="card-text">{temperature}</h5>
        <h5 className="card-text">{weather}</h5>
      </div>
    </div>
  );
}

export default WeatherCard;

// Export the WeatherCard
