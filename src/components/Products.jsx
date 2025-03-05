import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, searchResults, calculateDiscountedPrice }) => {
  const productList = searchResults.length > 0 ? searchResults : products;

  return (
    <div className="container mx-auto px-4 py-8">
     
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {productList.map((product) => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`}
            className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-square overflow-hidden rounded-t-xl">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-500 line-through">${product.price.toFixed(2)}</span>
                <span className="text-lg font-bold text-emerald-600">
                  ${calculateDiscountedPrice(product)}
                </span>
                <span className="ml-2 px-2 py-1 bg-red-100 text-red-600 text-sm rounded-full">
                  -{product.discount}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-sm ${product.availability ? 'text-emerald-600' : 'text-red-600'}`}>
                  {product.availability ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
