'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { FiCheck, FiSearch, FiX } from 'react-icons/fi';

interface Brand {
  id: string;
  name: string;
  count: number;
  logo?: string;
}

interface BrandFilterProps {
  brands: Brand[];
  selectedBrands: string[];
  onBrandChange: (brandId: string, checked: boolean) => void;
}

const BrandFilter = ({
  brands = [],
  selectedBrands = [],
  onBrandChange,
}: BrandFilterProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  // Filter brands based on search query
  const filteredBrands = useMemo(() => {
    return (
      brands?.filter(brand =>
        brand.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) || []
    );
  }, [brands, searchQuery]);

  // Show first 5 brands by default, or all if showAll is true
  const displayedBrands = showAll ? filteredBrands : filteredBrands.slice(0, 5);
  const hasMoreBrands = filteredBrands.length > 5;

  const handleSearchClear = () => {
    setSearchQuery('');
  };

  const handleSelectAll = () => {
    const unselectedBrands =
      brands?.filter(brand => !selectedBrands.includes(brand.id)) || [];
    unselectedBrands.forEach(brand => onBrandChange(brand.id, true));
  };

  const handleClearAll = () => {
    selectedBrands?.forEach(brandId => onBrandChange(brandId, false));
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-900">Brands</h3>
        {selectedBrands.length > 0 && (
          <div className="flex items-center space-x-2">
            <button
              onClick={handleSelectAll}
              className="text-xs text-blue-600 hover:text-blue-700 font-medium"
            >
              Select All
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={handleClearAll}
              className="text-xs text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Search Input */}
      <div className="relative mb-4">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search brands..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-8 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {searchQuery && (
          <button
            onClick={handleSearchClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <FiX className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Brand List */}
      <div className="space-y-2 max-h-64 overflow-y-auto">
        <AnimatePresence>
          {displayedBrands.map(brand => {
            const isSelected = selectedBrands?.includes(brand.id) || false;

            return (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? 'bg-blue-50 border border-blue-200'
                    : 'hover:bg-gray-50 border border-transparent'
                }`}
                onClick={() => onBrandChange(brand.id, !isSelected)}
              >
                <div className="flex items-center space-x-3 flex-1">
                  {/* Brand Logo or Initial */}
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-semibold">
                    {brand.logo ? (
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-6 h-6 object-contain"
                      />
                    ) : (
                      brand.name.charAt(0).toUpperCase()
                    )}
                  </div>

                  {/* Brand Name */}
                  <div className="flex-1">
                    <span className="text-sm font-medium text-gray-900">
                      {brand.name}
                    </span>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500">
                        {brand.count} products
                      </span>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-blue-500 rounded-full"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-center justify-center w-5 h-5">
                  <motion.div
                    initial={false}
                    animate={{
                      scale: isSelected ? 1 : 0,
                      opacity: isSelected ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center"
                  >
                    <FiCheck className="w-3 h-3 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Show More/Less Button */}
        {hasMoreBrands && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowAll(!showAll)}
            className="w-full text-center py-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            {showAll ? 'Show Less' : `Show ${filteredBrands.length - 5} More`}
          </motion.button>
        )}

        {/* No Results */}
        {filteredBrands.length === 0 && searchQuery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-4 text-sm text-gray-500"
          >
            No brands found matching "{searchQuery}"
          </motion.div>
        )}
      </div>

      {/* Selected Brands Summary */}
      {selectedBrands.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-blue-50 rounded-lg"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-900">
              Selected Brands ({selectedBrands.length})
            </span>
            <button
              onClick={handleClearAll}
              className="text-xs text-blue-600 hover:text-blue-700"
            >
              Clear All
            </button>
          </div>
          <div className="flex flex-wrap gap-1">
            {selectedBrands.map(brandId => {
              const brand = brands.find(b => b.id === brandId);
              return brand ? (
                <motion.span
                  key={brandId}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
                >
                  {brand.name}
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      onBrandChange(brandId, false);
                    }}
                    className="ml-1 hover:text-blue-900 transition-colors duration-200"
                  >
                    ×
                  </button>
                </motion.span>
              ) : null;
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BrandFilter;
