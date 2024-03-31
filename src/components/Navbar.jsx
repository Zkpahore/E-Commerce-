import React, { useState } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { FcSearch } from "react-icons/fc";
const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  // const [menu, setMenu] = useState(false);
  // const ShowMenu = () => {
  // setMenu(!menu)
  // }

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm); // Call onSearch function passed from App component
  };

  return (
    <>
   
    <nav className=' bg-gray-700 py-2 text-white sm:hidden lg:hidden md:hidden'>
    <ul className="flex text-center space-x-3 justify-center">
        <li><a href="#" className="hover:text-blue-400">Home</a></li>
        <li><a href="#" className="hover:text-blue-400">Pages</a></li>
        <li><a href="#" className="hover:text-blue-400">Products</a></li>
        <li><a href="#" className="hover:text-blue-400">Blog</a></li>
        <li><a href="#" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
    
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <ul className="lg:flex md:flex sm:flex hidden">
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
          className="border border-gray-700 px-1 rounded-lg focus:outline-none mr-2 text-black flex"
        />
        <button 
          onClick={handleSearch} 
          className="bg-blue-700 hover:bg-blue-600 active:bg-blue-500 text-white px-2 py-2 rounded-md focus:outline-none flex"
        >
         <FcSearch className='text-2xl'/>
        </button>
      </div>
      {/* <div className='flex'>
      <span onClick={ShowMenu} className='mr-2 flex'><RiMenu3Fill className='text-2xl'/></span>
      </div> */}
    </nav>

    </>
  );
};

export default Navbar;
