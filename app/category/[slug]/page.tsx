'use client';

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FiArrowLeft, FiGrid } from 'react-icons/fi';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const router = useRouter();
  const { slug } = params;

  // Convert slug to readable category name
  const getCategoryName = (slug: string) => {
    const categoryMap: { [key: string]: string } = {
      electronics: 'Electronics',
      fashion: 'Fashion',
      'home-garden': 'Home & Garden',
      sports: 'Sports',
      books: 'Books',
      beauty: 'Beauty',
    };
    return categoryMap[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
  };

  const categoryName = getCategoryName(slug);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="flex items-center space-x-2"
            >
              <FiArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FiGrid className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {categoryName}
                </h1>
                <p className="text-gray-600">
                  Explore our {categoryName.toLowerCase()} collection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <FiGrid className="w-12 h-12 text-blue-600" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {categoryName} Category
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover amazing {categoryName.toLowerCase()} products with great
            prices and quality. Our collection is carefully curated to meet your
            needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => router.push('/products')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Browse All Products
            </Button>

            <Button variant="outline" onClick={() => router.push('/')}>
              Back to Home
            </Button>
          </div>
        </motion.div>

        {/* Placeholder for products */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <FiGrid className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Products Coming Soon
            </h3>
            <p className="text-gray-600">
              We're working on bringing you the best{' '}
              {categoryName.toLowerCase()} products.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
