// Export all types and interfaces
export * from "./types";

// Export categories
export * from "./categories";

// Export products (both original and extended)
export * from "./products";
export * from "./products-extended";

// Export users and addresses
export * from "./users";

// Export orders
export * from "./orders";

// Export coupons
export * from "./coupons";

// Export cart and wishlist
export * from "./cart-wishlist";

// Re-export commonly used data
import { cartItems, wishlistItems } from "./cart-wishlist";
import { categories, featuredCategories } from "./categories";
import { coupons } from "./coupons";
import { orders } from "./orders";
import {
  featuredProducts,
  newProducts,
  products,
  saleProducts,
} from "./products";
import { allProducts as extendedProducts } from "./products-extended";
import { addresses, users } from "./users";

export {
  addresses,
  // Cart & Wishlist
  cartItems,
  // Categories
  categories,
  // Coupons
  coupons,
  extendedProducts,
  featuredCategories,
  featuredProducts,
  newProducts,
  // Orders
  orders,
  // Products
  products,
  saleProducts,
  // Users
  users,
  wishlistItems,
};
