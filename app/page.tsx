'use client';

import CategoriesSection from '@/components/home/CategoriesSection';
import FeaturedProductsSection from '@/components/home/FeaturedProductsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import TrendingProductsSection from '@/components/home/TrendingProductsSection';
import Footer from '@/components/navigation/Footer';
import Header from '@/components/navigation/Header';
import { useAppDispatch } from '@/lib/store';
import { addToCart } from '@/lib/store/slices/cartSlice';
import { toast } from 'react-toastify';

export default function Home() {
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    badge?: string;
  }) => {
    dispatch(
      addToCart({
        id: product.id.toString(),
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        category: 'Electronics',
        quantity: 1,
        rating: product.rating,
        reviews: product.reviews,
        badge: product.badge,
      })
    );
    toast.success(`${product.name} added to cart! 🛒`);
  };

  const handleWishlist = () => {
    toast.info('Added to wishlist! ❤️');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <StatsSection />
      <FeaturedProductsSection
        onAddToCart={handleAddToCart}
        onWishlist={handleWishlist}
      />
      <TrendingProductsSection
        onAddToCart={handleAddToCart}
        onWishlist={handleWishlist}
      />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
