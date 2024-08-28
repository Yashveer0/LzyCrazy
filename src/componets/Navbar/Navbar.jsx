import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Nav_assets/Logo.png';
import Home from './Nav_assets/Home_icon.png';
import Market from './Nav_assets/Market_icon.png';
import Post from './Nav_assets/Post_icon.png';
import Response from './Nav_assets/Response_icon.png';
import Setting from './Nav_assets/Setting_icon.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white  fixed top-0 w-full z-50">
      <div className="max-w-6xl ml-2 px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0 w-3/5">
            <img src={Logo} alt="LzyCrazy" className="h-10" />
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>


          </div>

          {/* Navbar Links */}
          <div className={`md:flex items-center justify-end w-full ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
            <ul className={`flex ${isOpen ? "space-y-6" : "md:space-x-12"} flex-col md:flex-row md:space-x-12 text-gray-800 mt-4 md:mt-0`}>
              <li className="flex flex-col items-center font-bold">
                <img src={Home} alt="Home" className="h-6 mb-1" />
                <p className={`text-center ${isOpen ? "hidden " : " inline"}  whitespace-nowrap`}>Home</p>
              </li>
              <li className="flex flex-col items-center font-bold">
                <img src={Market} alt="Market Place" className="h-6 mb-1" />
                <p className={`text-center ${isOpen ? "hidden " : " inline"}  whitespace-nowrap`}>Market Place</p>
              </li>
              <li className="flex flex-col items-center font-bold">
                <img src={Post} alt="Post Ads" className="h-6 mb-1" />
                <p className={`text-center ${isOpen ? "hidden " : " inline"}  whitespace-nowrap`}>Post Ads</p>
              </li>
            </ul>

            <ul className={`flex ${isOpen ? "space-y-6" : "md:space-x-12"} flex-col  absolute right-4 md:flex-row md:space-x-6 text-gray-800 mt-4 md:mt-0`}>
              <li className="flex flex-col items-center font-bold">
                <img src={Response} alt="Response" className="h-6 mb-1" />
                <p className={`text-center ${isOpen ? "hidden " : " inline"}  whitespace-nowrap`}>Response</p>
              </li>
              <li className="flex flex-col items-center font-bold">
                <img src={Setting} alt="Settings" className="h-6 mb-1" />
                <p className={`text-center ${isOpen ? "hidden " : " inline"}  whitespace-nowrap`}>Settings</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
