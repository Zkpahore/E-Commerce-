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
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
    <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
    <img src={product.image} className="w-full h-64 object-cover mb-4 rounded-lg" alt="Product Image" />
    <p className="text-gray-700">Price: <span className="font-semibold text-blue-600">${product.price.toFixed(2)}</span></p>
    <p className="text-gray-700">Availability: <span className={product.availability ? 'text-green-500' : 'text-red-500'}>{product.availability ? 'In Stock' : 'Out of Stock'}</span></p>
    <p className="text-gray-700">Discount: <span className="font-semibold">{product.discount}%</span></p>
    <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 transition duration-300">Order Now</button>
</div>
<div className="overflow-x-auto">
      <h2 className="text-2xl mb-4 text-center">Mobile Table</h2>
      <table className="table-auto mx-auto border-collapse border border-gray-800">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Model</th>
            <th className="px-4 py-2">RAM</th>
            <th className="px-4 py-2">Storage</th>
            <th className="px-4 py-2">Display</th>
            <th className="px-4 py-2">Camera</th>
            <th className="px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {mobiles.map((mobile, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"}>
              <td className="border px-4 py-2">{mobile.model}</td>
              <td className="border px-4 py-2">{mobile.ram}</td>
              <td className="border px-4 py-2">{mobile.storage}</td>
              <td className="border px-4 py-2">{mobile.display}</td>
              <td className="border px-4 py-2">{mobile.camera}</td>
              <td className="border px-4 py-2">{mobile.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </>
  );
};

export default ProdDetails;
