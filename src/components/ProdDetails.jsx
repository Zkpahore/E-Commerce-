import React from 'react';
import { useParams } from 'react-router-dom';

const ProdDetails = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="text-center py-20">Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-96 object-contain rounded-xl"
          />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-emerald-600">
                ${((product.price * (100 - product.discount)) / 100).toFixed(2)}
              </span>
              <span className="text-xl text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full">
                Save {product.discount}%
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${product.availability ? 'text-emerald-600' : 'text-red-600'}`}>
                {product.availability ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300"
              disabled={!product.availability}
            >
              {product.availability ? 'Add to Cart' : 'Notify When Available'}
            </button>
          </div>
          
          <div className="pt-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Product Details</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <div><span className="font-medium">Category:</span> Electronics</div>
              <div><span className="font-medium">Brand:</span> Premium Brands</div>
              <div><span className="font-medium">Warranty:</span> 2 Years</div>
              <div><span className="font-medium">SKU:</span> {product.id}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdDetails;
