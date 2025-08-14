// Responsive Design Testing Utilities

export interface ResponsiveTestResult {
  testName: string;
  status: 'passed' | 'failed' | 'warning';
  message: string;
  device: 'desktop' | 'tablet' | 'mobile';
  details?: string;
}

export interface DeviceBreakpoint {
  name: 'mobile' | 'tablet' | 'desktop';
  minWidth: number;
  maxWidth: number;
  description: string;
}

export const DEVICE_BREAKPOINTS: DeviceBreakpoint[] = [
  {
    name: 'mobile',
    minWidth: 320,
    maxWidth: 767,
    description: 'Mobile devices (320px - 767px)',
  },
  {
    name: 'tablet',
    minWidth: 768,
    maxWidth: 1023,
    description: 'Tablet devices (768px - 1023px)',
  },
  {
    name: 'desktop',
    minWidth: 1024,
    maxWidth: Infinity,
    description: 'Desktop devices (1024px+)',
  },
];

// Test responsive typography scaling
export const testTypographyScaling = (): ResponsiveTestResult[] => {
  const results: ResponsiveTestResult[] = [];

  DEVICE_BREAKPOINTS.forEach(device => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const bodyText = document.querySelectorAll('p, span, div');

    let status: 'passed' | 'failed' | 'warning' = 'passed';
    let message = 'Typography scales appropriately';

    // Check if headings are appropriately sized
    headings.forEach(heading => {
      const fontSize = window.getComputedStyle(heading).fontSize;
      const size = parseInt(fontSize);

      if (device.name === 'mobile' && size > 24) {
        status = 'warning';
        message = 'Headings may be too large for mobile';
      } else if (device.name === 'desktop' && size < 16) {
        status = 'warning';
        message = 'Headings may be too small for desktop';
      }
    });

    results.push({
      testName: 'Typography Scaling',
      status,
      message,
      device: device.name,
      details: `${device.description}: ${message}`,
    });
  });

  return results;
};

// Test responsive layout
export const testResponsiveLayout = (): ResponsiveTestResult[] => {
  const results: ResponsiveTestResult[] = [];

  DEVICE_BREAKPOINTS.forEach(device => {
    const containers = document.querySelectorAll(
      '.container, [class*="grid"], [class*="flex"]'
    );
    let status: 'passed' | 'failed' | 'warning' = 'passed';
    let message = 'Layout adapts appropriately';

    containers.forEach(container => {
      const computedStyle = window.getComputedStyle(container);
      const display = computedStyle.display;
      const flexDirection = computedStyle.flexDirection;
      const gridTemplateColumns = computedStyle.gridTemplateColumns;

      if (device.name === 'mobile') {
        if (gridTemplateColumns && gridTemplateColumns !== '1fr') {
          status = 'warning';
          message = 'Consider single column layout for mobile';
        }
      } else if (device.name === 'desktop') {
        if (display === 'block' && !gridTemplateColumns) {
          status = 'warning';
          message = 'Consider multi-column layout for desktop';
        }
      }
    });

    results.push({
      testName: 'Responsive Layout',
      status,
      message,
      device: device.name,
      details: `${device.description}: ${message}`,
    });
  });

  return results;
};

// Test touch target sizes
export const testTouchTargets = (): ResponsiveTestResult[] => {
  const results: ResponsiveTestResult[] = [];

  DEVICE_BREAKPOINTS.forEach(device => {
    const buttons = document.querySelectorAll('button, a, [role="button"]');
    let status: 'passed' | 'failed' | 'warning' = 'passed';
    let message = 'Touch targets are appropriately sized';

    buttons.forEach(button => {
      const rect = button.getBoundingClientRect();
      const minSize = device.name === 'mobile' ? 44 : 32;

      if (rect.width < minSize || rect.height < minSize) {
        status = 'failed';
        message = `Touch target too small (${Math.round(rect.width)}x${Math.round(rect.height)}px)`;
      }
    });

    results.push({
      testName: 'Touch Targets',
      status,
      message,
      device: device.name,
      details: `${device.description}: ${message}`,
    });
  });

  return results;
};

