'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg"
            >
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              New Collection Available
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight mb-6"
            >
              Discover
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Amazing Products
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-600 font-normal">
                at Great Prices
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Shop the latest trends with confidence. Quality products,
              competitive prices, and exceptional service.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95">
                <span className="flex items-center justify-center">
                  Shop Now
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              <button className="group bg-white/80 backdrop-blur-sm text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-white active:scale-95">
                <span className="flex items-center justify-center">
                  <FiPlay className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  50K+
                </div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  10K+
                </div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  99%
                </div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square relative overflow-hidden rounded-2xl bg-white shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>

                  {/* Product Grid for Tablet */}
                  <div className="grid grid-cols-2 gap-4 p-6 h-full">
                    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-3 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">📱</span>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900 text-sm">
                          Smartphones
                        </div>
                        <div className="text-xs text-gray-500">
                          Latest Models
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-3 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">💻</span>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900 text-sm">
                          Laptops
                        </div>
                        <div className="text-xs text-gray-500">
                          High Performance
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-3 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">🎧</span>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900 text-sm">
                          Audio
                        </div>
                        <div className="text-xs text-gray-500">
                          Premium Sound
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mb-3 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">⌚</span>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900 text-sm">
                          Wearables
                        </div>
                        <div className="text-xs text-gray-500">Smart Tech</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-sm font-semibold text-gray-900">
                    Live
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  50+ people shopping
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-4 shadow-xl"
              >
                <div className="text-sm font-semibold">Special Offer</div>
                <div className="text-xs opacity-90">Up to 70% off</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="text-sm text-gray-500">Scroll to explore</div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
