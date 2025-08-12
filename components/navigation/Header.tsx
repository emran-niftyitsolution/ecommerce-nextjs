'use client';

import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/Dropdown';
import { Input } from '@/components/ui/Input';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { openCart } from '@/lib/store/slices/cartSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  FiChevronDown,
  FiHeart,
  FiHelpCircle,
  FiLogOut,
  FiMenu,
  FiRefreshCw,
  FiSearch,
  FiSettings,
  FiShield,
  FiShoppingCart,
  FiTruck,
  FiUser,
  FiX,
} from 'react-icons/fi';
import { toast } from 'react-toastify';

const Header = () => {
  const dispatch = useAppDispatch();
  const { totalItems } = useAppSelector(state => state.cart);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories', hasDropdown: true },
    { name: 'Deals', href: '/deals' },
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Brands', href: '/brands' },
    { name: 'About', href: '/about' },
  ];

  const categories = [
    { name: 'Electronics', icon: '📱', href: '/category/electronics' },
    { name: 'Fashion', icon: '👕', href: '/category/fashion' },
    { name: 'Home & Garden', icon: '🏠', href: '/category/home-garden' },
    { name: 'Sports', icon: '⚽', href: '/category/sports' },
    { name: 'Books', icon: '📚', href: '/category/books' },
    { name: 'Beauty', icon: '💄', href: '/category/beauty' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info('Search functionality coming soon!');
  };

  const handleCartClick = () => {
    dispatch(openCart());
  };

  const handleWishlistClick = () => {
    toast.info('Wishlist functionality coming soon!');
  };

  const handleUserAction = (action: string) => {
    toast.info(`${action} functionality coming soon!`);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <FiTruck className="w-4 h-4 mr-1" />
                Free shipping on orders over $50
              </span>
              <span className="hidden md:flex items-center">
                <FiShield className="w-4 h-4 mr-1" />
                Secure payment
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden md:block">
                Customer Support: 1-800-SHOP
              </span>
              <span className="flex items-center">
                <FiRefreshCw className="w-4 h-4 mr-1" />
                30-day returns
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            ShopHub
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationItems.map(item => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center px-3 py-2 rounded-lg hover:bg-blue-50 active:bg-blue-100"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <FiChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform" />
                  )}
                </a>

                {/* Categories Dropdown */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        All Categories
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {categories.map(category => (
                          <a
                            key={category.name}
                            href={category.href}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <span className="text-2xl mr-3">
                              {category.icon}
                            </span>
                            <div>
                              <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {category.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                Explore products
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-4 sm:mx-6 lg:mx-8 hidden md:block">
            <form onSubmit={handleSearch} className="relative">
              <Input
                placeholder="Search for products..."
                leftIcon={<FiSearch className="w-4 h-4 sm:w-5 sm:h-5" />}
                className={`w-full transition-all duration-300 border-gray-300 ${
                  isSearchFocused ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <AnimatePresence>
                {isSearchFocused && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 p-4"
                  >
                    <div className="text-sm text-gray-500 mb-2">
                      Popular searches:
                    </div>
                    <div className="space-y-2">
                      {[
                        'iPhone 15',
                        'Wireless Earbuds',
                        'Smart Watch',
                        'Laptop',
                      ].map(term => (
                        <button
                          key={term}
                          className="flex items-center w-full p-2 rounded-lg hover:bg-gray-50 text-left"
                        >
                          <FiSearch className="w-4 h-4 text-gray-400 mr-2" />
                          {term}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleWishlistClick}
              className="relative"
            >
              <FiHeart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCartClick}
              className="relative"
            >
              <FiShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>

            {/* User Menu - Radix UI Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <FiUser className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {/* User Profile Section */}
                <div className="p-4 border-b border-gray-100">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <FiUser className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      Guest User
                    </div>
                    <div className="text-xs text-gray-500">
                      Sign in to access your account
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <DropdownMenuItem
                  onClick={() => handleUserAction('Sign In')}
                  className="flex items-center"
                >
                  <FiUser className="w-4 h-4 mr-2" />
                  Sign In
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleUserAction('Create Account')}
                  className="flex items-center"
                >
                  <FiUser className="w-4 h-4 mr-2" />
                  Create Account
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={() => handleUserAction('Settings')}
                  className="flex items-center"
                >
                  <FiSettings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleUserAction('Help & Support')}
                  className="flex items-center"
                >
                  <FiHelpCircle className="w-4 h-4 mr-2" />
                  Help & Support
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={() => handleUserAction('Logout')}
                  className="flex items-center text-red-600 hover:text-red-700"
                >
                  <FiLogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-5 h-5" />
              ) : (
                <FiMenu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch}>
                <Input
                  placeholder="Search for products..."
                  leftIcon={<FiSearch className="w-4 h-4" />}
                  className="w-full"
                />
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigationItems.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Mobile Categories */}
              <div className="border-t border-gray-100 pt-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Categories
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map(category => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-xl mr-2">{category.icon}</span>
                      <span className="text-sm font-medium text-gray-900">
                        {category.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Action Buttons */}
              <div className="border-t border-gray-100 pt-4 space-y-2">
                <button
                  onClick={handleWishlistClick}
                  className="w-full flex items-center justify-center py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <FiHeart className="w-5 h-5 mr-2" />
                  Wishlist (3)
                </button>
                <button
                  onClick={handleCartClick}
                  className="w-full flex items-center justify-center py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <FiShoppingCart className="w-5 h-5 mr-2" />
                  Cart ({totalItems})
                </button>
                <button
                  onClick={() => handleUserAction('Sign In')}
                  className="w-full flex items-center justify-center py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <FiUser className="w-5 h-5 mr-2" />
                  Sign In
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
