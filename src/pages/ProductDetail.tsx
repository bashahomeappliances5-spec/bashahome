import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, MessageCircle, CheckCircle, Share2, ShieldCheck, Truck } from 'lucide-react';
import { PRODUCTS } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <Link to="/products" className="text-red-600 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>
      </div>
    );
  }

  const getWhatsAppLink = (productName: string) => {
    const phoneNumber = "918019961896"; // Updated number
    const message = `Hello, I want details about ${productName} from BASHA HOME APPLIANCES`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </button>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="bg-gray-100 p-8 flex items-center justify-center relative group">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={product.image} 
                alt={product.name} 
                className="w-full max-h-[500px] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full text-sm font-bold text-gray-800 shadow-sm">
                {product.category}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 flex flex-col">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center gap-4 mt-4">
                  <span className="text-3xl font-bold text-red-600">{product.price}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    In Stock
                  </span>
                </div>
              </div>

              <div className="prose prose-lg text-gray-600 mb-8">
                <p>{product.longDescription || product.description}</p>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-red-600" />
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features?.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivery Info */}
              <div className="flex items-center gap-3 text-gray-500 text-sm mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <Truck className="w-5 h-5 text-blue-500" />
                <span>Free delivery available within city limits. Installation charges may apply.</span>
              </div>

              {/* Actions */}
              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <a
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-6 h-6" />
                  Enquire on WhatsApp
                </a>
                <button 
                  className="px-6 py-4 rounded-xl border-2 border-gray-200 text-gray-700 font-bold hover:border-red-600 hover:text-red-600 transition-colors flex items-center justify-center gap-2"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: product.name,
                        text: `Check out ${product.name} at Basha Home Appliances!`,
                        url: window.location.href,
                      }).catch(console.error);
                    } else {
                      alert("Sharing is not supported on this browser");
                    }
                  }}
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
