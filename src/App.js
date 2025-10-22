import Header from "./components/Header"
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

import Home from "./pages/Home"
import Weather from "./pages/Weather"
import About from "./pages/About"

function App(){
  return(
    <Router>
    <div className="app">
      <Header />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/Weather" element = {<Weather />}/>
          <Route path="/About" element = {<About />}/>

        </Routes>
      </main>

    </div>
    </Router>
  )
}
export default App;

/*import Header from "./components/Header";
import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const dataWeather = [
  { city: "Tunis", temperature: "23", icon: "/assets/some_sun.png", condition: "Sun" },
  { city: "Nabeul", temperature: "20", icon: "/assets/some_rain.png", condition: "Rain" },
  { city: "Sousse", temperature: "25", icon: "/assets/some_sun.png", condition: "Sun" },
  { city: "Bizerte", temperature: "22", icon: "/assets/some_clouds.png", condition: "Clouds" },
  { city: "Sfax", temperature: "28", icon: "/assets/some_sun.png", condition: "Sun" },
  { city: "Djerba", temperature: "26", icon: "/assets/some_sun.png", condition: "Sun" },
  { city: "Monastir", temperature: "24", icon: "/assets/some_clouds.png", condition: "Clouds" },
  { city: "Kairouan", temperature: "27", icon: "/assets/some_sun.png", condition: "Sun" },
];

function App() {
  const [searchCity, setSearchCity] = useState("");
  const [filteredWeather, setFilteredWeather] = useState(dataWeather);

  const handleSearch = () => {
    if (searchCity.trim() === "") {
      setFilteredWeather(dataWeather);
    } else {
      const filtered = dataWeather.filter(weather =>
        weather.city.toLowerCase().includes(searchCity.toLowerCase())
      );
      setFilteredWeather(filtered);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <Header />
      <div className="search-container">
        <input
          type="text"
          placeholder="Entrez une ville"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          onKeyPress={handleKeyPress}
          className="search-input"
        />
        <button className="search-button" onClick={handleSearch}>
          OK
        </button>
      </div>
      <div className="weather-container">
        {filteredWeather.length > 0 ? (
          filteredWeather.map((weather, index) => (
            <WeatherCard 
              key={index}
              city={weather.city}
              temperature={weather.temperature}
              icon={weather.icon}
              condition={weather.condition}
            />
          ))
        ) : (
          <div className="no-results">
            Aucune ville trouvée pour "{searchCity}"
          </div>
        )}
      </div>
    </>
  );
}

export default App;*/