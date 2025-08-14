'use client';

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FiArrowLeft, FiUser } from 'react-icons/fi';

export default function ProfilePage() {
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
          <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <FiUser className="w-12 h-12 text-blue-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Profile Page
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            User authentication and profile management coming soon!
          </p>

          <Button
            onClick={() => router.push('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
