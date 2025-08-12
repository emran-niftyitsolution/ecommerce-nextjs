'use client';

import { Button } from '@/components/ui/Button';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  FiAward,
  FiChevronRight,
  FiClock,
  FiGift,
  FiGrid,
  FiHeart,
  FiHelpCircle,
  FiHome,
  FiLogOut,
  FiMapPin,
  FiSettings,
  FiShoppingCart,
  FiStar,
  FiTrendingUp,
  FiUser,
  FiX,
} from 'react-icons/fi';
import { toast } from 'react-toastify';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  type?: 'navigation' | 'filters' | 'account';
}

const Sidebar = ({ isOpen, onClose, type = 'navigation' }: SidebarProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const navigationItems = [
    { name: 'Home', icon: FiHome, href: '/' },
    { name: 'Categories', icon: FiGrid, href: '/categories', hasSubmenu: true },
    { name: 'Deals', icon: FiGift, href: '/deals' },
    { name: 'New Arrivals', icon: FiTrendingUp, href: '/new-arrivals' },
    { name: 'Brands', icon: FiAward, href: '/brands' },
    { name: 'About', icon: FiHelpCircle, href: '/about' },
  ];

  const categories = [
    { name: 'Electronics', icon: '📱', count: '2.5k+' },
    { name: 'Fashion', icon: '👕', count: '1.8k+' },
    { name: 'Home & Garden', icon: '🏠', count: '3.2k+' },
    { name: 'Sports', icon: '⚽', count: '950+' },
    { name: 'Books', icon: '📚', count: '1.2k+' },
    { name: 'Beauty', icon: '💄', count: '750+' },
  ];

  const accountItems = [
    { name: 'My Profile', icon: FiUser, href: '/account/profile' },
    { name: 'Order History', icon: FiClock, href: '/account/orders' },
    { name: 'Wishlist', icon: FiHeart, href: '/account/wishlist' },
    { name: 'Addresses', icon: FiMapPin, href: '/account/addresses' },
    { name: 'Settings', icon: FiSettings, href: '/account/settings' },
    { name: 'Help & Support', icon: FiHelpCircle, href: '/help' },
  ];

  const filterOptions = {
    price: [
      { label: 'Under $25', value: '0-25' },
      { label: '$25 - $50', value: '25-50' },
      { label: '$50 - $100', value: '50-100' },
      { label: '$100 - $200', value: '100-200' },
      { label: 'Over $200', value: '200+' },
    ],
    rating: [
      { label: '4 stars & up', value: '4', icon: FiStar },
      { label: '3 stars & up', value: '3', icon: FiStar },
      { label: '2 stars & up', value: '2', icon: FiStar },
    ],
    brand: [
      'Apple',
      'Samsung',
      'Sony',
      'LG',
      'Nike',
      'Adidas',
      'Canon',
      'Dell',
    ],
    availability: [
      { label: 'In Stock', value: 'in-stock' },
      { label: 'Free Shipping', value: 'free-shipping' },
      { label: 'Same Day Delivery', value: 'same-day' },
    ],
  };

  const handleItemClick = (item: any) => {
    if (item.hasSubmenu) {
      setActiveSection(activeSection === item.name ? null : item.name);
    } else {
      toast.info(`${item.name} functionality coming soon!`);
      onClose();
    }
  };

  const renderNavigationContent = () => (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Navigation</h2>
        <nav className="space-y-2">
          {navigationItems.map(item => (
            <div key={item.name}>
              <button
                onClick={() => handleItemClick(item)}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex items-center">
                  <item.icon className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="font-medium text-gray-900">{item.name}</span>
                </div>
                {item.hasSubmenu && (
                  <FiChevronRight
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      activeSection === item.name ? 'rotate-90' : ''
                    }`}
                  />
                )}
              </button>

              {item.hasSubmenu && activeSection === item.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-8 mt-2 space-y-2"
                >
                  {categories.map(category => (
                    <button
                      key={category.name}
                      onClick={() => {
                        toast.info(`${category.name} category coming soon!`);
                        onClose();
                      }}
                      className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <div className="flex items-center">
                        <span className="text-lg mr-2">{category.icon}</span>
                        <span className="text-sm text-gray-700">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Quick Actions
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => {
              toast.info('Wishlist coming soon!');
              onClose();
            }}
            className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FiHeart className="w-5 h-5 text-red-500 mr-3" />
            <span className="font-medium text-gray-900">Wishlist</span>
            <span className="ml-auto bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
              3
            </span>
          </button>
          <button
            onClick={() => {
              toast.info('Cart coming soon!');
              onClose();
            }}
            className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FiShoppingCart className="w-5 h-5 text-blue-500 mr-3" />
            <span className="font-medium text-gray-900">Cart</span>
            <span className="ml-auto bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
              2
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderFiltersContent = () => (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Filters</h2>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Price Range
          </h3>
          <div className="space-y-2">
            {filterOptions.price.map(option => (
              <label key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Rating</h3>
          <div className="space-y-2">
            {filterOptions.rating.map(option => (
              <label key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  {option.label}
                </span>
                <div className="ml-auto flex">
                  {[...Array(parseInt(option.value))].map((_, i) => (
                    <option.icon
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Brand */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Brand</h3>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {filterOptions.brand.map(brand => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Availability
          </h3>
          <div className="space-y-2">
            {filterOptions.availability.map(option => (
              <label key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Apply Filters */}
      <div className="space-y-3">
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Apply Filters
        </Button>
        <Button variant="outline" className="w-full">
          Clear All
        </Button>
      </div>
    </div>
  );

  const renderAccountContent = () => (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">My Account</h2>

        {/* User Info */}
        <div className="text-center pb-4 border-b border-gray-100 mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
            <FiUser className="w-8 h-8 text-white" />
          </div>
          <div className="text-sm font-medium text-gray-900">Guest User</div>
          <div className="text-xs text-gray-500">
            Sign in to access your account
          </div>
        </div>

        {/* Account Menu */}
        <nav className="space-y-2">
          {accountItems.map(item => (
            <button
              key={item.name}
              onClick={() => {
                toast.info(`${item.name} coming soon!`);
                onClose();
              }}
              className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <item.icon className="w-5 h-5 text-gray-600 mr-3" />
              <span className="font-medium text-gray-900">{item.name}</span>
              <FiChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
            </button>
          ))}
        </nav>
      </div>

      {/* Sign Out */}
      <button
        onClick={() => {
          toast.info('Sign out functionality coming soon!');
          onClose();
        }}
        className="w-full flex items-center p-3 rounded-lg hover:bg-red-50 transition-colors text-left"
      >
        <FiLogOut className="w-5 h-5 text-red-500 mr-3" />
        <span className="font-medium text-red-600">Sign Out</span>
      </button>
    </div>
  );

  const getContent = () => {
    switch (type) {
      case 'filters':
        return renderFiltersContent();
      case 'account':
        return renderAccountContent();
      default:
        return renderNavigationContent();
    }
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
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {type === 'filters'
                  ? 'Filters'
                  : type === 'account'
                    ? 'Account'
                    : 'Menu'}
              </h1>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">{getContent()}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
