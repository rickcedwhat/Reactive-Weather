import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard.js";
import cities from "./data.js";
import Location from "./components/Location.js";
import Form from "./components/Form.js";
import { Stack } from "@mui/material";

function App() {
  const [location, setLocation] = useState(cities[0]);
  cities.sort((a, b) => a.city.localeCompare(b.city));
  return (
    <Stack spacing={2} direction="column" alignItems="center">
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <Form location={location} setLocation={setLocation} options={cities} />
      <div className="app">
        <Location data={cities} location={location} setLocation={setLocation} />
        {cities
          .filter(({ city }) => city !== location.city)
          .map((city) => (
            <WeatherCard key={city.city} data={city} />
          ))}
      </div>
    </Stack>
  );
}

export default App;
