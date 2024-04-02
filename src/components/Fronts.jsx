import React from 'react';
import threeImage from "../assets/three.jpg";
function Banner() {
  return (
       
    <div className="relative min-h-screen">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${threeImage})` }}
    >
      <div className="container mx-auto px-6 md:px-16 flex items-center justify-start h-full z-10">
        <div className="text-white max-w-lg">
          <h2 className="text-6xl md:text-6xl font-bold bg-black bg-opacity-50 p-2 inline-block">
            New
          </h2>
          <h2 className="text-4xl md:text-8xl font-sans">
           <span className='font-bold'> ONLINE</span>  <br />  <span className='font-samibold'>STORE</span>
          </h2>
          <h2 className="text-3xl md:text-6xl font-semibold bg-black bg-opacity-50 p-2 inline-block">
            SHOP NOW
          </h2>
        </div>
      </div>
    </div>
  </div>
  

  );
}

export default Banner;
