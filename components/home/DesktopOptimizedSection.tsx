'use client';

import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiEye,
  FiFilter,
  FiGrid,
  FiHeart,
  FiList,
  FiSearch,
  FiShare2,
  FiShoppingCart,
  FiStar,
} from 'react-icons/fi';

const DesktopOptimizedSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop-Specific Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Desktop-Optimized Experience
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced features and sophisticated layouts designed specifically
            for desktop users with enhanced productivity and navigation
          </p>
        </motion.div>

        {/* Advanced Desktop Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Advanced Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Advanced Navigation
              </h3>

              {/* Quick Actions */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl hover:from-blue-100 hover:to-purple-100 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FiGrid className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Grid View
                      </div>
                      <div className="text-sm text-gray-600">
                        Switch to grid layout
                      </div>
                    </div>
                  </div>
                  <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <FiList className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        List View
                      </div>
                      <div className="text-sm text-gray-600">
                        Switch to list layout
                      </div>
                    </div>
                  </div>
                  <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <FiFilter className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Advanced Filters
                      </div>
                      <div className="text-sm text-gray-600">
                        Refine your search
                      </div>
                    </div>
                  </div>
                  <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>

              {/* Recent Searches */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Recent Searches
                </h4>
                <div className="space-y-2">
                  {[
                    'iPhone 15 Pro',
                    'Wireless Earbuds',
                    'Gaming Laptop',
                    'Smart Watch',
                  ].map((search, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
                    >
                      <div className="flex items-center space-x-3">
                        <FiSearch className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-700">{search}</span>
                      </div>
                      <FiArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Column - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Featured Products
                </h3>
                <div className="flex items-center space-x-4">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-200">
                    Sort by: Popular
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200">
                    View All
                  </button>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: 'iPhone 15 Pro Max',
                    price: 1199,
                    rating: 4.8,
                    reviews: 1247,
                    image: '📱',
                    badge: 'New',
                    color: 'from-blue-500 to-blue-600',
                  },
                  {
                    name: 'MacBook Pro M3',
                    price: 2499,
                    rating: 4.9,
                    reviews: 892,
                    image: '💻',
                    badge: 'Best Seller',
                    color: 'from-purple-500 to-purple-600',
                  },
                  {
                    name: 'AirPods Pro 2',
                    price: 249,
                    rating: 4.7,
                    reviews: 2156,
                    image: '🎧',
                    badge: 'Popular',
                    color: 'from-green-500 to-green-600',
                  },
                  {
                    name: 'Apple Watch Series 9',
                    price: 399,
                    rating: 4.6,
                    reviews: 1567,
                    image: '⌚',
                    badge: 'Trending',
                    color: 'from-orange-500 to-orange-600',
                  },
                ].map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-blue-200">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center text-2xl`}
                        >
                          {product.image}
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-red-50 hover:text-red-500 transition-all duration-200">
                            <FiHeart className="w-4 h-4" />
                          </button>
                          <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
                            <FiEye className="w-4 h-4" />
                          </button>
                          <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-green-50 hover:text-green-600 transition-all duration-200">
                            <FiShare2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            {product.badge}
                          </span>
                          <div className="flex items-center space-x-1">
                            <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-semibold text-gray-900">
                              {product.rating}
                            </span>
                            <span className="text-sm text-gray-500">
                              ({product.reviews})
                            </span>
                          </div>
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">
                          {product.name}
                        </h4>
                        <div className="text-2xl font-bold text-gray-900">
                          ${product.price}
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        Add to Cart
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Advanced Desktop Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Keyboard Shortcuts',
                description: 'Navigate efficiently with keyboard shortcuts',
                icon: '⌨️',
                color: 'from-blue-500 to-blue-600',
              },
              {
                title: 'Multi-Select',
                description: 'Select multiple items for bulk operations',
                icon: '☑️',
                color: 'from-green-500 to-green-600',
              },
              {
                title: 'Drag & Drop',
                description: 'Intuitive drag and drop functionality',
                icon: '🖱️',
                color: 'from-purple-500 to-purple-600',
              },
              {
                title: 'Advanced Search',
                description: 'Powerful search with filters and sorting',
                icon: '🔍',
                color: 'from-orange-500 to-orange-600',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-white/90">
                  <div className="text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg text-2xl`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Desktop Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-16 lg:mt-20"
        >
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <span className="flex items-center justify-center">
              Explore Desktop Features
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>

          <button className="group bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-white">
            <span className="flex items-center justify-center">
              <FiShoppingCart className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              View Cart
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DesktopOptimizedSection;
