import React from "react";



import car from "./Assets_market/car.png";
import furniture from "./Assets_market/furniture.png";
import hand_icon from "./Assets_market/hand-icon.png";
import home from "./Assets_market/home.png";
import indian_currency from "./Assets_market/indian-currency.png";
import mobile from "./Assets_market/mobile.png";
import screen from "./Assets_market/screen.png";
import send from "./Assets_market/send.png";

import img1 from './Assets_market/img1.png'
import img2 from './Assets_market/img2.png'
import img3 from './Assets_market/img3.png'
import img4 from './Assets_market/img4.png'
import img5 from './Assets_market/img5.png'
import img6 from './Assets_market/img6.png'

import ImageSlider from "./ImageSlider";

import Footer from "../Navbar/Footer";

// import '../../App.css'

function Market_Place() {

    const imageArray = [

        img1 , img2 , img3, img4, img5, img6
    ];
  return (
    <div className="mt-[4.5rem] md:mt-[5.8rem] flex justify-between items-start  ">
        {/* side bar */}
      <div className=" bg-[#F3F3F3]   w-[30%] md:max-w-[250px] ">
        <div className="p-4">
          <h1 className="text-[.9rem]  md:text-xl font-semibold md:font-bold">CATEGORIES</h1>
        </div>

        <ul className="p-2 space-y-4">
  <hr />
  <li className="flex flex-col items-center md:flex-row md:items-center">
    <img
      className="bg-white rounded-[100%] p-2 w-8 h-8"
      src={home}
      alt="Home Icon"
    />
    <span className="mt-2 text-[.8rem] md:text-[1rem]  md:mt-0 md:ml-2 font-semibold text-center md:text-left">
      Real Estate
    </span>
  </li>
  <hr />
  <li className="flex flex-col items-center md:flex-row md:items-center">
    <img
      className="bg-white rounded-[100%] p-2 w-8 h-8"
      src={hand_icon}
      alt="Self Made"
    />
    <span className="mt-2 text-[.8rem] md:text-[1rem] md:mt-0 md:ml-2 font-semibold text-center md:text-left">
      Self Made
    </span>
  </li>
  <hr />
  <li className="flex flex-col items-center md:flex-row md:items-center">
    <img
      className="bg-white rounded-[100%] p-2 w-8 h-8 object-contain"
      src={indian_currency}
      alt="Rental Items"
    />
    <span className="mt-2 text-[.8rem] md:text-[1rem] md:mt-0 md:ml-2 font-semibold text-center md:text-left">
      Rental Items
    </span>
  </li>
  <hr />
  <li className="flex flex-col items-center md:flex-row md:items-center">
    <img
      className="bg-white rounded-[100%] p-2 w-8 h-8 object-contain"
      src={send}
      alt="Direct by Farm"
    />
    <span className="mt-2 text-[.8rem] md:text-[1rem] md:mt-0 md:ml-2 font-semibold text-center md:text-left">
      Direct by Farm
    </span>
  </li>
  <hr />
  <li className="flex flex-col items-center md:flex-row md:items-center">
    <img
      className="bg-white rounded-[100%] p-2 w-8 h-8 object-contain"
      src={screen}
      alt="Electronics"
    />
    <span className="mt-2 text-[.8rem] md:text-[1rem] md:mt-0 md:ml-2 font-semibold text-center md:text-left">
      Electronics
    </span>
  </li>
  <hr />
  <li className="flex flex-col items-center md:flex-row md:items-center">
    <img
      className="bg-white rounded-[100%] p-2 w-8 h-8 object-contain"
      src={furniture}
      alt="Furniture"
    />
    <span className="mt-2 text-[.8rem] md:text-[1rem] md:mt-0 md:ml-2 font-semibold text-center md:text-left">
      Furniture
    </span>
  </li>
  <hr />
  <li className="flex flex-col items-center md:flex-row md:items-center">
    <img
      className="bg-white rounded-[100%] p-2 w-8 h-8 object-contain"
      src={mobile}
      alt="Mobile"
    />
    <span className="mt-2 text-[.8rem] md:text-[1rem] md:mt-0 md:ml-2 font-semibold text-center md:text-left">
      Mobile
    </span>
  </li>
  <hr />
  <li className="flex flex-col items-center md:flex-row md:items-center">
    <img
      className="bg-white rounded-[100%] p-2 w-8 h-8 object-contain"
      src={car}
      alt="Vehicle"
    />
    <span className="mt-2 text-[.8rem] md:text-[1rem] md:mt-0 md:ml-2 font-semibold text-center md:text-left">
      Vehicle
    </span>
  </li>
</ul>


        
      </div>

      {/* slider */}
      <div className=" w-[80%] mt-4 md:mt-12">

        {/* main slider */}
        <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 md:gap-8">
  <div className="App">
    <ImageSlider images={imageArray} />
  </div>
  <div>
  <ImageSlider images={imageArray} />
    
  </div>
  <div>
  <ImageSlider images={imageArray} />
    
  </div>
  <div>
  <ImageSlider images={imageArray} />
    
  </div>
  <div>
  <ImageSlider images={imageArray} />
    
  </div>
  <div>
  <ImageSlider images={imageArray} />
    
  </div>
  <div>
  <ImageSlider images={imageArray} />
    
  </div>
  <div>
  <ImageSlider images={imageArray} />
    
  </div>
  <div>
  <ImageSlider images={imageArray} />
    
  </div>
</div>

       
      </div>

      <Footer/>
    </div>
  );
}

export default Market_Place;
