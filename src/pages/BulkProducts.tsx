import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Search, Filter, Package } from 'lucide-react';
import { PRODUCTS } from '../data/products';

const CATEGORIES = [
  "All",
  "Air Conditioners",
  "Washing Machines",
  "Refrigerators",
  "Microwaves",
  "Water Dispensers",
  "Commercial Refrigerators",
  "Stabilizers"
];

const BulkProducts = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Parse query param for initial category
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam && CATEGORIES.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [location]);

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getWhatsAppLink = (productName: string) => {
    const phoneNumber = "918019961896"; // Updated number
    const message = `Hello, I am interested in a BULK ORDER (Min. 5 Qty) for ${productName} from BASHA HOME APPLIANCES`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-1 rounded-full font-bold text-sm mb-4">
            <Package className="w-4 h-4" />
            Bulk Orders Section
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bulk Purchase Catalog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Special pricing for bulk orders. <span className="font-bold text-red-600">Minimum Order Quantity: 5 Units</span>.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mb-10 flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Category Filter - Desktop */}
          <div className="hidden md:flex flex-wrap gap-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile Category Dropdown */}
          <div className="md:hidden w-full">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
              >
                {CATEGORIES.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-72 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                    {product.category}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-center py-1 text-xs font-bold">
                    MOQ: 5 Units
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex-grow">{product.description}</p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Bulk Price</span>
                      <span className="text-lg font-bold text-red-600">Enquire Now</span>
                    </div>
                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Bulk Quote
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            <button 
              onClick={() => {setSelectedCategory("All"); setSearchQuery("");}}
              className="mt-4 text-red-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BulkProducts;
