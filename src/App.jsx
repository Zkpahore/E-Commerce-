import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import productsData from './Products.json';
import Front from './components/Fronts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/Products';
import ProdDetails from './components/ProdDetails';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut'

const App = () => {
  const [defaultProducts, setDefaultProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setDefaultProducts(productsData);
  }, []);

  const handleSearch = useCallback((searchTerm) => {
    const filtered = productsData.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filtered);
  }, []);

  const calculateDiscountedPrice = useCallback((product) => {
    return ((product.price * (100 - product.discount)) / 100).toFixed(2);
  }, []);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar onSearch={handleSearch} cartCount={cart.length} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Front />
                <ProductList 
                  products={defaultProducts}
                  searchResults={searchResults}
                  calculateDiscountedPrice={calculateDiscountedPrice}
                  addToCart={addToCart}
                />
              </>
            } />
            <Route path="/product/:id" element={
              <ProdDetails products={defaultProducts} addToCart={addToCart} />
            } />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/checkout" element={<CheckOut cart={cart} setCart={setCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
