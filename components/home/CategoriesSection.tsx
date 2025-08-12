'use client';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { FiGrid } from 'react-icons/fi';

const categories = [
  {
    name: 'Electronics',
    icon: '📱',
    count: '2.5k+',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    name: 'Fashion',
    icon: '👕',
    count: '1.8k+',
    color: 'bg-pink-50 border-pink-200',
  },
  {
    name: 'Home & Garden',
    icon: '🏠',
    count: '3.2k+',
    color: 'bg-green-50 border-green-200',
  },
  {
    name: 'Sports',
    icon: '⚽',
    count: '950+',
    color: 'bg-orange-50 border-orange-200',
  },
  {
    name: 'Books',
    icon: '📚',
    count: '1.2k+',
    color: 'bg-purple-50 border-purple-200',
  },
  {
    name: 'Beauty',
    icon: '💄',
    count: '750+',
    color: 'bg-red-50 border-red-200',
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <FiGrid className="mr-1.5 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
            Browse Categories
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Shop by Category
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Explore our wide range of products across all categories
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
            >
              <Card
                hover
                clickable
                className={`text-center p-4 sm:p-6 border-2 ${category.color} transition-all duration-300 group-hover:shadow-lg sm:group-hover:shadow-xl min-h-[120px] sm:min-h-[140px] flex flex-col justify-center`}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg leading-tight">
                  {category.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-medium mb-2 sm:mb-4">
                  {category.count} products
                </p>
                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-xs sm:text-sm py-1.5 sm:py-2"
                  >
                    Explore
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center mt-6 sm:hidden">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
