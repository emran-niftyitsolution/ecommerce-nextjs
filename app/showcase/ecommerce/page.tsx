'use client';

import ModernShoppingCart from '@/components/cart/ModernShoppingCart';
import ModernProductList from '@/components/catalog/ModernProductList';
import ModernProductOverview from '@/components/catalog/ModernProductOverview';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiArrowLeft, FiGrid, FiShoppingCart, FiStar } from 'react-icons/fi';
import { toast } from 'react-toastify';

// Sample products data
const sampleProducts = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 89.99,
    originalPrice: 129.99,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
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
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
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
    image:
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop',
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
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    rating: 4.2,
    reviews: 67,
    category: 'Fashion',
    brand: 'EcoWear',
    inStock: true,
  },
];

// Sample product for overview
const sampleProductOverview = {
  id: 1,
  name: 'Wireless Bluetooth Headphones',
  price: 89.99,
  originalPrice: 129.99,
  images: [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&h=600&fit=crop',
  ],
  rating: 4.5,
  reviews: 128,
  description:
    'Experience crystal-clear sound with these premium wireless headphones. Features active noise cancellation, 30-hour battery life, and comfortable over-ear design perfect for music lovers and professionals alike.',
  category: 'Electronics',
  brand: 'AudioTech',
  inStock: true,
  stockCount: 15,
  colors: ['#000000', '#FFFFFF', '#3B82F6', '#EF4444'],
  sizes: ['One Size'],
  features: [
    'Active Noise Cancellation',
    '30-hour battery life',
    'Bluetooth 5.0',
    'Built-in microphone',
    'Foldable design',
    'Premium materials',
  ],
  specifications: {
    'Battery Life': '30 hours',
    Connectivity: 'Bluetooth 5.0',
    Weight: '250g',
    'Driver Size': '40mm',
    'Frequency Response': '20Hz-20kHz',
  },
};

// Sample cart items
const sampleCartItems = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 89.99,
    originalPrice: 129.99,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    quantity: 1,
    color: 'Black',
    size: 'One Size',
    inStock: true,
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    price: 199.99,
    originalPrice: 249.99,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    quantity: 2,
    color: 'Blue',
    size: 'Large',
    inStock: true,
  },
];

const components = [
  {
    key: 'product-lists',
    name: 'Product Lists',
    description: 'Modern product grid layouts with various styles',
    icon: FiGrid,
    color: 'blue',
  },
  {
    key: 'product-overview',
    name: 'Product Overview',
    description: 'Detailed product page with image gallery and variants',
    icon: FiStar,
    color: 'green',
  },
  {
    key: 'shopping-cart',
    name: 'Shopping Cart',
    description: 'Complete cart experience with order summary',
    icon: FiShoppingCart,
    color: 'purple',
  },
];

export default function EcommerceShowcase() {
  const router = useRouter();
  const [selectedComponent, setSelectedComponent] = useState('product-lists');
  const [cartItems, setCartItems] = useState(sampleCartItems);

  const handleAddToCart = (product: any) => {
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlist = (product: any) => {
    toast.success(`${product.name} added to wishlist!`);
  };

  const handleCartUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleCartRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleContinueShopping = () => {
    setSelectedComponent('product-lists');
  };

  const handleCheckout = () => {
    toast.success('Proceeding to checkout...');
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'product-lists':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Product Lists - Inline Price Variant
              </h2>
              <ModernProductList
                products={sampleProducts}
                variant="inline-price"
                onAddToCart={handleAddToCart}
                onWishlist={handleWishlist}
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Product Lists - Simple Variant
              </h2>
              <ModernProductList
                products={sampleProducts}
                variant="simple"
                onAddToCart={handleAddToCart}
                onWishlist={handleWishlist}
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Product Lists - Full Details Variant
              </h2>
              <ModernProductList
                products={sampleProducts}
                variant="full-details"
                onAddToCart={handleAddToCart}
                onWishlist={handleWishlist}
              />
            </div>
          </div>
        );

      case 'product-overview':
        return (
          <ModernProductOverview
            product={sampleProductOverview}
            onAddToCart={(product, quantity) => {
              toast.success(`${quantity}x ${product.name} added to cart!`);
            }}
            onWishlist={handleWishlist}
          />
        );

      case 'shopping-cart':
        return (
          <ModernShoppingCart
            items={cartItems}
            onUpdateQuantity={handleCartUpdateQuantity}
            onRemoveItem={handleCartRemoveItem}
            onContinueShopping={handleContinueShopping}
            onCheckout={handleCheckout}
          />
        );

      default:
        return null;
    }
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
                  <FiShoppingCart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Ecommerce Components Showcase
                  </h1>
                  <p className="text-gray-600">
                    Modern ecommerce components following Tailwind CSS UI Blocks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Component Selector */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Choose a Component
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {components.map(component => (
              <motion.button
                key={component.key}
                onClick={() => setSelectedComponent(component.key)}
                className={`p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                  selectedComponent === component.key
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className={`w-12 h-12 bg-${component.color}-100 rounded-lg flex items-center justify-center mb-4`}
                >
                  <component.icon
                    className={`w-6 h-6 text-${component.color}-600`}
                  />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">
                  {component.name}
                </h3>
                <p className="text-sm text-gray-600">{component.description}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Component Display */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          {renderComponent()}
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              9 Product List Variants
            </h3>
            <p className="text-gray-600">
              Choose from 9 different product list styles, each optimized for
              different use cases and design preferences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <FiStar className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Product Overview
            </h3>
            <p className="text-gray-600">
              Complete product pages with image galleries, variant selection,
              and detailed information.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FiShoppingCart className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Shopping Cart
            </h3>
            <p className="text-gray-600">
              Full-featured cart with quantity controls, order summary, and
              secure checkout flow.
            </p>
          </motion.div>
        </div>

        {/* Code Reference */}
        <div className="mt-12 bg-gray-900 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Usage Examples</h3>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white hover:text-gray-900"
              onClick={() => {
                navigator.clipboard.writeText(`
// Product Lists
<ModernProductList
  products={products}
  variant="inline-price"
  onAddToCart={handleAddToCart}
  onWishlist={handleWishlist}
/>

// Product Overview
<ModernProductOverview
  product={product}
  onAddToCart={handleAddToCart}
  onWishlist={handleWishlist}
/>

// Shopping Cart
<ModernShoppingCart
  items={cartItems}
  onUpdateQuantity={handleUpdateQuantity}
  onRemoveItem={handleRemoveItem}
  onContinueShopping={handleContinueShopping}
  onCheckout={handleCheckout}
/>
                `);
                toast.success('Code copied to clipboard!');
              }}
            >
              Copy Code
            </Button>
          </div>
          <pre className="text-green-400 text-sm overflow-x-auto">
            {`// Product Lists
<ModernProductList
  products={products}
  variant="inline-price"
  onAddToCart={handleAddToCart}
  onWishlist={handleWishlist}
/>

// Product Overview
<ModernProductOverview
  product={product}
  onAddToCart={handleAddToCart}
  onWishlist={handleWishlist}
/>

// Shopping Cart
<ModernShoppingCart
  items={cartItems}
  onUpdateQuantity={handleUpdateQuantity}
  onRemoveItem={handleRemoveItem}
  onContinueShopping={handleContinueShopping}
  onCheckout={handleCheckout}
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
