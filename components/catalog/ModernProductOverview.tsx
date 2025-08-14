'use client';

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import {
  FiHeart,
  FiMinus,
  FiPlus,
  FiShare2,
  FiShield,
  FiStar,
  FiTruck,
  FiZoomIn,
} from 'react-icons/fi';
import { toast } from 'react-toastify';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  rating: number;
  reviews: number;
  description: string;
  category: string;
  brand: string;
  inStock: boolean;
  stockCount: number;
  colors: string[];
  sizes: string[];
  features: string[];
  specifications: { [key: string]: string };
}

interface ModernProductOverviewProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onWishlist: (product: Product) => void;
}

const ModernProductOverview = ({
  product,
  onAddToCart,
  onWishlist,
}: ModernProductOverviewProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= product.stockCount) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    onWishlist(product);
    toast.success(
      isWishlisted
        ? `${product.name} removed from wishlist!`
        : `${product.name} added to wishlist!`
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square relative overflow-hidden rounded-2xl bg-gray-100"
            >
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />

              {/* Zoom Button */}
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200">
                <FiZoomIn className="w-5 h-5 text-gray-700" />
              </button>

              {/* Badge */}
              {product.originalPrice && (
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    % OFF
                  </span>
                </div>
              )}
            </motion.div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square relative overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? 'border-blue-500'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  {product.category}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500">{product.brand}</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Color: {selectedColor}
              </h3>
              <div className="flex space-x-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                      selectedColor === color
                        ? 'border-blue-500 scale-110'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Size: {selectedSize}
              </h3>
              <div className="flex space-x-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Quantity
              </h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FiMinus className="w-4 h-4" />
                </button>
                <span className="w-16 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= product.stockCount}
                  className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FiPlus className="w-4 h-4" />
                </button>
                <span className="text-sm text-gray-500">
                  {product.stockCount} available
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>

              <Button
                onClick={handleWishlist}
                variant="outline"
                className="w-12 h-12 p-0"
              >
                <FiHeart
                  className={`w-5 h-5 ${
                    isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'
                  }`}
                />
              </Button>

              <Button
                onClick={handleShare}
                variant="outline"
                className="w-12 h-12 p-0"
              >
                <FiShare2 className="w-5 h-5 text-gray-600" />
              </Button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping & Returns */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <FiTruck className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Free Shipping
                    </p>
                    <p className="text-xs text-gray-500">On orders over $50</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <FiShield className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      30-Day Returns
                    </p>
                    <p className="text-xs text-gray-500">
                      Money back guarantee
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernProductOverview;
