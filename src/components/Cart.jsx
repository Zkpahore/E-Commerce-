import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  // Remove an individual item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Update the quantity of an item
  const updateQuantity = (id, change) => {
    setCart(
      cart.map(item =>
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) } 
          : item
      )
    );
  };

  // Clear the entire cart
  const clearCart = () => setCart([]);

  // Calculate total price for the cart items
  const totalPrice = cart
    .reduce((acc, item) => acc + ((item.price * (100 - item.discount)) / 100 * item.quantity), 0)
    .toFixed(2);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg">Your cart is empty.</p>
          <Link to="/products" className="text-emerald-600 mt-4 inline-block text-lg">
            Go Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Cart Items */}
          {cart.map(item => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center space-x-4 w-full md:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">
                    ${((item.price * (100 - item.discount)) / 100).toFixed(2)} x {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Cart Summary and Actions */}
          <div className="flex flex-col md:flex-row items-center justify-between border-t pt-6">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <h2 className="text-2xl font-bold">Total: ${totalPrice}</h2>
              <button
                onClick={clearCart}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
              >
                Clear Cart
              </button>
            </div>
            <Link
              to="/checkout"
              className="mt-4 md:mt-0 inline-block bg-emerald-600 text-white px-6 py-3 rounded-full text-lg hover:bg-emerald-700 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
