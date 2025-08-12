import { CartItem, WishlistItem } from "./types";

export const cartItems: CartItem[] = [
  {
    id: "cart-1",
    productId: "prod-1",
    variantId: "var-1-1",
    quantity: 1,
    price: 1199.99,
    product: {
      name: "iPhone 15 Pro Max",
      thumbnail: "/images/products/iphone-15-pro-max-thumb.jpg",
      slug: "iphone-15-pro-max",
    },
    variant: {
      name: "256GB - Natural Titanium",
      attributes: {
        storage: "256GB",
        color: "Natural Titanium",
      },
    },
  },
  {
    id: "cart-2",
    productId: "prod-3",
    variantId: "var-3-1",
    quantity: 2,
    price: 129.99,
    product: {
      name: "Nike Air Max 270",
      thumbnail: "/images/products/nike-air-max-270-thumb.jpg",
      slug: "nike-air-max-270",
    },
    variant: {
      name: "Black - Size 9",
      attributes: {
        color: "Black",
        size: "9",
      },
    },
  },
  {
    id: "cart-3",
    productId: "prod-5",
    variantId: "var-5-1",
    quantity: 1,
    price: 399.99,
    product: {
      name: "Sony WH-1000XM5",
      thumbnail: "/images/products/sony-wh1000xm5-thumb.jpg",
      slug: "sony-wh-1000xm5",
    },
    variant: {
      name: "Black",
      attributes: {
        color: "Black",
      },
    },
  },
  {
    id: "cart-4",
    productId: "prod-2",
    variantId: "var-2-1",
    quantity: 1,
    price: 2499.99,
    product: {
      name: "MacBook Pro 16-inch",
      thumbnail: "/images/products/macbook-pro-16-thumb.jpg",
      slug: "macbook-pro-16-inch",
    },
    variant: {
      name: "M3 Max - 1TB - Space Black",
      attributes: {
        processor: "M3 Max",
        storage: "1TB",
        color: "Space Black",
      },
    },
  },
  {
    id: "cart-5",
    productId: "prod-4",
    variantId: "var-4-1",
    quantity: 1,
    price: 1299.99,
    product: {
      name: "Samsung Galaxy S24 Ultra",
      thumbnail: "/images/products/samsung-s24-ultra-thumb.jpg",
      slug: "samsung-galaxy-s24-ultra",
    },
    variant: {
      name: "512GB - Titanium Gray",
      attributes: {
        storage: "512GB",
        color: "Titanium Gray",
      },
    },
  },
];

export const wishlistItems: WishlistItem[] = [
  {
    id: "wish-1",
    userId: "user-1",
    productId: "prod-1",
    createdAt: "2024-01-10T10:30:00Z",
    product: {
      name: "iPhone 15 Pro Max",
      thumbnail: "/images/products/iphone-15-pro-max-thumb.jpg",
      price: 1199.99,
      slug: "iphone-15-pro-max",
    },
  },
  {
    id: "wish-2",
    userId: "user-1",
    productId: "prod-2",
    createdAt: "2024-01-08T14:20:00Z",
    product: {
      name: "MacBook Pro 16-inch",
      thumbnail: "/images/products/macbook-pro-16-thumb.jpg",
      price: 2499.99,
      slug: "macbook-pro-16-inch",
    },
  },
  {
    id: "wish-3",
    userId: "user-2",
    productId: "prod-3",
    createdAt: "2024-01-12T09:15:00Z",
    product: {
      name: "Nike Air Max 270",
      thumbnail: "/images/products/nike-air-max-270-thumb.jpg",
      price: 129.99,
      slug: "nike-air-max-270",
    },
  },
  {
    id: "wish-4",
    userId: "user-2",
    productId: "prod-5",
    createdAt: "2024-01-11T16:45:00Z",
    product: {
      name: "Sony WH-1000XM5",
      thumbnail: "/images/products/sony-wh1000xm5-thumb.jpg",
      price: 399.99,
      slug: "sony-wh-1000xm5",
    },
  },
  {
    id: "wish-5",
    userId: "user-3",
    productId: "prod-4",
    createdAt: "2024-01-13T11:30:00Z",
    product: {
      name: "Samsung Galaxy S24 Ultra",
      thumbnail: "/images/products/samsung-s24-ultra-thumb.jpg",
      price: 1299.99,
      slug: "samsung-galaxy-s24-ultra",
    },
  },
  {
    id: "wish-6",
    userId: "user-3",
    productId: "prod-1",
    createdAt: "2024-01-09T13:20:00Z",
    product: {
      name: "iPhone 15 Pro Max",
      thumbnail: "/images/products/iphone-15-pro-max-thumb.jpg",
      price: 1199.99,
      slug: "iphone-15-pro-max",
    },
  },
  {
    id: "wish-7",
    userId: "user-4",
    productId: "prod-2",
    createdAt: "2024-01-14T10:15:00Z",
    product: {
      name: "MacBook Pro 16-inch",
      thumbnail: "/images/products/macbook-pro-16-thumb.jpg",
      price: 2499.99,
      slug: "macbook-pro-16-inch",
    },
  },
  {
    id: "wish-8",
    userId: "user-4",
    productId: "prod-3",
    createdAt: "2024-01-12T15:40:00Z",
    product: {
      name: "Nike Air Max 270",
      thumbnail: "/images/products/nike-air-max-270-thumb.jpg",
      price: 129.99,
      slug: "nike-air-max-270",
    },
  },
  {
    id: "wish-9",
    userId: "user-5",
    productId: "prod-5",
    createdAt: "2024-01-15T12:30:00Z",
    product: {
      name: "Sony WH-1000XM5",
      thumbnail: "/images/products/sony-wh1000xm5-thumb.jpg",
      price: 399.99,
      slug: "sony-wh-1000xm5",
    },
  },
  {
    id: "wish-10",
    userId: "user-5",
    productId: "prod-4",
    createdAt: "2024-01-13T17:25:00Z",
    product: {
      name: "Samsung Galaxy S24 Ultra",
      thumbnail: "/images/products/samsung-s24-ultra-thumb.jpg",
      price: 1299.99,
      slug: "samsung-galaxy-s24-ultra",
    },
  },
];

export const getCartItemsByUserId = (userId: string): CartItem[] => {
  // In a real app, this would filter by userId
  // For demo purposes, return all cart items
  return cartItems;
};

export const getWishlistItemsByUserId = (userId: string): WishlistItem[] => {
  return wishlistItems.filter((item) => item.userId === userId);
};

export const getCartTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const getCartItemCount = (items: CartItem[]): number => {
  return items.reduce((count, item) => count + item.quantity, 0);
};
