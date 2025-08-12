'use client';

import { motion } from 'framer-motion';
import { FiAward, FiHeadphones, FiPackage, FiUsers } from 'react-icons/fi';

const stats = [
  {
    icon: FiUsers,
    value: '50K+',
    label: 'Happy Customers',
    description: 'Satisfied shoppers worldwide',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FiPackage,
    value: '10K+',
    label: 'Products Available',
    description: 'Wide range of quality items',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FiHeadphones,
    value: '24/7',
    label: 'Customer Support',
    description: 'Always here to help you',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FiAward,
    value: '99%',
    label: 'Satisfaction Rate',
    description: 'Customer satisfaction guarantee',
    color: 'from-orange-500 to-orange-600',
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose ShopHub?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Trusted by millions of customers worldwide for quality products and
            exceptional service
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-white/90">
                <div className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center mt-6 sm:hidden">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
