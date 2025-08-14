'use client';

import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

interface Color {
  id: string;
  name: string;
  hex: string;
  available: boolean;
}

interface Size {
  id: string;
  name: string;
  available: boolean;
}

interface ProductVariantsProps {
  colors: Color[];
  sizes: Size[];
  selectedColor: Color;
  selectedSize: Size;
  onColorChange: (color: Color) => void;
  onSizeChange: (size: Size) => void;
}

const ProductVariants = ({
  colors,
  sizes,
  selectedColor,
  selectedSize,
  onColorChange,
  onSizeChange,
}: ProductVariantsProps) => {
  return (
    <div className="space-y-6">
      {/* Color Selection */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium text-gray-700">Color</label>
          <span className="text-sm text-gray-500">{selectedColor.name}</span>
        </div>
        <div className="flex space-x-3">
          {colors.map(color => (
            <motion.button
              key={color.id}
              onClick={() => color.available && onColorChange(color)}
              disabled={!color.available}
              className={`relative w-12 h-12 rounded-full border-2 transition-all duration-200 ${
                selectedColor.id === color.id
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : 'border-gray-300 hover:border-gray-400'
              } ${!color.available ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              whileHover={color.available ? { scale: 1.1 } : {}}
              whileTap={color.available ? { scale: 0.95 } : {}}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            >
              {/* Selected Indicator */}
              {selectedColor.id === color.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <FiCheck className="w-3 h-3 text-gray-900" />
                  </div>
                </motion.div>
              )}

              {/* Unavailable Overlay */}
              {!color.available && (
                <div className="absolute inset-0 bg-gray-200 bg-opacity-50 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-gray-400 border-dashed rounded-full"></div>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium text-gray-700">Size</label>
          <span className="text-sm text-gray-500">{selectedSize.name}</span>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {sizes.map(size => (
            <motion.button
              key={size.id}
              onClick={() => size.available && onSizeChange(size)}
              disabled={!size.available}
              className={`relative py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                selectedSize.id === size.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : size.available
                    ? 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                    : 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'
              }`}
              whileHover={size.available ? { scale: 1.02 } : {}}
              whileTap={size.available ? { scale: 0.98 } : {}}
            >
              {size.name}

              {/* Unavailable Indicator */}
              {!size.available && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 border border-gray-300 border-dashed rounded-full"></div>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Availability Status */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">
              {selectedColor.name} - {selectedSize.name}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              SKU: WH-001-{selectedColor.id.toUpperCase()}-
              {selectedSize.id.toUpperCase()}
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  selectedColor.available && selectedSize.available
                    ? 'bg-green-500'
                    : 'bg-red-500'
                }`}
              ></div>
              <span className="text-sm text-gray-600">
                {selectedColor.available && selectedSize.available
                  ? 'In Stock'
                  : 'Out of Stock'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVariants;

