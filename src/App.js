import React from "react";
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Miami" />
      <footer>
        This project was coded by <a href="http://jasmin-mitchell.com" target="_blank" rel="noreferrer">Jasmin Mitchell</a> and is{" "}
      <a href="https://github.com/jmitch411/weather-app-react" target="_blank" rel="noreferrer"> open-sourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}

