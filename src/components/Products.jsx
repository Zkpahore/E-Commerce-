import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, searchResults, calculateDiscountedPrice }) => {
  const productList = searchResults.length > 0 ? searchResults : products; 

  return (
    <div className="container mx-auto p-1 mt-10">
      <h1 className="text-4xl font-bold mb-8">Product List</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-2 lg:gap-6">
        {productList.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="max-w-sm rounded overflow-hidden hover:shadow-inner bg-white border-2 hover:border-gray-400">
              <img src={product.image} alt={product.name} className="w-full h-52 object-cover" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700">
                  Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
                </p>
                <p className="text-gray-700 line-through">Price: ${product.price.toFixed(2)}</p>
                <p className="text-green-500">
                  Discounted Price: ${calculateDiscountedPrice(product)}
                </p>
                <p className="text-gray-700">Discount: {product.discount}%</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;