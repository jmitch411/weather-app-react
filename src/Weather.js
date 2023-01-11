import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
     
        <div className="Weather">
            <form>
            <div className="row">
                <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control"/>
                </div>
                <div className="col-3">
                <input type="Submit" value="Search" className="btn btn-primary w-100" />
                </div>
               </div>  
            </form>
           

            <h1>Miami</h1>
             <ul>
                <li>
                    Monday 10:31
                </li>
                <li>
                    Sunny
                </li>
             </ul>

               <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Weather Icon" />
                    73°F
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                        Precipitation: 1%
                    </li>
                     <li>
                        Humidity: 76%
                    </li>
                     <li>
                        Wind: 8 mph
                    </li>
                  </ul>
                </div>
               </div>
        </div>
    )
}