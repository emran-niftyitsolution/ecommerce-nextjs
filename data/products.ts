import { Product, Brand } from './types';

export const brands: Brand[] = [
  {
    id: 'brand-1',
    name: 'Apple',
    slug: 'apple',
    logo: '/images/brands/apple-logo.png',
    description: 'Think Different',
    website: 'https://apple.com',
    isActive: true
  },
  {
    id: 'brand-2',
    name: 'Samsung',
    slug: 'samsung',
    logo: '/images/brands/samsung-logo.png',
    description: 'Do What You Can\'t',
    website: 'https://samsung.com',
    isActive: true
  },
  {
    id: 'brand-3',
    name: 'Nike',
    slug: 'nike',
    logo: '/images/brands/nike-logo.png',
    description: 'Just Do It',
    website: 'https://nike.com',
    isActive: true
  },
  {
    id: 'brand-4',
    name: 'Adidas',
    slug: 'adidas',
    logo: '/images/brands/adidas-logo.png',
    description: 'Impossible Is Nothing',
    website: 'https://adidas.com',
    isActive: true
  },
  {
    id: 'brand-5',
    name: 'Sony',
    slug: 'sony',
    logo: '/images/brands/sony-logo.png',
    description: 'Make.Believe',
    website: 'https://sony.com',
    isActive: true
  }
];

