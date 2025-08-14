'use client';

import ModernProductList from '@/components/catalog/ModernProductList';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiArrowLeft, FiGrid, FiList } from 'react-icons/fi';
import { toast } from 'react-toastify';

// Sample products data
const sampleProducts = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 128,
    badge: 'Best Seller',
    category: 'Electronics',
    brand: 'AudioTech',
    inStock: true,
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    rating: 4.3,
    reviews: 89,
    badge: 'New',
    category: 'Electronics',
    brand: 'FitTech',
    inStock: true,
  },
  {
    id: 3,
    name: 'Premium Coffee Maker',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 256,
    badge: 'Top Rated',
    category: 'Home & Garden',
    brand: 'BrewMaster',
    inStock: true,
  },
  {
    id: 4,
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    rating: 4.2,
    reviews: 67,
    category: 'Fashion',
    brand: 'EcoWear',
    inStock: true,
  },
  {
    id: 5,
    name: 'Wireless Gaming Mouse',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 142,
    badge: 'Gaming',
    category: 'Electronics',
    brand: 'GameTech',
    inStock: true,
  },
  {
    id: 6,
    name: 'Yoga Mat Premium',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    rating: 4.4,
    reviews: 93,
    category: 'Sports',
    brand: 'FitLife',
    inStock: true,
  },
  {
    id: 7,
    name: 'Ultra HD Camera',
    price: 349.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 2341,
    badge: 'Popular',
    category: 'Electronics',
    brand: 'PhotoPro',
    inStock: true,
  },
  {
    id: 8,
    name: 'Designer Sunglasses',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 456,
    category: 'Fashion',
    brand: 'LuxStyle',
    inStock: true,
  },
];

const variants = [
  { key: 'inline-price', name: 'With Inline Price', description: 'Product cards with inline pricing and quick actions' },
  { key: 'simple', name: 'Simple', description: 'Clean, minimal product cards' },
  { key: 'cta-link', name: 'With CTA Link', description: 'Cards with call-to-action links' },
  { key: 'color-swatches', name: 'With Color Swatches', description: 'Products with color variant indicators' },
  { key: 'tall-images', name: 'With Tall Images', description: 'Vertical aspect ratio for fashion items' },
  { key: 'overlay-add', name: 'With Image Overlay & Add Button', description: 'Hover overlay with add to cart action' },
  { key: 'border-grid', name: 'With Border Grid', description: 'Bordered grid layout' },
  { key: 'supporting-text', name: 'With Supporting Text', description: 'Additional product information' },
  { key: 'full-details', name: 'Card with Full Details', description: 'Comprehensive product information with actions' },
];

export default function ProductListsShowcase() {
  const router = useRouter();
  const [selectedVariant, setSelectedVariant] = useState('inline-price');

  const handleAddToCart = (product: any) => {
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlist = (product: any) => {
    toast.success(`${product.name} added to wishlist!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => router.push('/')}
                className="flex items-center space-x-2"
              >
                <FiArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FiGrid className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Product Lists Showcase
                  </h1>
                  <p className="text-gray-600">
                    Modern product list components following Tailwind CSS UI Blocks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Variant Selector */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Choose a Variant</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {variants.map((variant) => (
              <motion.button
                key={variant.key}
                onClick={() => setSelectedVariant(variant.key)}
                className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                  selectedVariant === variant.key
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="font-medium text-gray-900 mb-1">{variant.name}</h3>
                <p className="text-sm text-gray-600">{variant.description}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Current Variant Display */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {variants.find(v => v.key === selectedVariant)?.name}
              </h2>
              <p className="text-gray-600">
                {variants.find(v => v.key === selectedVariant)?.description}
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Grid Layout:</span>
              <div className="flex border border-gray-200 rounded-lg">
                <button className="p-2 bg-blue-50 text-blue-600 border-r border-gray-200">
                  <FiGrid className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <FiList className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <ModernProductList
            products={sampleProducts}
            variant={selectedVariant as any}
            onAddToCart={handleAddToCart}
            onWishlist={handleWishlist}
          />
        </div>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FiGrid className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">9 Variants</h3>
            <p className="text-gray-600">
              Choose from 9 different product list styles, each optimized for different use cases and design preferences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <FiList className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsive Design</h3>
            <p className="text-gray-600">
              All variants are fully responsive and work perfectly on mobile, tablet, and desktop devices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FiGrid className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Elements</h3>
            <p className="text-gray-600">
              Built with Framer Motion for smooth animations and interactive hover states.
            </p>
          </motion.div>
        </div>

        {/* Code Reference */}
        <div className="mt-12 bg-gray-900 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Usage Example</h3>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white hover:text-gray-900"
              onClick={() => {
                navigator.clipboard.writeText(`
<ModernProductList
  products={products}
  variant="${selectedVariant}"
  onAddToCart={handleAddToCart}
  onWishlist={handleWishlist}
/>
                `);
                toast.success('Code copied to clipboard!');
              }}
            >
              Copy Code
            </Button>
          </div>
          <pre className="text-green-400 text-sm overflow-x-auto">
{`<ModernProductList
  products={products}
  variant="${selectedVariant}"
  onAddToCart={handleAddToCart}
  onWishlist={handleWishlist}
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
