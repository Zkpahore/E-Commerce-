import React from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col mb-4 lg:mb-0">
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <div className="flex items-center mb-2">
            <FiMapPin className="mr-2" />
            <span className="text-sm">123 Street Name, City, Country</span>
          </div>
          <div className="flex items-center mb-2">
            <FiPhone className="mr-2" />
            <span className="text-sm">+1234567890</span>
          </div>
          <div className="flex items-center">
            <FiMail className="mr-2" />
            <span className="text-sm">info@example.com</span>
          </div>
        </div>
        <div className="flex flex-col mb-4 lg:mb-0">
          <h2 className="text-lg font-bold mb-2">Connect with Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="text-white hover:text-gray-400"><FaInstagram /></a>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold mb-2">Subscribe</h2>
          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 mb-2 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-4 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
