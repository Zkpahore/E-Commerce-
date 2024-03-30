import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import productsData from '../Product.json';

const Front = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set the duration for each slide in milliseconds
  };

  return (
    <div className="front-page">
      <div className='flex w-full'>
      <Slider {...sliderSettings} className="w-1/2 h-1/6 flex-shrink-0">
        {productsData.map((product, index) => (
          <div key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>

      <div className='w-1/2 flex-shrink-0'>
      <img src='image.jpg' className='w-full'/>
      </div>
      </div>
      {/* <div className="text-center mt-8">
        <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
        <div className="flex flex-col-3 justify-center">
          {productsData.slice(0, 4).map((product, index) => (
            <div key={index} className="max-w-sm m-2 w-1/6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover mb-4"
              />
              <h3 className="text-md font-semibold">{product.name}</h3> 
              <p className="text-gray-700">
                Price: ${product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Front;
