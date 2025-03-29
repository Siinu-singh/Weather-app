import "./App.css";
import SearchBox from "./searchBox";

import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherInfo() {
    const[weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 25,
        humidity: 60,
        temp_min: 20,
        temp_max: 30,
        pressure: 1010,
        description: "Clear sky",
        sunset: 1670000000,
    });

    let updateWeatherInfo = async (result) => {
        setWeatherInfo(result); 
    }
  return (
    <>
    <h2>Weather App By <i>Suraj Kumar</i></h2>
      <SearchBox updateWeatherInfo={updateWeatherInfo}/>
      <br />
      <InfoBox info={weatherInfo}/>
    </>
  );
}
