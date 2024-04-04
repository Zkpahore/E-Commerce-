import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import productsData from './Products.json';
import Front from './components/Fronts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/Products'; 
import ProdDetails from './components/ProdDetails'; 
const App = () => {
  const [defaultProducts, setDefaultProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setDefaultProducts(productsData);
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredProducts = defaultProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  const calculateDiscountedPrice = (product) => {
    const discountPrice = (product.price * (100 - product.discount)) / 100;
    return discountPrice.toFixed(2);
  };

  return (
    <>
    <Navbar onSearch={handleSearch} />
    <Front />
<Router>
      <Routes>

        <Route path="/" element={<ProductList
          products={defaultProducts}
          searchResults={searchResults}
          calculateDiscountedPrice={calculateDiscountedPrice}
        />} />
        <Route path="/product/:id" element={<ProdDetails products={defaultProducts} />} />
      </Routes>
    </Router>
    <Footer />
    </>

    // <Router>
    //   <div>
    //     <Navbar onSearch={handleSearch} />
    //     <Routes>
    //       <Route
    //         path="/product/:id"
    //         element={<ProdDetails products={defaultProducts} />}
    //       />
    //     </Routes>
    //     <Front />
    //     <ProductList
    //       products={defaultProducts}
    //       searchResults={searchResults}
    //       calculateDiscountedPrice={calculateDiscountedPrice}
    //     />
    //     <Footer />
    //   </div>
    // </Router>
  );
};

export default App;
