import React from 'react';
import { useParams } from 'react-router-dom';

const ProdDetails = ({ products }) => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  
  // Check if products array exists and is not empty
  if (!products || products.length === 0) {
    return <div>No product available</div>;
  }

  // Check if productId is a valid number
  if (isNaN(productId) || productId <= 0) {
    return <div>Invalid product ID</div>;
  }

  // Find the product with the matching productId
  const product = products.find(product => product.id === productId);

  // Check if product is found
  if (!product) {
    return <div>Product not found</div>;
  }

  const mobiles = [
    {
      model: "iPhone 12 Pro Max",
      ram: "6 GB",
      storage: "128 GB / 256 GB / 512 GB",
      display: "6.7 inches",
      camera: "Triple 12 MP",
      price: "$1099",
    }
  ];


  return (
   <>
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 border border-gray-200">
    <div className="flex items-center justify-between">
        <img src={product.image} className="w-1/2 md:w-1/3 lg:w-1/4 object-cover mr-6 rounded-lg" alt="Product Image" />
        <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
            <p className="text-gray-700">Price: <span className="font-semibold text-blue-600">${product.price.toFixed(2)}</span></p>
            <p className="text-gray-700">Availability: <span className={product.availability ? 'text-green-500' : 'text-red-500'}>{product.availability ? 'In Stock' : 'Out of Stock'}</span></p>
            <p className="text-gray-700">Discount: <span className="font-semibold">{product.discount}%</span></p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 transition duration-300">Order Now</button>
        </div>
    </div>
</div>



   </>
  );
};

export default ProdDetails;
