import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard.js";
import data from "./data.js";
import CurrentLocation from "./components/CurrentLocation.js";
import Form from "./components/Form.js";
import { Stack, Button, TextField } from "@mui/material";

function App() {
  const cities = data
    .map(({ city }) => city)
    .sort((a, b) => a.localeCompare(b));
  const [allCities, setAllCities] = useState(cities);
  const [location, setLocation] = useState(cities[0]);
  const [newCity, setNewCity] = useState("");

  const onChange = (e) => {
    setNewCity(e.target.value);
  };

  const onClick = () => {
    setAllCities([...allCities, newCity]);
    setNewCity("");
    setLocation(newCity);
  };

  return (
    <Stack spacing={2} direction="column" alignItems="center">
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      {/* <Form location={location} setLocation={setLocation} options={cities} /> */}
      <Stack spacing={2} direction="row" alignItems="center">
        <TextField
          label="City Name"
          value={newCity}
          onChange={onChange}
          variant="outlined"
        />
        <Button onClick={onClick}>Search</Button>
      </Stack>
      <div className="app">
        <CurrentLocation city={location} />
        {cities.map((city) => {
          if (city === location) {
            return null;
          }
          return (
            <WeatherCard
              key={city.city}
              city={city}
              setCurrentLocation={setLocation}
            />
          );
        })}
      </div>
    </Stack>
  );
}

export default App;