// Test responsive images
export const testResponsiveImages = (): ResponsiveTestResult[] => {
  const results: ResponsiveTestResult[] = [];

  DEVICE_BREAKPOINTS.forEach(device => {
    const images = document.querySelectorAll('img');
    let status: 'passed' | 'failed' | 'warning' = 'passed';
    let message = 'Images are responsive';

    images.forEach(img => {
      const srcset = img.getAttribute('srcset');
      const sizes = img.getAttribute('sizes');

      if (!srcset && device.name === 'mobile') {
        status = 'warning';
        message = 'Consider adding srcset for responsive images';
      }

      if (!sizes && device.name === 'mobile') {
        status = 'warning';
        message = 'Consider adding sizes attribute';
      }
    });

    results.push({
      testName: 'Responsive Images',
      status,
      message,
      device: device.name,
      details: `${device.description}: ${message}`,
    });
  });

  return results;
};

// Test performance
export const testPerformance = (): ResponsiveTestResult[] => {
  const results: ResponsiveTestResult[] = [];

  DEVICE_BREAKPOINTS.forEach(device => {
    let status: 'passed' | 'failed' | 'warning' = 'passed';
    let message = 'Performance is optimal';

    // Check for heavy animations on mobile
    if (device.name === 'mobile') {
      const animatedElements = document.querySelectorAll(
        '[class*="animate"], [class*="transition"]'
      );
      if (animatedElements.length > 10) {
        status = 'warning';
        message =
          'Consider reducing animations on mobile for better performance';
      }
    }

    // Check for large images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src && src.includes('large') && device.name === 'mobile') {
        status = 'warning';
        message = 'Consider using smaller images for mobile';
      }
    });

    results.push({
      testName: 'Performance',
      status,
      message,
      device: device.name,
      details: `${device.description}: ${message}`,
    });
  });

  return results;
};

// Run all responsive tests
export const runResponsiveTests = (): ResponsiveTestResult[] => {
  const allTests = [
    testTypographyScaling(),
    testResponsiveLayout(),
    testTouchTargets(),
    testResponsiveImages(),
    testPerformance(),
  ];

  return allTests.flat();
};

// Get current device type based on window width
export const getCurrentDevice = (): DeviceBreakpoint => {
  const width = window.innerWidth;
  return (
    DEVICE_BREAKPOINTS.find(
      device => width >= device.minWidth && width <= device.maxWidth
    ) || DEVICE_BREAKPOINTS[2]
  ); // Default to desktop
};

// Check if element is visible on current device
export const isElementVisible = (element: Element): boolean => {
  const computedStyle = window.getComputedStyle(element);
  const display = computedStyle.display;
  const visibility = computedStyle.visibility;
  const opacity = parseFloat(computedStyle.opacity);

  return display !== 'none' && visibility !== 'hidden' && opacity > 0;
};

// Test accessibility features
export const testAccessibility = (): ResponsiveTestResult[] => {
  const results: ResponsiveTestResult[] = [];

  DEVICE_BREAKPOINTS.forEach(device => {
    let status: 'passed' | 'failed' | 'warning' = 'passed';
    let message = 'Accessibility features are properly implemented';

    // Check for proper focus states
    const focusableElements = document.querySelectorAll(
      'button, a, input, select, textarea, [tabindex]'
    );
    focusableElements.forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      const outline = computedStyle.outline;

      if (outline === 'none' || outline === '') {
        status = 'warning';
        message = 'Consider adding focus indicators for keyboard navigation';
      }
    });

    // Check for alt text on images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const alt = img.getAttribute('alt');
      if (!alt && device.name === 'mobile') {
        status = 'warning';
        message = 'Add alt text to images for screen readers';
      }
    });

    results.push({
      testName: 'Accessibility',
      status,
      message,
      device: device.name,
      details: `${device.description}: ${message}`,
    });
  });

  return results;
};

// Generate test report
export const generateTestReport = (results: ResponsiveTestResult[]): string => {
  const passed = results.filter(r => r.status === 'passed').length;
  const failed = results.filter(r => r.status === 'failed').length;
  const warnings = results.filter(r => r.status === 'warning').length;
  const total = results.length;

  return `
Responsive Design Test Report
============================

Summary:
- Total Tests: ${total}
- Passed: ${passed}
- Failed: ${failed}
- Warnings: ${warnings}
- Success Rate: ${Math.round((passed / total) * 100)}%

Detailed Results:
${results
  .map(
    result => `
${result.testName} (${result.device}):
  Status: ${result.status.toUpperCase()}
  Message: ${result.message}
  Details: ${result.details}
`
  )
  .join('\n')}
  `;
};

