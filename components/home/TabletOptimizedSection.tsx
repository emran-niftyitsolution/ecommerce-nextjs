'use client';

import { motion } from 'framer-motion';
import { FiFilter, FiGrid, FiHeart, FiList, FiSearch } from 'react-icons/fi';

const TabletOptimizedSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tablet-Specific Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Tablet-Optimized Experience
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Designed specifically for tablet users with enhanced touch
            interactions and layouts
          </p>
        </motion.div>

        {/* Tablet-Specific Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Tablet Navigation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group cursor-pointer"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-white/90">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FiGrid className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Adaptive Grid Layout
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Responsive grid system that adapts perfectly to tablet screen
                  sizes
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tablet Touch Interactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group cursor-pointer"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-white/90">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FiList className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors duration-300">
                  Touch-Optimized Controls
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Larger touch targets and gesture-friendly interactions for
                  tablets
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tablet Filter Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group cursor-pointer"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-white/90">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FiFilter className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  Enhanced Filtering
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Sidebar filters and advanced search optimized for tablet
                  screens
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tablet-Specific Features Grid */}
        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column - Tablet Layout Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Tablet Layout Features
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Two-column grid layout
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Larger touch targets
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Sidebar navigation
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Enhanced typography
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Tablet Interactions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Tablet Interactions
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Swipe gestures
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Pinch to zoom</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">
                      Long press actions
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Hover effects</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tablet Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12 sm:mt-16"
        >
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <span className="flex items-center justify-center">
              <FiSearch className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              Explore Tablet Features
            </span>
          </button>

          <button className="group bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-white">
            <span className="flex items-center justify-center">
              <FiHeart className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              Save for Later
            </span>
          </button>
        </motion.div>

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

export default TabletOptimizedSection;
