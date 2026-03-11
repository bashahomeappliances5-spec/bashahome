import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Search, Filter, X } from 'lucide-react';
import { PRODUCTS } from '../data/products';

const CATEGORIES = [
  "All",
  "Air Conditioners",
  "Refrigerators",
  "Washing Machines",
  "Microwaves",
  "Commercial Freezers",
  "Water Dispensers",
  "Stabilizers"
];

const CATEGORY_BRANDS: Record<string, string[]> = {
  "Air Conditioners": ["Mitsubishi Heavy Duty", "Voltas", "LG", "Daikin", "Haier", "Hitachi", "Toshiba", "Bluestar", "Lloyd", "O General", "Carrier", "Whirlpool", "Onida", "Samsung", "Godrej"],
  "Refrigerators": ["Samsung", "LG", "Whirlpool", "Godrej", "Haier"],
  "Washing Machines": ["Samsung", "LG", "Bosch", "Ifb", "Whirlpool"],
  "Microwaves": ["LG", "Samsung"],
  "Commercial Freezers": ["Voltas", "Bluestar", "Western", "Rockwell", "Elanpro"]
};

const SUB_CATEGORIES: Record<string, string[]> = {
  "Refrigerators": ["Single Door", "Double Door"],
  "Washing Machines": ["Top Load", "Front Load", "Semi Automatic"],
  "Commercial Freezers": ["Chest Box", "Glass Door"]
};

const Products = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Parse query param for initial category
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam && CATEGORIES.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
      setSelectedBrand(null);
      setSelectedSubCategory(null);
    }
  }, [location]);

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesBrand = !selectedBrand || product.brand === selectedBrand;
    const matchesSubCategory = !selectedSubCategory || product.subCategory === selectedSubCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (product.brand && product.brand.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesBrand && matchesSubCategory && matchesSearch;
  });

  const getWhatsAppLink = (productName: string) => {
    const phoneNumber = "918019961896"; // Updated number
    const message = `Hello, I want details about ${productName} from BASHA HOME APPLIANCES`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedBrand(null);
    setSelectedSubCategory(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our extensive collection of high-quality home appliances.
          </p>
        </div>

        {/* Top Filters & Search */}
        <div className="mb-8 flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Category Filter - Desktop */}
          <div className="hidden md:flex flex-wrap gap-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
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
                onChange={(e) => handleCategoryChange(e.target.value)}
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

        {/* Brand & Sub-Category Filters */}
        <AnimatePresence>
          {selectedCategory !== "All" && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-10 overflow-hidden"
            >
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
                
                {/* Sub-Categories */}
                {SUB_CATEGORIES[selectedCategory] && (
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Sub Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedSubCategory(null)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
                          selectedSubCategory === null
                            ? 'bg-gray-800 text-white border-gray-800'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        All
                      </button>
                      {SUB_CATEGORIES[selectedCategory].map(sub => (
                        <button
                          key={sub}
                          onClick={() => setSelectedSubCategory(sub === selectedSubCategory ? null : sub)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
                            selectedSubCategory === sub
                              ? 'bg-red-600 text-white border-red-600'
                              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                          }`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Brands */}
                {CATEGORY_BRANDS[selectedCategory] && (
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Brands</h3>
                    <div className="flex flex-wrap gap-3">
                      {CATEGORY_BRANDS[selectedCategory].map(brand => (
                        <button
                          key={brand}
                          onClick={() => setSelectedBrand(brand === selectedBrand ? null : brand)}
                          className={`group flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                            selectedBrand === brand
                              ? 'bg-blue-50 border-blue-500 ring-1 ring-blue-500'
                              : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm'
                          }`}
                        >
                          {/* Placeholder for Logo - In a real app, use <img> tags here */}
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            selectedBrand === brand ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                          }`}>
                            {brand.charAt(0)}
                          </div>
                          <span className={`text-sm font-medium ${
                            selectedBrand === brand ? 'text-blue-700' : 'text-gray-700'
                          }`}>
                            {brand}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active Filters Summary */}
        {(selectedBrand || selectedSubCategory) && (
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm text-gray-500">Active Filters:</span>
            {selectedSubCategory && (
              <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {selectedSubCategory}
                <button onClick={() => setSelectedSubCategory(null)}><X className="w-3 h-3" /></button>
              </span>
            )}
            {selectedBrand && (
              <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">
                {selectedBrand}
                <button onClick={() => setSelectedBrand(null)}><X className="w-3 h-3" /></button>
              </span>
            )}
            <button 
              onClick={() => {setSelectedBrand(null); setSelectedSubCategory(null);}}
              className="text-sm text-red-600 hover:underline ml-2"
            >
              Clear All
            </button>
          </div>
        )}

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
                <Link to={`/products/${product.id}`} className="block relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                    {product.category}
                  </div>
                  {product.brand && (
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                      {product.brand}
                    </div>
                  )}
                </Link>
                
                <div className="p-6 flex-grow flex flex-col">
                  <Link to={`/products/${product.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-gray-500 text-sm mb-4 flex-grow">{product.description}</p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-lg font-bold text-red-600">{product.price}</span>
                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Enquire
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
              onClick={() => {
                setSelectedCategory("All"); 
                setSearchQuery("");
                setSelectedBrand(null);
                setSelectedSubCategory(null);
              }}
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

export default Products;
