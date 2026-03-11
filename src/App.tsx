import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import BulkProducts from './pages/BulkProducts';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/bulk-products" element={<BulkProducts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
