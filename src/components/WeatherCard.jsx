/*import React from "react";
import "../Style/Card.css"

export default function WeatherCard ({city,temperature,icon}){
    return (
        <div className='weather-card'>
        <h3>{city}</h3>
        <p> {temperature}</p>
        <img src={icon} alt="ceci est une icone"/>


        </div>
    )
}*/
import React from "react";
import "../Style/Card.css"

export default function WeatherCard ({city, temperature, icon, condition}){
    return (
        <div className='weather-card'>
            <h3>{city}</h3>
            <div className="temperature">{temperature}°C</div>
            <img src={icon} alt="Weather icon"/>
            <div className="condition">{condition}</div>
        </div>
    )
}