'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FiHeart, FiShoppingCart, FiEye, FiShare2, FiStar, FiTruck, FiShield, FiRefreshCw } from 'react-icons/fi';

interface ModernProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    badge?: string;
    category: string;
    inStock: boolean;
    fastShipping?: boolean;
    warranty?: boolean;
    freeReturns?: boolean;
  };
  onAddToCart: (product: any) => void;
  onWishlist: () => void;
  onQuickView: () => void;
  onShare: () => void;
}

const ModernProductCard = ({
  product,
  onAddToCart,
  onWishlist,
  onQuickView,
  onShare,
}: ModernProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    onWishlist();
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badge */}
        {product.badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-4 left-4 z-10"
          >
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
              {product.badge}
            </span>
          </motion.div>
        )}

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-4 z-10"
          >
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
              -{discountPercentage}%
            </span>
          </motion.div>
        )}

        {/* Stock Status */}
        <div className="absolute bottom-4 left-4 z-10">
          <span className={`text-xs px-2 py-1 rounded-full font-semibold shadow-lg ${
            product.inStock 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 flex flex-col space-y-2 z-20"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleWishlist();
            }}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              isWishlisted
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-red-50 hover:text-red-500'
            }`}
            title="Add to Wishlist"
          >
            <FiHeart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView();
            }}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
            title="Quick View"
          >
            <FiEye className="w-5 h-5" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onShare();
            }}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg text-gray-600 hover:bg-green-50 hover:text-green-600 transition-all duration-300"
            title="Share"
          >
            <FiShare2 className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="text-xs text-blue-600 font-medium mb-2 uppercase tracking-wide">
          {product.category}
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-900 text-lg mb-3 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviews.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          {discountPercentage > 0 && (
            <div className="text-sm text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
              Save ${(product.originalPrice! - product.price).toFixed(2)}
            </div>
          )}
        </div>

        {/* Features */}
        <div className="flex items-center justify-between mb-6 text-xs text-gray-500">
          {product.fastShipping && (
            <div className="flex items-center space-x-1">
              <FiTruck className="w-3 h-3" />
              <span>Fast Shipping</span>
            </div>
          )}
          {product.warranty && (
            <div className="flex items-center space-x-1">
              <FiShield className="w-3 h-3" />
              <span>Warranty</span>
            </div>
          )}
          {product.freeReturns && (
            <div className="flex items-center space-x-1">
              <FiRefreshCw className="w-3 h-3" />
              <span>Free Returns</span>
            </div>
          )}
        </div>

        {/* Add to Cart Button */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          disabled={!product.inStock}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 px-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
            product.inStock
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <span className="flex items-center justify-center">
            <FiShoppingCart className="mr-2 w-5 h-5" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </span>
        </motion.button>
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.05 : 0 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 pointer-events-none transition-opacity duration-300"
      />
    </motion.div>
  );
};

export default ModernProductCard;
