'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';

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
  };
  index: number;
  onAddToCart: (product: any) => void;
  onWishlist: () => void;
  variant?: 'featured' | 'trending';
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

  if (variant === 'trending') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group cursor-pointer"
        onClick={handleProductClick}
      >
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-blue-200">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />

            {/* Badge */}
            {product.badge && (
              <div className="absolute top-3 left-3">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                  {product.badge}
                </span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 sm:group-hover:opacity-100 lg:group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={e => {
                  e.stopPropagation();
                  onWishlist();
                }}
                className="w-8 h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 hover:text-red-500 transition-all duration-200 active:scale-95"
                title="Add to Wishlist"
              >
                <FiHeart className="w-4 h-4 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />
              </button>
              <button
                onClick={e => {
                  e.stopPropagation();
                  onAddToCart(product);
                }}
                className="w-8 h-8 sm:w-12 sm:h-12 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 active:scale-95"
                title="Add to Cart"
              >
                <FiShoppingCart className="w-4 h-4 sm:w-6 sm:h-6 lg:w-5 lg:h-5" />
              </button>
            </div>

            {/* Discount Badge */}
            {product.originalPrice && (
              <div className="absolute bottom-3 left-3">
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  % OFF
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base lg:text-lg leading-tight line-clamp-2">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center mb-2 sm:mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-500 ml-1 sm:ml-2">
                ({product.reviews})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm sm:text-base text-gray-500 line-through">
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer"
      onClick={handleProductClick}
    >
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-blue-200">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                {product.badge}
              </span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={e => {
                e.stopPropagation();
                onWishlist();
              }}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 hover:text-red-500 transition-all duration-200"
            >
              <FiHeart className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={e => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
            >
              <FiShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Discount Badge */}
          {product.originalPrice && (
            <div className="absolute bottom-3 left-3">
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                {Math.round(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                    100
                )}
                % OFF
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base lg:text-lg leading-tight line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2 sm:mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`w-3 h-3 sm:w-4 sm:h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-gray-500 ml-1 sm:ml-2">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm sm:text-base text-gray-500 line-through">
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
