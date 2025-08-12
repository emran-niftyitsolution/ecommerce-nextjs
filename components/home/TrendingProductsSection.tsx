'use client';

import ProductCard from '@/components/home/ProductCard';
import { motion } from 'framer-motion';
import { FiTrendingUp } from 'react-icons/fi';

const trendingProducts = [
  {
    id: 5,
    name: 'Smart Home Assistant',
    price: 79.99,
    originalPrice: 99.99,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 2156,
    badge: 'Trending',
    discount: '20% OFF',
  },
  {
    id: 6,
    name: 'Wireless Earbuds Pro',
    price: 149.99,
    originalPrice: 199.99,
    image:
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 1893,
    badge: 'Hot',
    discount: '25% OFF',
  },
];

interface TrendingProductsSectionProps {
  onAddToCart: (product: any) => void;
  onWishlist: () => void;
}

const TrendingProductsSection = ({
  onAddToCart,
  onWishlist,
}: TrendingProductsSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
            <FiTrendingUp className="mr-2" />
            Trending Now
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trending Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Most popular products that everyone is talking about
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trendingProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onAddToCart={onAddToCart}
              onWishlist={onWishlist}
              variant="trending"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProductsSection;
