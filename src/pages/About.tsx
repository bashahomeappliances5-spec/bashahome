import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            25 Years of Excellence in Home Appliances & Customer Service
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://picsum.photos/seed/store/800/600?blur=1" 
              alt="Our Store" 
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Founded with a vision to bring the best home appliances to every household, 
              <span className="font-bold text-gray-900"> BASHA HOME APPLIANCES</span> has been a trusted name in the industry for over two decades.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We pride ourselves on our deep understanding of customer needs and our commitment to quality. 
              Our journey of <span className="font-semibold text-red-600">25 years of excellence</span> stands as a testament to the trust our customers place in us.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you are looking for the latest energy-efficient air conditioner, a smart refrigerator, or a durable washing machine, 
              we ensure you get the best products backed by our strong experience and reliable service.
            </p>
          </motion.div>
        </div>

        {/* Stats / Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: <Clock className="w-10 h-10 text-red-600" />, title: "25+ Years", desc: "Of Industry Experience" },
            { icon: <Users className="w-10 h-10 text-red-600" />, title: "10,000+", desc: "Happy Customers" },
            { icon: <Award className="w-10 h-10 text-red-600" />, title: "Premium Quality", desc: "Certified Products" },
            { icon: <ThumbsUp className="w-10 h-10 text-red-600" />, title: "Best Service", desc: "Customer Satisfaction" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-red-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
            "To provide every home with high-quality, reliable appliances that enhance comfort and convenience, 
            backed by unmatched service and a dedication to total customer satisfaction."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
