import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Wrench, Snowflake, Waves, Zap, Thermometer, Box } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

const Home = () => {
  const [heroImage, setHeroImage] = useState<string>("https://picsum.photos/seed/appliances/1920/1080?blur=2");

  const categories = [
    { name: 'Air Conditioners', icon: <Snowflake className="w-8 h-8" />, color: 'bg-blue-50 text-blue-600' },
    { name: 'Washing Machines', icon: <Waves className="w-8 h-8" />, color: 'bg-indigo-50 text-indigo-600' },
    { name: 'Refrigerators', icon: <Box className="w-8 h-8" />, color: 'bg-cyan-50 text-cyan-600' },
    { name: 'Microwaves', icon: <Zap className="w-8 h-8" />, color: 'bg-orange-50 text-orange-600' },
    { name: 'Water Dispensers', icon: <Thermometer className="w-8 h-8" />, color: 'bg-teal-50 text-teal-600' },
    { name: 'Commercial Fridges', icon: <Box className="w-8 h-8" />, color: 'bg-slate-50 text-slate-600' },
    { name: 'Stabilizers', icon: <Zap className="w-8 h-8" />, color: 'bg-yellow-50 text-yellow-600' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src={heroImage}
            alt="Background" 
            className="w-full h-full object-cover transition-opacity duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/90 to-transparent z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="mb-4">
              <span className="text-sm md:text-base font-bold text-blue-400 leading-none block mb-1">
                బాషా హోమ్ అప్లయెన్సెస్
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-red-600 mb-2 leading-none tracking-tighter">
                BASHA
              </h1>
              <span className="text-xl md:text-2xl font-bold text-white tracking-widest leading-none block">
                HOME APPLIANCES
              </span>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light mt-6">
              Trusted Home Appliances Store – Quality, Reliability, and Service
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-red-500/30"
            >
              View Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Services Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 md:p-12 shadow-xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Professional Appliance Services Available
              </h2>
              <p className="text-red-100 text-lg">
                Expert repairs and maintenance for all your home appliances.
              </p>
            </div>
            <a 
              href="https://example.com/services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg transition-colors shadow-md flex items-center gap-2 whitespace-nowrap"
            >
              <Wrench className="w-5 h-5" />
              View Services
            </a>
          </motion.div>

          {/* Bulk Orders Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-800"
          >
            <div>
              <div className="inline-block bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded mb-2">BUSINESS & INSTITUTIONS</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Bulk Orders & Corporate Sales
              </h2>
              <p className="text-gray-400 text-lg">
                Get special pricing for bulk quantities. Minimum order: 5 units.
              </p>
            </div>
            <Link 
              to="/bulk-products" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg transition-colors shadow-md flex items-center gap-2 whitespace-nowrap"
            >
              <Box className="w-5 h-5" />
              Order in Bulk
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of premium home appliances designed to make your life easier.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={`/products?category=${encodeURIComponent(category.name)}`}
                  className="group block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-red-200"
                >
                  <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="text-center font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                    {category.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-800 transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Looking for the Best Deals?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Get a personalized quote for your home appliance needs. Whether you need a single unit or bulk order for your business, we offer competitive pricing and unmatched service.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Best Market Prices</h3>
                    <p className="text-gray-500">We guarantee the best rates for all premium brands.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Installation Support</h3>
                    <p className="text-gray-500">Expert installation and demo included with purchase.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <QuoteForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
