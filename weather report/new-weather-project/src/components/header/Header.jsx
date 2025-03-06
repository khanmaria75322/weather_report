import "./Header.css";
import { useState } from "react";

import Main from "../main/Main";

export default function Header() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city.trim()) {
      alert("please enter city name before pressing button !");
      return;
    }

    const apiKey = "2599bed34cf9412a8e3125312252702";

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error is there: ${response.status}`);
      }

      const data = await response.json();

      setWeather(data);
      setError(null);
    } catch (error) {
      console.error("Error in fetching the data!");
      setError(error);
      setWeather(null);
    }
  };

  return (
    <>
      <div className="header-div">
        <input
          type="text"
          placeholder="Enter the city name!"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="header-input"
        ></input>
        <button onClick={fetchWeather}  className="header-btn">Get weather !</button>
      </div>
      
      {!error && <Main weather={weather} error={error} />} 
     
    </>
  );
}
