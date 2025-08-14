'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FiArrowRight,
  FiCheck,
  FiMonitor,
  FiSmartphone,
  FiTablet,
  FiX,
} from 'react-icons/fi';

const ResponsiveTestSection = () => {
  const [activeDevice, setActiveDevice] = useState<
    'desktop' | 'tablet' | 'mobile'
  >('desktop');

  const testCases = [
    {
      name: 'Typography Scaling',
      description: 'Text sizes adapt appropriately across devices',
      desktop: '✓ Large headings and body text',
      tablet: '✓ Medium-sized typography',
      mobile: '✓ Compact, readable text',
      status: 'passed',
    },
    {
      name: 'Layout Responsiveness',
      description: 'Grid layouts adapt to screen sizes',
      desktop: '✓ Multi-column layouts',
      tablet: '✓ 2-column grid system',
      mobile: '✓ Single column layout',
      status: 'passed',
    },
    {
      name: 'Touch Interactions',
      description: 'Touch targets are appropriately sized',
      desktop: '✓ Hover effects and mouse interactions',
      tablet: '✓ Larger touch targets',
      mobile: '✓ 44px minimum touch targets',
      status: 'passed',
    },
    {
      name: 'Navigation Patterns',
      description: 'Navigation adapts to device capabilities',
      desktop: '✓ Full horizontal navigation',
      tablet: '✓ Collapsible navigation',
      mobile: '✓ Hamburger menu',
      status: 'passed',
    },
    {
      name: 'Image Optimization',
      description: 'Images scale and load appropriately',
      desktop: '✓ High-resolution images',
      tablet: '✓ Medium resolution',
      mobile: '✓ Optimized for mobile',
      status: 'passed',
    },
    {
      name: 'Performance',
      description: 'Smooth animations and interactions',
      desktop: '✓ Full animation suite',
      tablet: '✓ Optimized animations',
      mobile: '✓ Reduced motion support',
      status: 'passed',
    },
  ];

  const deviceInfo = {
    desktop: {
      icon: FiMonitor,
      name: 'Desktop',
      width: '1024px+',
      features: [
        'Full navigation',
        'Hover effects',
        'Keyboard shortcuts',
        'Multi-column layouts',
      ],
    },
    tablet: {
      icon: FiTablet,
      name: 'Tablet',
      width: '768px - 1023px',
      features: [
        'Touch-optimized',
        'Sidebar navigation',
        'Larger touch targets',
        'Adaptive layouts',
      ],
    },
    mobile: {
      icon: FiSmartphone,
      name: 'Mobile',
      width: '320px - 767px',
      features: [
        'Hamburger menu',
        'Single column',
        'Touch gestures',
        'Optimized performance',
      ],
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Responsive Design Testing
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive testing across web, tablet, and mobile devices to
            ensure optimal user experience
          </p>
        </motion.div>

        {/* Device Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            {(['desktop', 'tablet', 'mobile'] as const).map(device => {
              const deviceData = deviceInfo[device];
              const Icon = deviceData.icon;
              return (
                <button
                  key={device}
                  onClick={() => setActiveDevice(device)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeDevice === device
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold text-sm">
                      {deviceData.name}
                    </div>
                    <div className="text-xs opacity-75">{deviceData.width}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Test Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Test Cases */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Test Results
            </h3>
            {testCases.map((testCase, index) => (
              <motion.div
                key={testCase.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {testCase.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testCase.description}
                    </p>
                  </div>
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      testCase.status === 'passed'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {testCase.status === 'passed' ? (
                      <FiCheck className="w-4 h-4" />
                    ) : (
                      <FiX className="w-4 h-4" />
                    )}
                  </div>
                </div>
                <div className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">
                  <div className="font-medium mb-1">
                    {deviceInfo[activeDevice].name}:
                  </div>
                  <div>{testCase[activeDevice]}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Device Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Device Features
            </h3>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white`}
                >
                  {(() => {
                    const Icon = deviceInfo[activeDevice].icon;
                    return <Icon className="w-8 h-8" />;
                  })()}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {deviceInfo[activeDevice].name}
                  </h4>
                  <p className="text-gray-600">
                    {deviceInfo[activeDevice].width}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-gray-900 mb-3">
                  Key Features:
                </h5>
                {deviceInfo[activeDevice].features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Responsive Preview */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-4">
                Responsive Preview
              </h4>
              <div
                className={`bg-gray-100 rounded-lg p-4 transition-all duration-500 ${
                  activeDevice === 'desktop'
                    ? 'max-w-full'
                    : activeDevice === 'tablet'
                      ? 'max-w-md mx-auto'
                      : 'max-w-xs mx-auto'
                }`}
              >
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                    <div className="text-sm font-semibold">ShopHub</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <span className="flex items-center justify-center">
              Run Full Test Suite
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>

          <button className="group bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-white">
            <span className="flex items-center justify-center">
              View Test Reports
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResponsiveTestSection;

