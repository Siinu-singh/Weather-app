import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LocationSearchingOutlinedIcon from "@mui/icons-material/LocationSearchingOutlined";
import WbSunnySharpIcon from "@mui/icons-material/WbSunnySharp";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useState } from "react";
import "./searchBox.css";

export default function SearchBox({updateWeatherInfo}) {
  let [city, setCity] = useState("");

  const Api_url = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "78e4cabd5aa4391d99aae3bf0bcf5e28";

  let getWeatherInfo = async () => {
    let response =await fetch(`${Api_url}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    // console.log(jsonResponse);
    let result = {
      city : city,
      temp : jsonResponse.main.temp,
      humidity : jsonResponse.main.humidity,
      temp_min : jsonResponse.main.temp_min,
      temp_max : jsonResponse.main.temp_max,
      pressure : jsonResponse.main.pressure,
      description : jsonResponse.weather[0].description,
      sunrise : jsonResponse.sys.sunrise,
      sunset : jsonResponse.sys.sunset
    }
    console.log(result);
    return result;
  };

  let handelChange = (e) => {
    // console.log(e.target.value);
    setCity(e.target.value);
  };

  let handelSubmit = async (e) => {
    console.log(city);
    e.preventDefault();
    setCity("");
   let newInfo = await getWeatherInfo();
   updateWeatherInfo(newInfo);
    // console.log(info);
  };
  return (
    <div className="search-box" component="span">
      <div className="weather-icon">
        <WbSunnySharpIcon style={{ fontSize: "3rem" }} className="Sunny" />
        <CloudRoundedIcon style={{ fontSize: "3rem" }} className="cloud" />
        <NightsStayIcon style={{ fontSize: "3rem" }} className="night" />
      </div>

      <h3>Search For Weather</h3>
      <form onSubmit={handelSubmit}>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          varient="filled"
          onChange={handelChange}
          value={city}
        />
        <br />
        <br />
        <Button
          variant="contained"
          startIcon={<LocationSearchingOutlinedIcon />}
          type="submit"
        >
          Search
        </Button>
      </form>
    </div>
  );
}
