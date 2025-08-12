'use client';

import ProductCard from '@/components/home/ProductCard';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const featuredProducts = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 129.99,
    originalPrice: 159.99,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 1247,
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    price: 199.99,
    originalPrice: 249.99,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 892,
    badge: 'New',
  },
  {
    id: 3,
    name: 'Premium Coffee Maker',
    price: 89.99,
    originalPrice: 119.99,
    image:
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 567,
    badge: 'Sale',
  },
  {
    id: 4,
    name: 'Ultra HD Camera',
    price: 349.99,
    originalPrice: 399.99,
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 2341,
    badge: 'Popular',
  },
];

interface FeaturedProductsSectionProps {
  onAddToCart: (product: any) => void;
  onWishlist: () => void;
}

const FeaturedProductsSection = ({
  onAddToCart,
  onWishlist,
}: FeaturedProductsSectionProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-medium mb-4">
            <FiAward className="mr-2" />
            Featured Collection
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked products for you with the best quality and prices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onAddToCart={onAddToCart}
              onWishlist={onWishlist}
              variant="featured"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
