import React, { useState } from "react"; 
import "./WeatherTemperature.css";

export default function WeatherTemperarture(props) {
    const [unit, setUnit] = useState("fahrenheit");
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function converToFahrenheit(event) {
        event.prevent.Default();
        setUnit("fahrenheit");
    }

    if (unit === "fahrenheit") {
      return (
        <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">°F | 
        <a href="/" onClick={convertToCelsius}>°C</a></span>
        </span>
       );
    } else {
        let celsius = (props.fahrenheit - 32) * 5/9;
        return (
            <span className="WeatherTemperature">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="unit"><a href="/" onClick={converToFahrenheit}>
            °F
            </a> | 
        °C</span>
        </span>
        )
    }
 
}