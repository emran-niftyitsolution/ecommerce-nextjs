'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiArrowLeft, FiMail } from 'react-icons/fi';
import { toast } from 'react-toastify';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate password reset process
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success('Password reset email sent! Check your inbox.');
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <FiMail className="w-10 h-10 text-green-600" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Check Your Email
            </h2>

            <p className="text-gray-600 mb-8">
              We've sent a password reset link to <strong>{email}</strong>
            </p>

            <div className="space-y-4">
              <Button
                onClick={() => router.push('/auth/login')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Back to Login
              </Button>

              <Link
                href="/"
                className="block text-center text-blue-600 hover:text-blue-500"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link
            href="/auth/login"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <FiMail className="w-10 h-10 text-orange-600" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Forgot Password?
            </h2>

            <p className="text-gray-600">
              Enter your email address and we'll send you a link to reset your
              password
            </p>
          </motion.div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                leftIcon={<FiMail className="w-4 h-4" />}
                placeholder="Enter your email"
                required
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              loading={isLoading}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
            >
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Remember your password?{' '}
              <Link
                href="/auth/login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
