'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronRight, FiFolder, FiFolderOpen } from 'react-icons/fi';

interface Category {
  id: string;
  name: string;
  count: number;
  children?: Category[];
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategories: string[];
  onCategoryChange: (categoryId: string, checked: boolean) => void;
}

const CategoryFilter = ({
  categories,
  selectedCategories,
  onCategoryChange,
}: CategoryFilterProps) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const isExpanded = (categoryId: string) =>
    expandedCategories.includes(categoryId);

  const renderCategory = (category: Category, level: number = 0) => {
    const hasChildren = category.children && category.children.length > 0;
    const isSelected = selectedCategories.includes(category.id);
    const expanded = isExpanded(category.id);

    return (
      <div key={category.id} className="w-full">
        <motion.div
          initial={false}
          animate={{
            backgroundColor: isSelected
              ? 'rgba(59, 130, 246, 0.1)'
              : 'transparent',
          }}
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
            level > 0 ? 'ml-4' : ''
          }`}
        >
          <div className="flex items-center space-x-2 flex-1">
            {hasChildren && (
              <button
                onClick={e => {
                  e.stopPropagation();
                  toggleCategory(category.id);
                }}
                className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
              >
                <motion.div
                  animate={{ rotate: expanded ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiChevronRight className="w-4 h-4 text-gray-500" />
                </motion.div>
              </button>
            )}

            <div className="flex items-center space-x-2">
              {hasChildren ? (
                expanded ? (
                  <FiFolderOpen className="w-4 h-4 text-blue-500" />
                ) : (
                  <FiFolder className="w-4 h-4 text-gray-400" />
                )
              ) : (
                <div className="w-4 h-4" />
              )}

              <label className="flex items-center space-x-2 cursor-pointer flex-1">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={e =>
                    onCategoryChange(category.id, e.target.checked)
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{category.name}</span>
              </label>
            </div>
          </div>

          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {category.count}
          </span>
        </motion.div>

        {/* Children */}
        <AnimatePresence>
          {hasChildren && expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="space-y-1 mt-1">
                {category.children!.map(child =>
                  renderCategory(child, level + 1)
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-900">Categories</h3>
        {selectedCategories.length > 0 && (
          <button
            onClick={() => {
              selectedCategories.forEach(categoryId => {
                onCategoryChange(categoryId, false);
              });
            }}
            className="text-xs text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-1">
        {categories.map(category => renderCategory(category))}
      </div>

      {/* Selected Categories Summary */}
      {selectedCategories.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-blue-50 rounded-lg"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-900">
              Selected Categories ({selectedCategories.length})
            </span>
            <button
              onClick={() => {
                selectedCategories.forEach(categoryId => {
                  onCategoryChange(categoryId, false);
                });
              }}
              className="text-xs text-blue-600 hover:text-blue-700"
            >
              Clear
            </button>
          </div>
          <div className="flex flex-wrap gap-1">
            {selectedCategories.map(categoryId => {
              const category = findCategoryById(categories, categoryId);
              return category ? (
                <span
                  key={categoryId}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
                >
                  {category.name}
                  <button
                    onClick={() => onCategoryChange(categoryId, false)}
                    className="ml-1 hover:text-blue-900"
                  >
                    ×
                  </button>
                </span>
              ) : null;
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Helper function to find category by ID in the tree
const findCategoryById = (
  categories: Category[],
  id: string
): Category | null => {
  for (const category of categories) {
    if (category.id === id) {
      return category;
    }
    if (category.children) {
      const found = findCategoryById(category.children, id);
      if (found) return found;
    }
  }
  return null;
};

export default CategoryFilter;
