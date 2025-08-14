'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiDollarSign } from 'react-icons/fi';

interface PriceRangeSliderProps {
  minPrice: number;
  maxPrice: number;
  currentMin: number;
  currentMax: number;
  onRangeChange: (min: number, max: number) => void;
  step?: number;
}

const PriceRangeSlider = ({
  minPrice,
  maxPrice,
  currentMin,
  currentMax,
  onRangeChange,
  step = 1,
}: PriceRangeSliderProps) => {
  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);

  // Motion values for the slider handles
  const minHandleX = useMotionValue(0);
  const maxHandleX = useMotionValue(0);

  // Transform motion values to price values
  const minPriceValue = useTransform(
    minHandleX,
    [0, 100],
    [minPrice, maxPrice]
  );
  const maxPriceValue = useTransform(
    maxHandleX,
    [0, 100],
    [minPrice, maxPrice]
  );

  // Calculate initial positions
  const getPositionFromPrice = (price: number) => {
    return ((price - minPrice) / (maxPrice - minPrice)) * 100;
  };

  useEffect(() => {
    minHandleX.set(getPositionFromPrice(currentMin));
    maxHandleX.set(getPositionFromPrice(currentMax));
  }, [currentMin, currentMax, minHandleX, maxHandleX]);

  // Update parent component when values change
  useEffect(() => {
    const unsubscribeMin = minPriceValue.on('change', value => {
      if (isDragging === 'min') {
        const roundedValue = Math.round(value / step) * step;
        const clampedValue = Math.max(
          minPrice,
          Math.min(roundedValue, maxPriceValue.get())
        );
        onRangeChange(clampedValue, maxPriceValue.get());
      }
    });

    const unsubscribeMax = maxPriceValue.on('change', value => {
      if (isDragging === 'max') {
        const roundedValue = Math.round(value / step) * step;
        const clampedValue = Math.min(
          maxPrice,
          Math.max(roundedValue, minPriceValue.get())
        );
        onRangeChange(minPriceValue.get(), clampedValue);
      }
    });

    return () => {
      unsubscribeMin();
      unsubscribeMax();
    };
  }, [
    isDragging,
    minPriceValue,
    maxPriceValue,
    onRangeChange,
    minPrice,
    maxPrice,
    step,
  ]);

  const handleMinDrag = () => {
    setIsDragging('min');
  };

  const handleMaxDrag = () => {
    setIsDragging('max');
  };

  const handleDragEnd = () => {
    setIsDragging(null);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-900">Price Range</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <FiDollarSign className="w-4 h-4" />
          <span>
            {formatPrice(currentMin)} - {formatPrice(currentMax)}
          </span>
        </div>
      </div>

      <div className="relative h-8">
        {/* Track */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-2 bg-gray-200 rounded-full" />

        {/* Active Range */}
        <motion.div
          className="absolute top-1/2 transform -translate-y-1/2 h-2 bg-blue-500 rounded-full"
          style={{
            left: `${getPositionFromPrice(currentMin)}%`,
            width: `${getPositionFromPrice(currentMax) - getPositionFromPrice(currentMin)}%`,
          }}
        />

        {/* Min Handle */}
        <motion.div
          drag="x"
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={{ left: 0, right: 100 }}
          style={{ x: minHandleX }}
          onDragStart={handleMinDrag}
          onDragEnd={handleDragEnd}
          className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border-2 border-blue-500 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {formatPrice(currentMin)}
          </div>
        </motion.div>

        {/* Max Handle */}
        <motion.div
          drag="x"
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={{ left: 0, right: 100 }}
          style={{ x: maxHandleX }}
          onDragStart={handleMaxDrag}
          onDragEnd={handleDragEnd}
          className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border-2 border-blue-500 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {formatPrice(currentMax)}
          </div>
        </motion.div>
      </div>

      {/* Price Labels */}
      <div className="flex justify-between mt-2 text-xs text-gray-500">
        <span>{formatPrice(minPrice)}</span>
        <span>{formatPrice(maxPrice)}</span>
      </div>

      {/* Quick Price Buttons */}
      <div className="flex flex-wrap gap-2 mt-4">
        {[
          { label: 'Under $25', min: 0, max: 25 },
          { label: '$25 - $50', min: 25, max: 50 },
          { label: '$50 - $100', min: 50, max: 100 },
          { label: 'Over $100', min: 100, max: maxPrice },
        ].map(range => (
          <button
            key={range.label}
            onClick={() => onRangeChange(range.min, range.max)}
            className={`px-3 py-1 text-xs rounded-full border transition-colors duration-200 ${
              currentMin === range.min && currentMax === range.max
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            {range.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PriceRangeSlider;
