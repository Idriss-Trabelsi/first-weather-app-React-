// SearchBar.jsx
import React, { useState } from 'react';
import '../Style/Search.css';

export default function SearchBar({ onSearch }) {
  const [searchCity, setSearchCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchCity.trim()) {
      onSearch(searchCity.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Rechercher une ville..."
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          onKeyPress={handleKeyPress}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Rechercher
        </button>
      </form>
    </div>
  );
}