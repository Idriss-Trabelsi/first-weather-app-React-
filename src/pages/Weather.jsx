/*import React from 'react';
import '../Style/Weather.css'

export default function Weather(){
    return(
        <div>
            <h1>Weather.pages</h1>
        </div>
    )
}*/
// Weather.jsx
import React, { useState } from 'react';
import '../Style/Weather.css';
import WeatherCard from '../components/WeatherCard';
import SearchBar from '../components/SearchBar';

const weatherData = [
  { city: 'Tunis', temperature: 18, icon: '/assets/some_clouds.png', condition: 'Nuageux' },
  { city: 'Bizerte', temperature: 22, icon: '/assets/some_sun.png', condition: 'Ensoleillé' },
  { city: 'Sousse', temperature: 25, icon: '/assets/some_rain.png', condition: 'Pluvieux' },
  { city: 'Gafsa', temperature: 16, icon: '/assets/some_sun.png', condition: 'Ensoleillé' },
  { city: 'Sfax', temperature: 20, icon: '/assets/some_clouds.png', condition: 'Nuageux' },
  { city: 'Djerba', temperature: 24, icon: '/assets/some_sun.png', condition: 'Ensoleillé' },
];

export default function Weather() {
  const [filteredData, setFilteredData] = useState(weatherData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (city) => {
    setSearchTerm(city);
    if (!city) {
      setFilteredData(weatherData);
    } else {
      const filtered = weatherData.filter(item =>
        item.city.toLowerCase().includes(city.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className="weather-page">
      <SearchBar onSearch={handleSearch} />
      
      <div className="weather-container">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <WeatherCard
              key={index}
              city={item.city}
              temperature={item.temperature}
              icon={item.icon}
              condition={item.condition}
            />
          ))
        ) : (
          <div className="no-results">
            Aucune ville trouvée pour "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
}
