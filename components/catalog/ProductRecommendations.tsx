'use client';

import ProductCard from '@/components/home/ProductCard';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  brand: string;
  inStock: boolean;
  discount: number;
}

interface ProductRecommendationsProps {
  currentProductId: number;
}

// Mock recommendations data
const mockRecommendations: Product[] = [
  {
    id: 2,
    name: 'Smart Fitness Watch Pro',
    price: 199.99,
    originalPrice: 249.99,
    image: '/api/placeholder/300/300',
    rating: 4.3,
    reviews: 89,
    category: 'Electronics',
    brand: 'FitTech',
    inStock: true,
    discount: 20,
  },
  {
    id: 3,
    name: 'Wireless Earbuds Premium',
    price: 79.99,
    originalPrice: 99.99,
    image: '/api/placeholder/300/300',
    rating: 4.6,
    reviews: 156,
    category: 'Electronics',
    brand: 'AudioTech',
    inStock: true,
    discount: 20,
  },
  {
    id: 4,
    name: 'Bluetooth Speaker Portable',
    price: 59.99,
    originalPrice: 79.99,
    image: '/api/placeholder/300/300',
    rating: 4.4,
    reviews: 203,
    category: 'Electronics',
    brand: 'SoundWave',
    inStock: true,
    discount: 25,
  },
  {
    id: 5,
    name: 'Gaming Headset Pro',
    price: 129.99,
    originalPrice: 159.99,
    image: '/api/placeholder/300/300',
    rating: 4.7,
    reviews: 342,
    category: 'Electronics',
    brand: 'GameTech',
    inStock: false,
    discount: 19,
  },
  {
    id: 6,
    name: 'USB-C Wireless Charger',
    price: 39.99,
    originalPrice: 49.99,
    image: '/api/placeholder/300/300',
    rating: 4.2,
    reviews: 78,
    category: 'Electronics',
    brand: 'PowerTech',
    inStock: true,
    discount: 20,
  },
  {
    id: 7,
    name: 'Smart Home Hub',
    price: 149.99,
    originalPrice: 199.99,
    image: '/api/placeholder/300/300',
    rating: 4.5,
    reviews: 124,
    category: 'Electronics',
    brand: 'HomeTech',
    inStock: true,
    discount: 25,
  },
];

const ProductRecommendations = ({
  currentProductId,
}: ProductRecommendationsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerView = 4;
  const maxIndex = Math.max(0, mockRecommendations.length - productsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const visibleProducts = mockRecommendations.slice(
    currentIndex,
    currentIndex + productsPerView
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            You might also like
          </h2>
          <p className="text-gray-600 mt-1">Based on your browsing history</p>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
              currentIndex === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            <FiChevronLeft className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
              currentIndex >= maxIndex
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            <FiChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Products Carousel */}
      <div className="relative">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {visibleProducts.map(product => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <ProductCard product={product} variant="featured" />
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Indicator */}
        {maxIndex > 0 && (
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === currentIndex
                      ? 'bg-blue-600 w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          View All Recommendations
        </motion.button>
      </div>
    </div>
  );
};

export default ProductRecommendations;

