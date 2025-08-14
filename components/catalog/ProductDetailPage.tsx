'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  FiCheck,
  FiEye,
  FiHeart,
  FiMessageCircle,
  FiRotateCcw,
  FiShare2,
  FiShield,
  FiShoppingCart,
  FiStar,
  FiTruck,
} from 'react-icons/fi';
import ProductImageGallery from './ProductImageGallery';
import ProductRecommendations from './ProductRecommendations';
import ProductReviews from './ProductReviews';
import ProductVariants from './ProductVariants';

// Mock product data
const mockProduct = {
  id: 1,
  name: 'Wireless Bluetooth Headphones Pro',
  price: 89.99,
  originalPrice: 129.99,
  discount: 31,
  rating: 4.5,
  reviews: 128,
  description:
    'Experience premium sound quality with our latest wireless headphones. Features advanced noise cancellation, 30-hour battery life, and comfortable over-ear design.',
  features: [
    'Active Noise Cancellation',
    '30-hour battery life',
    'Quick charge (10 min = 5 hours)',
    'Bluetooth 5.0',
    'Built-in microphone',
    'Foldable design',
  ],
  specifications: {
    'Driver Size': '40mm',
    'Frequency Response': '20Hz - 20kHz',
    Impedance: '32Ω',
    Sensitivity: '108dB',
    'Battery Life': '30 hours',
    'Charging Time': '2 hours',
    Weight: '250g',
    Connectivity: 'Bluetooth 5.0, 3.5mm jack',
  },
  images: [
    '/api/placeholder/600/600',
    '/api/placeholder/600/600',
    '/api/placeholder/600/600',
    '/api/placeholder/600/600',
    '/api/placeholder/600/600',
  ],
  colors: [
    { id: 'black', name: 'Black', hex: '#000000', available: true },
    { id: 'white', name: 'White', hex: '#FFFFFF', available: true },
    { id: 'blue', name: 'Navy Blue', hex: '#1E3A8A', available: true },
    { id: 'red', name: 'Red', hex: '#DC2626', available: false },
  ],
  sizes: [
    { id: 's', name: 'Small', available: true },
    { id: 'm', name: 'Medium', available: true },
    { id: 'l', name: 'Large', available: true },
    { id: 'xl', name: 'Extra Large', available: false },
  ],
  stock: 15,
  sku: 'WH-001-BLK',
  brand: 'AudioTech',
  category: 'Electronics',
  tags: ['wireless', 'bluetooth', 'noise-cancelling', 'headphones'],
  warranty: '2 years',
  returnPolicy: '30 days',
  shipping: 'Free shipping on orders over $50',
};

const ProductDetailPage = () => {
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0]);
  const [selectedSize, setSelectedSize] = useState(mockProduct.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const [activeTab, setActiveTab] = useState<
    'description' | 'specifications' | 'reviews'
  >('description');

  const handleAddToCart = () => {
    console.log('Adding to cart:', {
      product: mockProduct,
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: mockProduct.name,
        text: mockProduct.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">
              Home
            </a>
            <span>/</span>
            <a href="#" className="hover:text-gray-700">
              {mockProduct.category}
            </a>
            <span>/</span>
            <a href="#" className="hover:text-gray-700">
              {mockProduct.brand}
            </a>
            <span>/</span>
            <span className="text-gray-900">{mockProduct.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <ProductImageGallery images={mockProduct.images} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-gray-500">
                  {mockProduct.brand}
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-500">
                  SKU: {mockProduct.sku}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {mockProduct.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(mockProduct.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {mockProduct.rating} ({mockProduct.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(mockProduct.price)}
                </span>
                {mockProduct.originalPrice > mockProduct.price && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(mockProduct.originalPrice)}
                    </span>
                    <span className="bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded">
                      {mockProduct.discount}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2 text-sm">
              {mockProduct.stock > 0 ? (
                <div className="flex items-center space-x-2 text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>In Stock ({mockProduct.stock} available)</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 text-red-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Out of Stock</span>
                </div>
              )}
            </div>

            {/* Variants */}
            <ProductVariants
              colors={mockProduct.colors}
              sizes={mockProduct.sizes}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              onColorChange={setSelectedColor}
              onSizeChange={setSelectedSize}
            />

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center space-x-3">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-gray-900 font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() =>
                      setQuantity(Math.min(mockProduct.stock, quantity + 1))
                    }
                    className="px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-500">
                  {mockProduct.stock} available
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <FiShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWishlistToggle}
                className={`px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 border ${
                  isWishlisted
                    ? 'bg-red-50 text-red-600 border-red-200'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <FiHeart
                  className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`}
                />
                <span>{isWishlisted ? 'Wishlisted' : 'Wishlist'}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleShare}
                className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <FiShare2 className="w-5 h-5" />
                <span>Share</span>
              </motion.button>
            </div>

            {/* Features */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Key Features
              </h3>
              <ul className="space-y-2">
                {mockProduct.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-sm text-gray-700"
                  >
                    <FiCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping & Returns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg">
                <FiTruck className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Free Shipping
                  </p>
                  <p className="text-xs text-gray-500">On orders over $50</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg">
                <FiRotateCcw className="w-6 h-6 text-green-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Easy Returns
                  </p>
                  <p className="text-xs text-gray-500">30 day return policy</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg">
                <FiShield className="w-6 h-6 text-purple-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Warranty</p>
                  <p className="text-xs text-gray-500">2 year warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {[
                { id: 'description', label: 'Description', icon: FiEye },
                {
                  id: 'specifications',
                  label: 'Specifications',
                  icon: FiMessageCircle,
                },
                { id: 'reviews', label: 'Reviews', icon: FiStar },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            <AnimatePresence mode="wait">
              {activeTab === 'description' && (
                <motion.div
                  key="description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {mockProduct.description}
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Experience crystal-clear sound with our advanced audio
                      technology. The ergonomic design ensures maximum comfort
                      during extended listening sessions, while the premium
                      materials provide durability and style.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'specifications' && (
                <motion.div
                  key="specifications"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(mockProduct.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-3 border-b border-gray-200"
                        >
                          <span className="font-medium text-gray-900">
                            {key}
                          </span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === 'reviews' && (
                <motion.div
                  key="reviews"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductReviews productId={mockProduct.id} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-16">
          <ProductRecommendations currentProductId={mockProduct.id} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

