'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiFacebook,
  FiHeart,
  FiInstagram,
  FiLinkedin,
  FiLock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiRefreshCw,
  FiShield,
  FiStar,
  FiTruck,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';
import { toast } from 'react-toastify';

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for subscribing to our newsletter!');
  };

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Blog', href: '/blog' },
        { name: 'Partners', href: '/partners' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Returns', href: '/returns' },
        { name: 'Shipping Info', href: '/shipping' },
        { name: 'Size Guide', href: '/size-guide' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR', href: '/gdpr' },
        { name: 'Accessibility', href: '/accessibility' },
      ],
    },
    {
      title: 'Account',
      links: [
        { name: 'My Account', href: '/account' },
        { name: 'Order History', href: '/orders' },
        { name: 'Wishlist', href: '/wishlist' },
        { name: 'Rewards', href: '/rewards' },
        { name: 'Settings', href: '/settings' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FiFacebook,
      href: '#',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Twitter',
      icon: FiTwitter,
      href: '#',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Instagram',
      icon: FiInstagram,
      href: '#',
      color: 'hover:text-pink-500',
    },
    {
      name: 'YouTube',
      icon: FiYoutube,
      href: '#',
      color: 'hover:text-red-600',
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      href: '#',
      color: 'hover:text-blue-700',
    },
  ];

  const features = [
    {
      icon: FiTruck,
      title: 'Free Shipping',
      description: 'On orders over $50',
      color: 'text-blue-600',
    },
    {
      icon: FiShield,
      title: 'Secure Payment',
      description: '100% secure checkout',
      color: 'text-green-600',
    },
    {
      icon: FiRefreshCw,
      title: 'Easy Returns',
      description: '30-day return policy',
      color: 'text-purple-600',
    },
    {
      icon: FiStar,
      title: 'Best Quality',
      description: 'Premium products guaranteed',
      color: 'text-orange-600',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated with ShopHub
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get exclusive offers, early access to sales, and the latest
                product updates delivered to your inbox.
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <Input
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-300"
                  required
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
                  Subscribe
                  <FiArrowRight className="ml-2" />
                </Button>
              </form>
              <p className="text-sm text-blue-200 mt-4">
                No spam, unsubscribe at any time
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gray-700 flex items-center justify-center`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  ShopHub
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Your one-stop destination for all your shopping needs. We
                  offer quality products, competitive prices, and exceptional
                  customer service to make your shopping experience truly
                  remarkable.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-400">
                    <FiPhone className="w-4 h-4 mr-3" />
                    <span>1-800-SHOP-HUB</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <FiMail className="w-4 h-4 mr-3" />
                    <span>support@shophub.com</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <FiMapPin className="w-4 h-4 mr-3" />
                    <span>123 Commerce St, Business City, BC 12345</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map(social => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + sectionIndex * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map(link => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © 2024 ShopHub. All rights reserved. | Privacy Policy | Terms of
              Service
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm text-gray-400"
            >
              <span className="flex items-center">
                <FiLock className="w-4 h-4 mr-1" />
                Secure Checkout
              </span>
              <span className="flex items-center">
                <FiShield className="w-4 h-4 mr-1" />
                SSL Protected
              </span>
              <span className="flex items-center">
                <FiHeart className="w-4 h-4 mr-1" />
                Made with Love
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
        aria-label="Back to top"
      >
        <FiArrowRight className="w-5 h-5 transform rotate-[-90deg]" />
      </motion.button>
    </footer>
  );
};

export default Footer;
