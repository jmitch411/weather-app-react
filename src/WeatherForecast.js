import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse (response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);


    if (loaded) {
     return (
     <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <WeatherForecastDay data={forecast[0]} />
            </div>
              <div className="col">
                <WeatherForecastDay data={forecast[1]} />
            </div>
              <div className="col">
                <WeatherForecastDay data={forecast[2]} />
            </div>
              <div className="col">
                <WeatherForecastDay data={forecast[3]} />
            </div>
              <div className="col">
                <WeatherForecastDay data={forecast[4]} />
            </div>
        </div>
     </div>
   );
    
    } else {

    let apiKey = "d85813eb01435acb0769336d3a72ad2f";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
    
    axios.get(apiUrl).then(handleResponse);
    return null;
   }
}