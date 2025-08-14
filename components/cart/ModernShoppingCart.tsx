'use client';

import { Button } from '@/components/ui/Button';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import {
  FiArrowLeft,
  FiLock,
  FiMinus,
  FiPlus,
  FiShield,
  FiTrash2,
  FiTruck,
} from 'react-icons/fi';
import { toast } from 'react-toastify';

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  color?: string;
  size?: string;
  inStock: boolean;
}

interface ModernShoppingCartProps {
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onContinueShopping: () => void;
  onCheckout: () => void;
}

const ModernShoppingCart = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onContinueShopping,
  onCheckout,
}: ModernShoppingCartProps) => {
  const [isUpdating, setIsUpdating] = useState<number | null>(null);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const handleQuantityChange = async (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setIsUpdating(id);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    onUpdateQuantity(id, newQuantity);
    setIsUpdating(null);
  };

  const handleRemoveItem = async (id: number) => {
    setIsUpdating(id);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    onRemoveItem(id);
    setIsUpdating(null);
    toast.success('Item removed from cart');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiTruck className="w-12 h-12 text-gray-400" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your cart is empty
            </h2>

            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>

            <Button
              onClick={onContinueShopping}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
            >
              Start Shopping
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm">
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Shopping Cart ({items.length})
                  </h1>
                  <Button
                    variant="ghost"
                    onClick={onContinueShopping}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                  >
                    <FiArrowLeft className="w-4 h-4" />
                    <span>Continue Shopping</span>
                  </Button>
                </div>
              </div>

              {/* Items List */}
              <div className="divide-y divide-gray-200">
                <AnimatePresence>
                  {items.map(item => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="p-6"
                    >
                      <div className="flex space-x-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-lg font-medium text-gray-900 mb-1">
                                {item.name}
                              </h3>

                              {item.color && (
                                <p className="text-sm text-gray-500 mb-1">
                                  Color: {item.color}
                                </p>
                              )}

                              {item.size && (
                                <p className="text-sm text-gray-500 mb-2">
                                  Size: {item.size}
                                </p>
                              )}

                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                  <button
                                    onClick={() =>
                                      handleQuantityChange(
                                        item.id,
                                        item.quantity - 1
                                      )
                                    }
                                    disabled={
                                      item.quantity <= 1 ||
                                      isUpdating === item.id
                                    }
                                    className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                  >
                                    <FiMinus className="w-3 h-3" />
                                  </button>

                                  <span className="w-12 text-center font-medium">
                                    {isUpdating === item.id
                                      ? '...'
                                      : item.quantity}
                                  </span>

                                  <button
                                    onClick={() =>
                                      handleQuantityChange(
                                        item.id,
                                        item.quantity + 1
                                      )
                                    }
                                    disabled={
                                      !item.inStock || isUpdating === item.id
                                    }
                                    className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                  >
                                    <FiPlus className="w-3 h-3" />
                                  </button>
                                </div>

                                <span
                                  className={`text-sm ${
                                    item.inStock
                                      ? 'text-green-600'
                                      : 'text-red-600'
                                  }`}
                                >
                                  {item.inStock ? 'In Stock' : 'Out of Stock'}
                                </span>
                              </div>
                            </div>

                            {/* Price and Remove */}
                            <div className="flex flex-col items-end space-y-2">
                              <div className="text-right">
                                <p className="text-lg font-semibold text-gray-900">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </p>
                                {item.originalPrice && (
                                  <p className="text-sm text-gray-500 line-through">
                                    $
                                    {(
                                      item.originalPrice * item.quantity
                                    ).toFixed(2)}
                                  </p>
                                )}
                              </div>

                              <button
                                onClick={() => handleRemoveItem(item.id)}
                                disabled={isUpdating === item.id}
                                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                              >
                                <FiTrash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm sticky top-8">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  Order Summary
                </h2>

                {/* Summary Items */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <FiTruck className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-blue-900">
                        Free shipping on orders over $50
                      </p>
                      <p className="text-xs text-blue-700">
                        {subtotal < 50
                          ? `Add $${(50 - subtotal).toFixed(2)} more for free shipping`
                          : 'You qualify for free shipping!'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button
                  onClick={onCheckout}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold mb-4"
                >
                  <FiLock className="w-5 h-5 mr-2" />
                  Proceed to Checkout
                </Button>

                {/* Security Info */}
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <FiShield className="w-4 h-4" />
                  <span>Secure checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernShoppingCart;