export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'iPhone 15 Pro Max',
    slug: 'iphone-15-pro-max',
    description: 'The most advanced iPhone ever with A17 Pro chip, titanium design, and pro camera system.',
    shortDescription: 'Latest iPhone with pro features',
    price: 1199.99,
    comparePrice: 1299.99,
    costPrice: 800.00,
    sku: 'IPH15PM-256GB',
    barcode: '1234567890123',
    categoryId: 'cat-1-1',
    brandId: 'brand-1',
    images: [
      '/images/products/iphone-15-pro-max-1.jpg',
      '/images/products/iphone-15-pro-max-2.jpg',
      '/images/products/iphone-15-pro-max-3.jpg',
      '/images/products/iphone-15-pro-max-4.jpg'
    ],
    thumbnail: '/images/products/iphone-15-pro-max-thumb.jpg',
    isActive: true,
    isFeatured: true,
    isOnSale: true,
    weight: 221,
    dimensions: {
      length: 159.9,
      width: 76.7,
      height: 8.25
    },
    tags: ['smartphone', 'apple', '5g', 'camera', 'titanium'],
    variants: [
      {
        id: 'var-1-1',
        productId: 'prod-1',
        name: '256GB - Natural Titanium',
        sku: 'IPH15PM-256GB-NT',
        price: 1199.99,
        stockQuantity: 45,
        attributes: {
          storage: '256GB',
          color: 'Natural Titanium'
        },
        isActive: true
      },
      {
        id: 'var-1-2',
        productId: 'prod-1',
        name: '512GB - Natural Titanium',
        sku: 'IPH15PM-512GB-NT',
        price: 1399.99,
        stockQuantity: 32,
        attributes: {
          storage: '512GB',
          color: 'Natural Titanium'
        },
        isActive: true
      },
      {
        id: 'var-1-3',
        productId: 'prod-1',
        name: '256GB - Blue Titanium',
        sku: 'IPH15PM-256GB-BT',
        price: 1199.99,
        stockQuantity: 28,
        attributes: {
          storage: '256GB',
          color: 'Blue Titanium'
        },
        isActive: true
      }
    ],
    reviews: [
      {
        id: 'rev-1',
        productId: 'prod-1',
        userId: 'user-1',
        rating: 5,
        title: 'Amazing phone!',
        comment: 'The camera quality is incredible and the performance is outstanding.',
        isVerified: true,
        helpfulCount: 12,
        createdAt: '2024-01-15T10:30:00Z',
        user: {
          firstName: 'John',
          lastName: 'Doe',
          avatar: '/images/avatars/john-doe.jpg'
        }
      },
      {
        id: 'rev-2',
        productId: 'prod-1',
        userId: 'user-2',
        rating: 4,
        title: 'Great but expensive',
        comment: 'Excellent features but quite pricey. Worth it if you can afford it.',
        isVerified: true,
        helpfulCount: 8,
        createdAt: '2024-01-10T14:20:00Z',
        user: {
          firstName: 'Jane',
          lastName: 'Smith',
          avatar: '/images/avatars/jane-smith.jpg'
        }
      }
    ],
    rating: 4.5,
    reviewCount: 2,
    stockQuantity: 105,
    lowStockThreshold: 10,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T12:00:00Z'
  },
  {
    id: 'prod-2',
    name: 'MacBook Pro 16-inch',
    slug: 'macbook-pro-16-inch',
    description: 'The most powerful MacBook Pro ever with M3 Max chip, up to 128GB unified memory.',
    shortDescription: 'Professional laptop for creators',
    price: 2499.99,
    comparePrice: 2699.99,
    costPrice: 1800.00,
    sku: 'MBP16-M3MAX-1TB',
    barcode: '1234567890124',
    categoryId: 'cat-1-2',
    brandId: 'brand-1',
    images: [
      '/images/products/macbook-pro-16-1.jpg',
      '/images/products/macbook-pro-16-2.jpg',
      '/images/products/macbook-pro-16-3.jpg'
    ],
    thumbnail: '/images/products/macbook-pro-16-thumb.jpg',
    isActive: true,
    isFeatured: true,
    isOnSale: false,
    weight: 2200,
    dimensions: {
      length: 355.7,
      width: 248.1,
      height: 16.8
    },
    tags: ['laptop', 'macbook', 'professional', 'm3', 'creator'],
    variants: [
      {
        id: 'var-2-1',
        productId: 'prod-2',
        name: 'M3 Max - 1TB - Space Black',
        sku: 'MBP16-M3MAX-1TB-SB',
        price: 2499.99,
        stockQuantity: 18,
        attributes: {
          processor: 'M3 Max',
          storage: '1TB',
          color: 'Space Black'
        },
        isActive: true
      },
      {
        id: 'var-2-2',
        productId: 'prod-2',
        name: 'M3 Max - 2TB - Space Black',
        sku: 'MBP16-M3MAX-2TB-SB',
        price: 2799.99,
        stockQuantity: 12,
        attributes: {
          processor: 'M3 Max',
          storage: '2TB',
          color: 'Space Black'
        },
        isActive: true
      }
    ],
    reviews: [
      {
        id: 'rev-3',
        productId: 'prod-2',
        userId: 'user-3',
        rating: 5,
        title: 'Perfect for video editing',
        comment: 'Handles 4K video editing like a dream. The M3 Max is incredibly fast.',
        isVerified: true,
        helpfulCount: 15,
        createdAt: '2024-01-12T09:15:00Z',
        user: {
          firstName: 'Mike',
          lastName: 'Johnson',
          avatar: '/images/avatars/mike-johnson.jpg'
        }
      }
    ],
    rating: 5.0,
    reviewCount: 1,
    stockQuantity: 30,
    lowStockThreshold: 5,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-12T10:00:00Z'
  },
  {
    id: 'prod-3',
    name: 'Nike Air Max 270',
    slug: 'nike-air-max-270',
    description: 'The Nike Air Max 270 delivers unrivaled, all-day comfort with the tallest Air unit yet.',
    shortDescription: 'Comfortable running shoes',
    price: 129.99,
    comparePrice: 150.00,
    costPrice: 65.00,
    sku: 'NIKE-AM270-BLK',
    barcode: '1234567890125',
    categoryId: 'cat-2-3',
    brandId: 'brand-3',
    images: [
      '/images/products/nike-air-max-270-1.jpg',
      '/images/products/nike-air-max-270-2.jpg',
      '/images/products/nike-air-max-270-3.jpg'
    ],
    thumbnail: '/images/products/nike-air-max-270-thumb.jpg',
    isActive: true,
    isFeatured: false,
    isOnSale: true,
    weight: 320,
    dimensions: {
      length: 30,
      width: 12,
      height: 8
    },
    tags: ['shoes', 'running', 'nike', 'air max', 'comfortable'],
    variants: [
      {
        id: 'var-3-1',
        productId: 'prod-3',
        name: 'Black - Size 9',
        sku: 'NIKE-AM270-BLK-9',
        price: 129.99,
        stockQuantity: 25,
        attributes: {
          color: 'Black',
          size: '9'
        },
        isActive: true
      },
      {
        id: 'var-3-2',
        productId: 'prod-3',
        name: 'Black - Size 10',
        sku: 'NIKE-AM270-BLK-10',
        price: 129.99,
        stockQuantity: 30,
        attributes: {
          color: 'Black',
          size: '10'
        },
        isActive: true
      },
      {
        id: 'var-3-3',
        productId: 'prod-3',
        name: 'White - Size 9',
        sku: 'NIKE-AM270-WHT-9',
        price: 129.99,
        stockQuantity: 20,
        attributes: {
          color: 'White',
          size: '9'
        },
        isActive: true
      }
    ],
    reviews: [
      {
        id: 'rev-4',
        productId: 'prod-3',
        userId: 'user-4',
        rating: 4,
        title: 'Very comfortable',
        comment: 'Great for daily wear and light running. Very comfortable cushioning.',
        isVerified: true,
        helpfulCount: 6,
        createdAt: '2024-01-08T16:45:00Z',
        user: {
          firstName: 'Sarah',
          lastName: 'Wilson',
          avatar: '/images/avatars/sarah-wilson.jpg'
        }
      }
    ],
    rating: 4.0,
    reviewCount: 1,
    stockQuantity: 75,
    lowStockThreshold: 15,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-08T17:00:00Z'
  },
  {
    id: 'prod-4',
    name: 'Samsung Galaxy S24 Ultra',
    slug: 'samsung-galaxy-s24-ultra',
    description: 'The ultimate Galaxy experience with S Pen, AI features, and pro-grade camera system.',
    shortDescription: 'Premium Android smartphone',
    price: 1299.99,
    comparePrice: 1399.99,
    costPrice: 900.00,
    sku: 'SAMSUNG-S24U-512GB',
    barcode: '1234567890126',
    categoryId: 'cat-1-1',
    brandId: 'brand-2',
    images: [
      '/images/products/samsung-s24-ultra-1.jpg',
      '/images/products/samsung-s24-ultra-2.jpg',
      '/images/products/samsung-s24-ultra-3.jpg'
    ],
    thumbnail: '/images/products/samsung-s24-ultra-thumb.jpg',
    isActive: true,
    isFeatured: true,
    isOnSale: true,
    weight: 232,
    dimensions: {
      length: 163.4,
      width: 79.0,
      height: 8.6
    },
    tags: ['smartphone', 'samsung', 'android', 's pen', 'camera'],
    variants: [
      {
        id: 'var-4-1',
        productId: 'prod-4',
        name: '512GB - Titanium Gray',
        sku: 'SAMSUNG-S24U-512GB-TG',
        price: 1299.99,
        stockQuantity: 35,
        attributes: {
          storage: '512GB',
          color: 'Titanium Gray'
        },
        isActive: true
      },
      {
        id: 'var-4-2',
        productId: 'prod-4',
        name: '1TB - Titanium Gray',
        sku: 'SAMSUNG-S24U-1TB-TG',
        price: 1499.99,
        stockQuantity: 22,
        attributes: {
          storage: '1TB',
          color: 'Titanium Gray'
        },
        isActive: true
      }
    ],
    reviews: [
      {
        id: 'rev-5',
        productId: 'prod-4',
        userId: 'user-5',
        rating: 5,
        title: 'Best Android phone ever',
        comment: 'The S Pen is amazing and the camera quality is outstanding.',
        isVerified: true,
        helpfulCount: 18,
        createdAt: '2024-01-14T11:20:00Z',
        user: {
          firstName: 'David',
          lastName: 'Brown',
          avatar: '/images/avatars/david-brown.jpg'
        }
      }
    ],
    rating: 5.0,
    reviewCount: 1,
    stockQuantity: 57,
    lowStockThreshold: 10,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-14T12:00:00Z'
  },
  {
    id: 'prod-5',
    name: 'Sony WH-1000XM5',
    slug: 'sony-wh-1000xm5',
    description: 'Industry-leading noise canceling wireless headphones with exceptional sound quality.',
    shortDescription: 'Premium noise-canceling headphones',
    price: 399.99,
    comparePrice: 449.99,
    costPrice: 250.00,
    sku: 'SONY-WH1000XM5-BLK',
    barcode: '1234567890127',
    categoryId: 'cat-1-4',
    brandId: 'brand-5',
    images: [
      '/images/products/sony-wh1000xm5-1.jpg',
      '/images/products/sony-wh1000xm5-2.jpg',
      '/images/products/sony-wh1000xm5-3.jpg'
    ],
    thumbnail: '/images/products/sony-wh1000xm5-thumb.jpg',
    isActive: true,
    isFeatured: false,
    isOnSale: true,
    weight: 250,
    dimensions: {
      length: 20,
      width: 17,
      height: 8
    },
    tags: ['headphones', 'wireless', 'noise canceling', 'bluetooth', 'audio'],
    variants: [
      {
        id: 'var-5-1',
        productId: 'prod-5',
        name: 'Black',
        sku: 'SONY-WH1000XM5-BLK',
        price: 399.99,
        stockQuantity: 40,
        attributes: {
          color: 'Black'
        },
        isActive: true
      },
      {
        id: 'var-5-2',
        productId: 'prod-5',
        name: 'Silver',
        sku: 'SONY-WH1000XM5-SLV',
        price: 399.99,
        stockQuantity: 28,
        attributes: {
          color: 'Silver'
        },
        isActive: true
      }
    ],
    reviews: [
      {
        id: 'rev-6',
        productId: 'prod-5',
        userId: 'user-6',
        rating: 5,
        title: 'Amazing noise cancellation',
        comment: 'The noise cancellation is incredible. Perfect for travel and work.',
        isVerified: true,
        helpfulCount: 22,
        createdAt: '2024-01-11T13:30:00Z',
        user: {
          firstName: 'Emily',
          lastName: 'Davis',
          avatar: '/images/avatars/emily-davis.jpg'
        }
      },
      {
        id: 'rev-7',
        productId: 'prod-5',
        userId: 'user-7',
        rating: 4,
        title: 'Great sound quality',
        comment: 'Excellent sound quality and comfortable for long listening sessions.',
        isVerified: true,
        helpfulCount: 14,
        createdAt: '2024-01-09T15:45:00Z',
        user: {
          firstName: 'Alex',
          lastName: 'Taylor',
          avatar: '/images/avatars/alex-taylor.jpg'
        }
      }
    ],
    rating: 4.5,
    reviewCount: 2,
    stockQuantity: 68,
    lowStockThreshold: 15,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-11T14:00:00Z'
  }
];

export const featuredProducts = products.filter(product => product.isFeatured);
export const saleProducts = products.filter(product => product.isOnSale);
export const newProducts = products.filter(product => 
  new Date(product.createdAt) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
);
