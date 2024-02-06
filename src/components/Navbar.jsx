import React, { useState } from 'react';
import productsData from '../Products.json';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <ul className="flex">
        <li className="mr-4"><a href="#" className="hover:text-gray-400">Home</a></li>
        <li className="mr-4"><a href="#" className="hover:text-gray-400">Pages</a></li>
        <li className="mr-4"><a href="#" className="hover:text-gray-400">Products</a></li>
        <li className="mr-4"><a href="#" className="hover:text-gray-400">Blog</a></li>
        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
      </ul>
      <div className="flex">
        <input 
          type="text" 
          placeholder="Search products" 
          value={searchTerm} 
          onChange={handleChange} 
          className="border border-gray-700 px-2 py-1 rounded-md focus:outline-none mr-2 text-black"
        />
        <button 
          onClick={handleSearch} 
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md focus:outline-none"
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
