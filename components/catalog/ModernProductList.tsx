'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';
import { toast } from 'react-toastify';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  category: string;
  brand: string;
  inStock: boolean;
}

interface ModernProductListProps {
  products: Product[];
  variant?: 'inline-price' | 'simple' | 'cta-link' | 'color-swatches' | 'tall-images' | 'overlay-add' | 'border-grid' | 'supporting-text' | 'full-details';
  onAddToCart?: (product: Product) => void;
  onWishlist?: (product: Product) => void;
}

const ModernProductList = ({
  products,
  variant = 'inline-price',
  onAddToCart,
  onWishlist,
}: ModernProductListProps) => {
  const router = useRouter();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const handleProductClick = (productId: number) => {
    router.push(`/products/${productId}`);
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    onAddToCart?.(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlist = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    onWishlist?.(product);
    toast.success(`${product.name} added to wishlist!`);
  };

  const renderInlinePrice = (product: Product) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setHoveredProduct(product.id)}
      onMouseLeave={() => setHoveredProduct(null)}
      onClick={() => handleProductClick(product.id)}
    >
      {/* Image Container */}
      <div className="aspect-square relative overflow-hidden">
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
            onClick={(e) => handleWishlist(e, product)}
            className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 hover:text-red-500 transition-all duration-200"
          >
            <FiHeart className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => handleAddToCart(e, product)}
            className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
          >
            <FiShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500 mb-2">{product.brand}</p>
          </div>
        </div>

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
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-900">${product.price}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <span className="text-xs text-green-600 font-medium">
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </motion.div>
  );

  const renderSimple = (product: Product) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group cursor-pointer"
      onClick={() => handleProductClick(product.id)}
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

  const renderCtaLink = (product: Product) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group cursor-pointer"
      onClick={() => handleProductClick(product.id)}
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
      <p className="font-semibold text-gray-900 mb-2">${product.price}</p>
      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
        View Details →
      </button>
    </motion.div>
  );

  const renderColorSwatches = (product: Product) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group cursor-pointer"
      onClick={() => handleProductClick(product.id)}
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
      <p className="font-semibold text-gray-900 mb-2">${product.price}</p>
      <div className="flex space-x-1">
        {['bg-black', 'bg-blue-500', 'bg-red-500', 'bg-green-500'].map((color, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full border border-gray-200 ${color}`}
          />
        ))}
      </div>
    </motion.div>
  );

  const renderTallImages = (product: Product) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group cursor-pointer"
      onClick={() => handleProductClick(product.id)}
    >
      <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-3">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
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

  const renderOverlayAdd = (product: Product) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative cursor-pointer"
      onClick={() => handleProductClick(product.id)}
    >
      <div className="aspect-square relative overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <button
            onClick={(e) => handleAddToCart(e, product)}
            className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <h3 className="font-medium text-gray-900 text-sm mt-3 mb-1 line-clamp-2">
        {product.name}
      </h3>
      <p className="font-semibold text-gray-900">${product.price}</p>
    </motion.div>
  );

  const renderBorderGrid = (product: Product) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group cursor-pointer border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors duration-200"
      onClick={() => handleProductClick(product.id)}
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

  const renderSupportingText = (product: Product) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group cursor-pointer"
      onClick={() => handleProductClick(product.id)}
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
      <p className="text-xs text-gray-500 mb-2">{product.brand}</p>
      <p className="font-semibold text-gray-900">${product.price}</p>
    </motion.div>
  );

  const renderFullDetails = (product: Product) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
      onClick={() => handleProductClick(product.id)}
    >
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-2">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            {product.category}
          </p>
          <h3 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500">{product.brand}</p>
        </div>

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
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-900">${product.price}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <span className={`text-xs font-medium ${
            product.inStock ? 'text-green-600' : 'text-red-600'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        <div className="flex space-x-2 mt-3">
          <button
            onClick={(e) => handleAddToCart(e, product)}
            className="flex-1 bg-blue-600 text-white text-sm py-2 px-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Add to Cart
          </button>
          <button
            onClick={(e) => handleWishlist(e, product)}
            className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <FiHeart className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  const renderProduct = (product: Product) => {
    switch (variant) {
      case 'simple':
        return renderSimple(product);
      case 'cta-link':
        return renderCtaLink(product);
      case 'color-swatches':
        return renderColorSwatches(product);
      case 'tall-images':
        return renderTallImages(product);
      case 'overlay-add':
        return renderOverlayAdd(product);
      case 'border-grid':
        return renderBorderGrid(product);
      case 'supporting-text':
        return renderSupportingText(product);
      case 'full-details':
        return renderFullDetails(product);
      default:
        return renderInlinePrice(product);
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          {renderProduct(product)}
        </motion.div>
      ))}
    </div>
  );
};

export default ModernProductList;
