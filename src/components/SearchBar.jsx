import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('USA');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue, selectedCountry);
    }
  };

  return (
    <form className="max-w-md mx-auto my-8" onSubmit={handleSubmit}>
      <div className="flex">
        <label 
          htmlFor="location-search" 
          className="sr-only"
        >
          Search for city or address
        </label>
        <div className="relative">
          <button
            type="button"
            onClick={toggleDropdown}
            className="flex-shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-gray-100 border border-gray-300 rounded-l-full hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-100"
          >
            {selectedCountry}
            <svg 
              className="w-2.5 h-2.5 ml-2" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 10 6"
            >
              <path 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-1">
              <ul className="py-2 text-sm text-gray-700">
                {['USA', 'Germany', 'Italy', 'China'].map((country) => (
                  <li key={country}>
                    <button
                      type="button"
                      onClick={() => handleCountrySelect(country)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {country}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="relative w-full">
          <input
            type="search"
            id="location-search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-r-full focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for city or address"
            required
          />
          <button 
            type="submit" 
            className="absolute top-0 right-0 h-full px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 rounded-r-full hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300"
          >
            <svg 
              className="w-4 h-4" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 20 20"
            >
              <path 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
