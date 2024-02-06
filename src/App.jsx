import React from 'react';
import productsData from './Products.json';
import Front from './components/Front'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const ProductCard = ({ product }) => {
  const calculateDiscountedPrice = () => {
    const discountPrice = (product.price * (100 - product.discount)) / 100;
    return discountPrice.toFixed(2);
  };

  return (
    
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border hover:border-sky-400 ">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700">
          Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
        </p>
        <p className="text-gray-700 line-through">Price: ${product.price.toFixed(2)}</p>
        <p className="text-green-500">
          Discounted Price: ${calculateDiscountedPrice()}
        </p>
        <p className="text-gray-700">Discount: {product.discount}%</p>
      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {productsData.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <>
    <Navbar />
    <Front />
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Product List</h1>
      <ProductList />
    </div>
    <Footer />
    </>
  );
};

export default App;
