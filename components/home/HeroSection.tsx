'use client';

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiCheckCircle,
  FiPlay,
  FiTrendingUp,
} from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <FiTrendingUp className="mr-1.5 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Trending Now - 50% Off Electronics</span>
              <span className="sm:hidden">50% Off Electronics</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Discover Amazing
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Shop the latest trends with unbeatable prices and lightning-fast
              delivery. Join millions of satisfied customers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 max-w-sm sm:max-w-none mx-auto lg:mx-0">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg w-full sm:w-auto"
              >
                <span className="hidden sm:inline">Shop Now</span>
                <span className="sm:hidden">Shop Now</span>
                <FiArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto"
              >
                <FiPlay className="mr-2 w-4 h-4" />
                <span className="hidden sm:inline">Watch Demo</span>
                <span className="sm:hidden">Demo</span>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <FiCheckCircle className="text-green-300 w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <FiCheckCircle className="text-green-300 w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">30-Day Returns</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <FiCheckCircle className="text-green-300 w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Secure Payment</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative order-first lg:order-last"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">🛍️</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">Flash Sale</h3>
                <p className="text-blue-100 mb-4 sm:mb-6 text-sm sm:text-base">
                  Up to 70% off on selected items
                </p>
                <div className="flex justify-center space-x-2 sm:space-x-3 text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">
                  <div className="bg-white/20 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-white/30">
                    24
                  </div>
                  <div className="bg-white/20 rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-2 sm:py-3">:</div>
                  <div className="bg-white/20 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-white/30">
                    18
                  </div>
                  <div className="bg-white/20 rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-2 sm:py-3">:</div>
                  <div className="bg-white/20 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-white/30">
                    45
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-blue-200">
                  Hours : Minutes : Seconds
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
