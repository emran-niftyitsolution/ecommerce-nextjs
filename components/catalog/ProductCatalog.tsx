'use client';

import ModernProductList from '@/components/catalog/ModernProductList';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  FiFilter,
  FiGrid,
  FiList,
  FiSearch,
  FiSortAsc,
  FiX,
} from 'react-icons/fi';

// Mock product data
const mockProducts = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 89.99,
    originalPrice: 129.99,
    image: '/api/placeholder/300/300',
    rating: 4.5,
    reviews: 128,
    category: 'Electronics',
    brand: 'AudioTech',
    inStock: true,
    discount: 31,
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
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
    name: 'Organic Cotton T-Shirt',
    price: 24.99,
    originalPrice: 34.99,
    image: '/api/placeholder/300/300',
    rating: 4.7,
    reviews: 256,
    category: 'Clothing',
    brand: 'EcoWear',
    inStock: true,
    discount: 29,
  },
  {
    id: 4,
    name: 'Stainless Steel Water Bottle',
    price: 19.99,
    originalPrice: 29.99,
    image: '/api/placeholder/300/300',
    rating: 4.6,
    reviews: 342,
    category: 'Home & Garden',
    brand: 'HydraLife',
    inStock: false,
    discount: 33,
  },
  {
    id: 5,
    name: 'Wireless Charging Pad',
    price: 39.99,
    originalPrice: 59.99,
    image: '/api/placeholder/300/300',
    rating: 4.2,
    reviews: 67,
    category: 'Electronics',
    brand: 'PowerTech',
    inStock: true,
    discount: 33,
  },
  {
    id: 6,
    name: 'Leather Crossbody Bag',
    price: 79.99,
    originalPrice: 119.99,
    image: '/api/placeholder/300/300',
    rating: 4.8,
    reviews: 189,
    category: 'Accessories',
    brand: 'LuxLeather',
    inStock: true,
    discount: 33,
  },
];

const ProductCatalog = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort products
  useEffect(() => {
    let filtered = mockProducts.filter(
      product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    setFilteredProducts(filtered);
  }, [searchQuery, sortBy]);

  const handleSearchClear = () => {
    setSearchQuery('');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Product Catalog
              </h1>
              <p className="text-gray-600 mt-1">
                {filteredProducts.length} products found
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products, categories, brands..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                {searchQuery && (
                  <button
                    onClick={handleSearchClear}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">View:</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <FiGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <FiList className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sort and Filter */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <FiFilter className="w-4 h-4" />
                <span className="text-sm font-medium">Filters</span>
              </button>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm font-medium"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
                <FiSortAsc className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Category Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Category
                  </h3>
                  <div className="space-y-2">
                    {[
                      'Electronics',
                      'Clothing',
                      'Home & Garden',
                      'Accessories',
                    ].map(category => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Price Range
                  </h3>
                  <div className="space-y-2">
                    {['Under $25', '$25 - $50', '$50 - $100', 'Over $100'].map(
                      range => (
                        <label key={range} className="flex items-center">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            {range}
                          </span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* Brand Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Brand
                  </h3>
                  <div className="space-y-2">
                    {[
                      'AudioTech',
                      'FitTech',
                      'EcoWear',
                      'HydraLife',
                      'PowerTech',
                      'LuxLeather',
                    ].map(brand => (
                      <label key={brand} className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {brand}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Availability
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        In Stock
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        On Sale
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Products Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ModernProductList
              products={filteredProducts}
              variant={viewMode === 'list' ? 'full-details' : 'inline-price'}
              onAddToCart={product => {
                toast.success(`${product.name} added to cart!`);
              }}
              onWishlist={product => {
                toast.success(`${product.name} added to wishlist!`);
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiSearch className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Clear Search
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;
