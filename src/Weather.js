import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        });
    }

    if (weatherData.ready) {
    return (
     
        <div className="Weather">
            <form>
            <div className="row">
                <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
                </div>
                <div className="col-3">
                <input type="Submit" value="Search" className="btn btn-primary w-100" />
                </div>
               </div>  
            </form>
           

            <h1>{weatherData.city}</h1>
             <ul>
                <li>
                    <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize">
                    {weatherData.description}
                </li>
             </ul>

               <div className="row mt-3">
                <div className="col-6">
                    <img src={weatherData.iconUrl} alt={weatherData.description} />
                    <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°F</span>
                </div>
                <div className="col-6">
                  <ul>
                     <li>
                        Humidity: {weatherData.humidity}%
                    </li>
                     <li>
                        Wind: {Math.round(weatherData.wind)} mph
                    </li>
                  </ul>
                </div>
               </div>
        </div>
    );
  } else {
    let apiKey = "d85813eb01435acb0769336d3a72ad2f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}