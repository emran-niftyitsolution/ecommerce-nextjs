'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';
import { toast } from 'react-toastify';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    badge?: string;
    category?: string;
    brand?: string;
    inStock?: boolean;
  };
  index: number;
  onAddToCart: (product: any) => void;
  onWishlist: () => void;
  variant?: 'featured' | 'trending' | 'simple' | 'detailed';
}

const ProductCard = ({
  product,
  index,
  onAddToCart,
  onWishlist,
  variant = 'featured',
}: ProductCardProps) => {
  const router = useRouter();

  const handleProductClick = () => {
    router.push(`/products/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    onWishlist();
    toast.success(`${product.name} added to wishlist!`);
  };

  const getDiscountPercentage = () => {
    if (!product.originalPrice) return 0;
    return Math.round(
      ((product.originalPrice - product.price) / product.originalPrice) * 100
    );
  };

  // Simple variant - minimal design
  if (variant === 'simple') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="group cursor-pointer"
        onClick={handleProductClick}
      >
        <div className="aspect-square relative overflow-hidden rounded-lg mb-3">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="font-semibold text-gray-900">${product.price}</p>
      </motion.div>
    );
  }

  // Detailed variant - full information
  if (variant === 'detailed') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300"
        onClick={handleProductClick}
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                {product.badge}
              </span>
            </div>
          )}

          {/* Discount Badge */}
          {product.originalPrice && getDiscountPercentage() > 0 && (
            <div className="absolute top-3 right-3">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                {getDiscountPercentage()}% OFF
              </span>
            </div>
          )}

          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={handleWishlist}
              className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 hover:text-red-500 transition-all duration-200"
            >
              <FiHeart className="w-4 h-4" />
            </button>
            <button
              onClick={handleAddToCart}
              className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
            >
              <FiShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Category and Brand */}
          {product.category && (
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              {product.category}
            </p>
          )}

          <h3 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
            {product.name}
          </h3>

          {product.brand && (
            <p className="text-xs text-gray-500 mb-2">{product.brand}</p>
          )}

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <span
              className={`text-xs font-medium ${
                product.inStock ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2 mt-3">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-1 bg-blue-600 text-white text-sm py-2 px-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add to Cart
            </button>
            <button
              onClick={handleWishlist}
              className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <FiHeart className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  // Trending variant - compact design
  if (variant === 'trending') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="group cursor-pointer"
        onClick={handleProductClick}
      >
        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Badge */}
            {product.badge && (
              <div className="absolute top-3 left-3">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  {product.badge}
                </span>
              </div>
            )}

            {/* Quick Actions */}
            <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button
                onClick={handleWishlist}
                className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 hover:text-red-500 transition-all duration-200"
              >
                <FiHeart className="w-4 h-4" />
              </button>
              <button
                onClick={handleAddToCart}
                className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
              >
                <FiShoppingCart className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">
                ({product.reviews})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Default featured variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group cursor-pointer"
      onClick={handleProductClick}
    >
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3">
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                {product.badge}
              </span>
            </div>
          )}

          {/* Discount Badge */}
          {product.originalPrice && getDiscountPercentage() > 0 && (
            <div className="absolute bottom-3 left-3">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                {getDiscountPercentage()}% OFF
              </span>
            </div>
          )}

          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={handleWishlist}
              className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 hover:text-red-500 transition-all duration-200"
            >
              <FiHeart className="w-4 h-4" />
            </button>
            <button
              onClick={handleAddToCart}
              className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
            >
              <FiShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-medium text-gray-900 text-sm mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
