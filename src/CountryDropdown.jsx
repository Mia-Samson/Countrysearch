import React, { useState } from "react";
import "./CountryDropdown.css";

export default function CountryDropdown() {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Argentina",
    "Australia",
    "Austria",
    "Bangladesh",
    "Belgium",
    "Bhutan",
    "Bolivia",
    "Brazil",
    "Bulgaria",
    "Cambodia",
    "Canada",
    "Chile",
    "China",
    "Colombia",
    "Croatia",
    "Cuba",
    "Czech Republic",
    "Denmark",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "Estonia",
    "Ethiopia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Japan",
    "Jordan",
    "Kenya",
    "Kuwait",
    "Latvia",
    "Lebanon",
    "Lithuania",
    "Luxembourg",
    "Malaysia",
    "Mexico",
    "Morocco",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nigeria",
    "Norway",
    "Pakistan",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
  ];

  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().startsWith(query.toLowerCase()),
  );

  const handleSelect = (country) => {
    setQuery(country);
    setShowList(false);
  };

  return (
    <div className="dropdown-container">
      <input
        type="text"
        placeholder="Type a country..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowList(true);
        }}
        onFocus={() => setShowList(true)}
        className="dropdown-input"
      />
      {showList && query && (
        <ul className="dropdown-list">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <li
                key={index}
                onClick={() => handleSelect(country)}
                className="dropdown-item"
              >
                {country}
              </li>
            ))
          ) : (
            <li className="dropdown-item">No matches</li>
          )}
        </ul>
      )}
    </div>
  );
}
