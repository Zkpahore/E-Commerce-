import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ cart, setCart }) => {
  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone: '',
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cart
    .reduce((acc, item) => acc + ((item.price * (100 - item.discount)) / 100 * item.quantity), 0)
    .toFixed(2);

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulate order placement and clear cart
    console.log('Order placed:', { shippingDetails, paymentDetails, cart });
    setOrderPlaced(true);
    setCart([]);
  };

  if (orderPlaced) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Order Confirmation</h1>
        <p className="text-center text-lg">Thank you for your purchase! Your order has been placed successfully.</p>
        <div className="text-center mt-6">
          <Link to="/products" className="text-emerald-600 hover:underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Shipping & Payment Form */}
        <form onSubmit={handlePlaceOrder} className="flex-1 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                value={shippingDetails.fullName}
                onChange={handleShippingChange}
                placeholder="Full Name"
                className="border border-gray-300 p-3 rounded"
                required
              />
              <input
                type="text"
                name="address"
                value={shippingDetails.address}
                onChange={handleShippingChange}
                placeholder="Address"
                className="border border-gray-300 p-3 rounded"
                required
              />
              <input
                type="text"
                name="city"
                value={shippingDetails.city}
                onChange={handleShippingChange}
                placeholder="City"
                className="border border-gray-300 p-3 rounded"
                required
              />
              <input
                type="text"
                name="state"
                value={shippingDetails.state}
                onChange={handleShippingChange}
                placeholder="State"
                className="border border-gray-300 p-3 rounded"
                required
              />
              <input
                type="text"
                name="zip"
                value={shippingDetails.zip}
                onChange={handleShippingChange}
                placeholder="ZIP Code"
                className="border border-gray-300 p-3 rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={shippingDetails.email}
                onChange={handleShippingChange}
                placeholder="Email"
                className="border border-gray-300 p-3 rounded"
                required
              />
              <input
                type="tel"
                name="phone"
                value={shippingDetails.phone}
                onChange={handleShippingChange}
                placeholder="Phone Number"
                className="border border-gray-300 p-3 rounded"
                required
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handlePaymentChange}
                placeholder="Card Number"
                className="border border-gray-300 p-3 rounded"
                required
              />
              <input
                type="text"
                name="expiry"
                value={paymentDetails.expiry}
                onChange={handlePaymentChange}
                placeholder="Expiry Date (MM/YY)"
                className="border border-gray-300 p-3 rounded"
                required
              />
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handlePaymentChange}
                placeholder="CVV"
                className="border border-gray-300 p-3 rounded"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-full text-lg hover:bg-emerald-700 transition"
          >
            Place Order - ${totalPrice}
          </button>
        </form>

        {/* Order Summary */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-semibold">Order Summary</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>
                    ${((item.price * (100 - item.discount)) / 100 * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <hr />
              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
