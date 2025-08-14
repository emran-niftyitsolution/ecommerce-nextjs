'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FiAlertTriangle,
  FiArrowRight,
  FiAward,
  FiCheck,
  FiEye,
  FiEyeOff,
  FiGlobe,
  FiMonitor,
  FiMousePointer,
  FiSmartphone,
  FiUsers,
  FiVolume2,
  FiVolumeX,
  FiX,
} from 'react-icons/fi';

const AccessibilityTestSection = () => {
  const [activeTest, setActiveTest] = useState<
    'visual' | 'auditory' | 'motor' | 'cognitive'
  >('visual');
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const accessibilityTests = {
    visual: [
      {
        name: 'Color Contrast',
        description: 'Text has sufficient contrast against background',
        status: 'passed',
        details: 'All text meets WCAG AA standards (4.5:1 ratio)',
        icon: FiEye,
      },
      {
        name: 'Focus Indicators',
        description: 'Clear focus indicators for keyboard navigation',
        status: 'passed',
        details: 'All interactive elements have visible focus states',
        icon: FiMousePointer,
      },
      {
        name: 'Text Scaling',
        description:
          'Text can be scaled up to 200% without loss of functionality',
        status: 'passed',
        details: 'Typography scales appropriately across all devices',
        icon: FiMonitor,
      },
      {
        name: 'Alt Text',
        description: 'Images have descriptive alternative text',
        status: 'passed',
        details: 'All images include meaningful alt attributes',
        icon: FiSmartphone,
      },
    ],
    auditory: [
      {
        name: 'Screen Reader Support',
        description: 'Content is accessible to screen readers',
        status: 'passed',
        details: 'Proper ARIA labels and semantic HTML structure',
        icon: FiVolume2,
      },
      {
        name: 'Audio Alternatives',
        description: 'Audio content has text alternatives',
        status: 'passed',
        details: 'All audio content includes transcripts or captions',
        icon: FiVolumeX,
      },
      {
        name: 'Sound Notifications',
        description: 'Audio notifications have visual alternatives',
        status: 'passed',
        details: 'All audio cues have corresponding visual indicators',
        icon: FiAlertTriangle,
      },
    ],
    motor: [
      {
        name: 'Touch Targets',
        description: 'Touch targets are at least 44px in size',
        status: 'passed',
        details: 'All interactive elements meet minimum touch target size',
        icon: FiSmartphone,
      },
      {
        name: 'Keyboard Navigation',
        description: 'All functionality accessible via keyboard',
        status: 'passed',
        details: 'Complete keyboard navigation support implemented',
        icon: FiMousePointer,
      },
      {
        name: 'Gesture Alternatives',
        description: 'Complex gestures have simple alternatives',
        status: 'passed',
        details: 'All gestures have button or keyboard alternatives',
        icon: FiMonitor,
      },
      {
        name: 'Time Limits',
        description: 'No time limits that cannot be extended',
        status: 'passed',
        details: 'All time-sensitive actions can be extended or disabled',
        icon: FiAlertTriangle,
      },
    ],
    cognitive: [
      {
        name: 'Clear Navigation',
        description: 'Navigation is consistent and predictable',
        status: 'passed',
        details: 'Consistent navigation patterns across all pages',
        icon: FiGlobe,
      },
      {
        name: 'Error Prevention',
        description: 'Forms include error prevention and correction',
        status: 'passed',
        details: 'Real-time validation and clear error messages',
        icon: FiAlertTriangle,
      },
      {
        name: 'Reading Level',
        description: 'Content is written at appropriate reading level',
        status: 'passed',
        details: 'Content uses clear, simple language (8th grade level)',
        icon: FiUsers,
      },
      {
        name: 'Consistent Layout',
        description: 'Layout and design are consistent throughout',
        status: 'passed',
        details: 'Consistent visual hierarchy and design patterns',
        icon: FiAward,
      },
    ],
  };

  const wcagGuidelines = [
    {
      level: 'A',
      title: 'Basic Accessibility',
      description: 'Essential accessibility features',
      status: 'passed',
      tests: 25,
    },
    {
      level: 'AA',
      title: 'Enhanced Accessibility',
      description: 'Improved accessibility for most users',
      status: 'passed',
      tests: 38,
    },
    {
      level: 'AAA',
      title: 'Maximum Accessibility',
      description: 'Highest level of accessibility support',
      status: 'warning',
      tests: 42,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Accessibility Compliance Testing
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive accessibility testing across all screen sizes to
            ensure WCAG compliance and inclusive user experience
          </p>
        </motion.div>

        {/* Accessibility Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setIsHighContrast(!isHighContrast)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
              isHighContrast
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {isHighContrast ? (
              <FiEyeOff className="w-4 h-4" />
            ) : (
              <FiEye className="w-4 h-4" />
            )}
            <span>High Contrast</span>
          </button>

          <button
            onClick={() => setIsReducedMotion(!isReducedMotion)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
              isReducedMotion
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {isReducedMotion ? (
              <FiVolumeX className="w-4 h-4" />
            ) : (
              <FiVolume2 className="w-4 h-4" />
            )}
            <span>Reduced Motion</span>
          </button>
        </motion.div>

        {/* Test Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center mb-12"
        >
          <div className="flex bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            {(['visual', 'auditory', 'motor', 'cognitive'] as const).map(
              category => (
                <button
                  key={category}
                  onClick={() => setActiveTest(category)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 capitalize ${
                    activeTest === category
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-semibold">{category}</span>
                </button>
              )
            )}
          </div>
        </motion.div>

        {/* Test Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Test Results */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
              {activeTest} Accessibility Tests
            </h3>
            {accessibilityTests[activeTest].map((test, index) => {
              const Icon = test.icon;
              return (
                <motion.div
                  key={test.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {test.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {test.description}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full ${
                        test.status === 'passed'
                          ? 'bg-green-100 text-green-600'
                          : test.status === 'warning'
                            ? 'bg-yellow-100 text-yellow-600'
                            : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {test.status === 'passed' ? (
                        <FiCheck className="w-4 h-4" />
                      ) : (
                        <FiX className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">
                    {test.details}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* WCAG Compliance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              WCAG Compliance
            </h3>

            {/* WCAG Levels */}
            <div className="space-y-4">
              {wcagGuidelines.map((guideline, index) => (
                <motion.div
                  key={guideline.level}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        WCAG {guideline.level}
                      </h4>
                      <p className="text-gray-600">{guideline.title}</p>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        guideline.status === 'passed'
                          ? 'bg-green-100 text-green-600'
                          : guideline.status === 'warning'
                            ? 'bg-yellow-100 text-yellow-600'
                            : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {guideline.status.toUpperCase()}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {guideline.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {guideline.tests} tests completed
                    </span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          guideline.status === 'passed'
                            ? 'bg-green-500'
                            : guideline.status === 'warning'
                              ? 'bg-yellow-500'
                              : 'bg-red-500'
                        }`}
                        style={{ width: `${(guideline.tests / 50) * 100}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Accessibility Score */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg mb-1">Accessibility Score</div>
                <div className="text-sm opacity-90">WCAG AA Compliant</div>
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
          <button className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <span className="flex items-center justify-center">
              Run Accessibility Audit
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>

          <button className="group bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-white">
            <span className="flex items-center justify-center">
              View Compliance Report
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AccessibilityTestSection;

