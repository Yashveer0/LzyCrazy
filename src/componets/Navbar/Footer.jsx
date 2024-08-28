// Footer.js
import React from 'react';


import Home from './Nav_assets/Home_icon.png';
import Market from './Nav_assets/Market_icon.png';
import Post from './Nav_assets/Post_icon.png';
import Response from './Nav_assets/Response_icon.png';
import Setting from './Nav_assets/Setting_icon.png';

function Footer() {
  return (
    <footer className="fixed p-1  z-30 bottom-0 w-full bg-white md:hidden">
      <div className="flex justify-around px-2 items-center py-2 border-t">
        <div className="flex flex-col items-center font-bold">
          <img src={Home} alt="Home" className="h-6 mb-1" />
          <p className="text-[.7rem] text-center">Home</p>
        </div>
        <div className="flex flex-col items-center font-bold">
          <img src={Market} alt="Market Place" className="h-6 mb-1" />
          <p className=" text-[.7rem] text-center">Market Place</p>
        </div>
        <div className="flex flex-col items-center font-bold">
          <img src={Post} alt="Post Ads" className="h-6 mb-1" />
          <p className=" text-[.7rem] text-center">Post Ads</p>
        </div>
        <div className="flex flex-col items-center font-bold">
          <img src={Response} alt="Response" className="h-6 mb-1" />
          <p className=" text-[.7rem] text-center">Response</p>
        </div>
        <div className="flex flex-col items-center font-bold">
          <img src={Setting} alt="Settings" className="h-6 mb-1" />
          <p className=" text-[.7rem] text-center">Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
