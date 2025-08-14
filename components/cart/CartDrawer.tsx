'use client';

import { Button } from '@/components/ui/Button';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import {
  clearCart,
  closeCart,
  removeFromCart,
  updateQuantity,
} from '@/lib/store/slices/cartSlice';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiArrowRight,
  FiMinus,
  FiPlus,
  FiRefreshCw,
  FiShield,
  FiShoppingCart,
  FiTrash2,
  FiTruck,
  FiX,
} from 'react-icons/fi';
import { toast } from 'react-toastify';

const CartDrawer = () => {
  const dispatch = useAppDispatch();
  const { isOpen, items, totalItems, subtotal, tax, shipping, total } =
    useAppSelector(state => state.cart);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart(id));
      toast.info('Item removed from cart');
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
    toast.success('Item removed from cart');
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.info('Cart cleared');
  };

  const handleCheckout = () => {
    toast.info('Checkout functionality coming soon!');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(closeCart())}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Cart Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-sm md:max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <FiShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                <h2 className="text-lg md:text-xl font-bold text-gray-900">
                  Shopping Cart
                </h2>
                {totalItems > 0 && (
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={() => dispatch(closeCart())}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              {items.length === 0 ? (
                <div className="text-center py-8 md:py-12">
                  <div className="text-4xl md:text-6xl mb-4">🛒</div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm md:text-base">
                    Add some products to get started with your shopping
                  </p>
                  <Button
                    onClick={() => dispatch(closeCart())}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-3 md:space-y-4">
                  {items.map(item => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-gray-50 rounded-xl p-3 md:p-4"
                    >
                      <div className="flex space-x-3 md:space-x-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm md:text-base font-semibold text-gray-900 truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-500 mb-2">
                            {item.category}
                          </p>

                          {/* Price */}
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="text-base md:text-lg font-bold text-gray-900">
                              ${item.price}
                            </span>
                            {item.originalPrice &&
                              item.originalPrice > item.price && (
                                <span className="text-sm text-gray-400 line-through">
                                  ${item.originalPrice}
                                </span>
                              )}
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity - 1
                                  )
                                }
                                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                              >
                                <FiMinus className="w-3 h-3" />
                              </button>
                              <span className="w-6 md:w-8 text-center text-sm font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity + 1
                                  )
                                }
                                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                              >
                                <FiPlus className="w-3 h-3" />
                              </button>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center space-x-1 md:space-x-2">
                              <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="p-1.5 md:p-2 text-gray-400 hover:text-red-500 transition-colors"
                                title="Remove item"
                              >
                                <FiTrash2 className="w-3 h-3 md:w-4 md:h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Summary */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 p-4 md:p-6 space-y-4">
                {/* Trust Indicators */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <span className="flex items-center">
                      <FiTruck className="w-3 h-3 mr-1" />
                      <span className="hidden sm:inline">Free shipping</span>
                    </span>
                    <span className="flex items-center">
                      <FiShield className="w-3 h-3 mr-1" />
                      <span className="hidden sm:inline">Secure checkout</span>
                    </span>
                  </div>
                  <span className="flex items-center">
                    <FiRefreshCw className="w-3 h-3 mr-1" />
                    <span className="hidden sm:inline">Easy returns</span>
                  </span>
                </div>

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      Subtotal ({totalItems} items)
                    </span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                  >
                    Proceed to Checkout
                    <FiArrowRight className="ml-2" />
                  </Button>
                  <Button
                    onClick={handleClearCart}
                    variant="outline"
                    className="w-full"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
