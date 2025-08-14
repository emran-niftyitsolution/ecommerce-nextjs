'use client';

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FiArrowLeft, FiHeart } from 'react-icons/fi';

export default function WishlistPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-4 mb-8">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center space-x-2"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <FiHeart className="w-12 h-12 text-red-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Wishlist</h1>

          <p className="text-lg text-gray-600 mb-8">
            Save your favorite products for later!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => router.push('/products')}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Browse Products
            </Button>

            <Button variant="outline" onClick={() => router.push('/')}>
              Back to Home
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
