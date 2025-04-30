import React, { useState, useEffect, useRef } from 'react';
import '../styles/CitySelector.css';

const CitySelector = ({ onCityChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const dropdownRef = useRef(null);
  
  const cities = [
    'All Cities', 'Mumbai', 'Delhi', 'Bangalore', 'Pune', 
    'Hyderabad', 'Chennai', 'Kolkata', 'Goa'
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsOpen(false);
    if (onCityChange) {
      onCityChange(city);
    }
  };

  return (
    <div className="city-selector" ref={dropdownRef}>
      <div 
        className="selected-city"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedCity}</span>
        <div className={`dropdown-arrow ${isOpen ? 'open' : ''}`}></div>
      </div>
      
      {isOpen && (
        <ul className="cities-dropdown">
          {cities.map((city) => (
            <li 
              key={city} 
              className={selectedCity === city ? 'active' : ''}
              onClick={() => handleCitySelect(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySelector;