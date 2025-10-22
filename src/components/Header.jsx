/*import React from 'react';
import '../Style/Header.css'; 
export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">My weather app</h1>
      <h2 className="header-date">{new Date().toLocaleDateString()}</h2>
    
    </header>
  );
}*/
import React from 'react';
import '../Style/Header.css'; 

export default function Header() {
  const formatFrenchDate = () => {
    return new Date().toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <header className="header">
      <h1 className="header-title">My Weather App</h1>
      <h2 className="header-date">{formatFrenchDate()}</h2>
    </header>
  );
}



