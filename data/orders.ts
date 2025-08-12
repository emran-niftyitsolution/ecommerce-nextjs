import { Order, OrderItem, OrderStatus, PaymentStatus, PaymentMethod, ShippingMethod } from './types';
import { addresses } from './users';

export const orders: Order[] = [
  {
    id: 'order-1',
    userId: 'user-1',
    orderNumber: 'ORD-2024-001',
    status: OrderStatus.DELIVERED,
    items: [
      {
        id: 'item-1',
        orderId: 'order-1',
        productId: 'prod-1',
        variantId: 'var-1-1',
        quantity: 1,
        price: 1199.99,
        total: 1199.99,
        product: {
          name: 'iPhone 15 Pro Max',
          thumbnail: '/images/products/iphone-15-pro-max-thumb.jpg',
          sku: 'IPH15PM-256GB'
        },
        variant: {
          name: '256GB - Natural Titanium',
          attributes: {
            storage: '256GB',
            color: 'Natural Titanium'
          }
        }
      }
    ],
    subtotal: 1199.99,
    tax: 95.99,
    shipping: 0,
    discount: 50.00,
    total: 1245.98,
    currency: 'USD',
    billingAddress: addresses[1], // John's billing address
    shippingAddress: addresses[0], // John's shipping address
    paymentMethod: PaymentMethod.CREDIT_CARD,
    paymentStatus: PaymentStatus.PAID,
    shippingMethod: ShippingMethod.EXPRESS,
    trackingNumber: '1Z999AA1234567890',
    notes: 'Please deliver to front desk if not home',
    createdAt: '2024-01-10T10:30:00Z',
    updatedAt: '2024-01-12T14:20:00Z'
  },
  {
    id: 'order-2',
    userId: 'user-2',
    orderNumber: 'ORD-2024-002',
    status: OrderStatus.SHIPPED,
    items: [
      {
        id: 'item-2',
        orderId: 'order-2',
        productId: 'prod-3',
        variantId: 'var-3-1',
        quantity: 2,
        price: 129.99,
        total: 259.98,
        product: {
          name: 'Nike Air Max 270',
          thumbnail: '/images/products/nike-air-max-270-thumb.jpg',
          sku: 'NIKE-AM270-BLK'
        },
        variant: {
          name: 'Black - Size 9',
          attributes: {
            color: 'Black',
            size: '9'
          }
        }
      },
      {
        id: 'item-3',
        orderId: 'order-2',
        productId: 'prod-5',
        variantId: 'var-5-1',
        quantity: 1,
        price: 399.99,
        total: 399.99,
        product: {
          name: 'Sony WH-1000XM5',
          thumbnail: '/images/products/sony-wh1000xm5-thumb.jpg',
          sku: 'SONY-WH1000XM5-BLK'
        },
        variant: {
          name: 'Black',
          attributes: {
            color: 'Black'
          }
        }
      }
    ],
    subtotal: 659.97,
    tax: 52.80,
    shipping: 15.00,
    discount: 0,
    total: 727.77,
    currency: 'USD',
    billingAddress: addresses[3], // Jane's billing address
    shippingAddress: addresses[2], // Jane's shipping address
    paymentMethod: PaymentMethod.PAYPAL,
    paymentStatus: PaymentStatus.PAID,
    shippingMethod: ShippingMethod.STANDARD,
    trackingNumber: '1Z999AA1234567891',
    createdAt: '2024-01-11T14:20:00Z',
    updatedAt: '2024-01-13T09:15:00Z'
  },
  {
    id: 'order-3',
    userId: 'user-3',
    orderNumber: 'ORD-2024-003',
    status: OrderStatus.PROCESSING,
    items: [
      {
        id: 'item-4',
        orderId: 'order-3',
        productId: 'prod-2',
        variantId: 'var-2-1',
        quantity: 1,
        price: 2499.99,
        total: 2499.99,
        product: {
          name: 'MacBook Pro 16-inch',
          thumbnail: '/images/products/macbook-pro-16-thumb.jpg',
          sku: 'MBP16-M3MAX-1TB'
        },
        variant: {
          name: 'M3 Max - 1TB - Space Black',
          attributes: {
            processor: 'M3 Max',
            storage: '1TB',
            color: 'Space Black'
          }
        }
      }
    ],
    subtotal: 2499.99,
    tax: 199.99,
    shipping: 0,
    discount: 100.00,
    total: 2599.98,
    currency: 'USD',
    billingAddress: addresses[4], // Mike's address
    shippingAddress: addresses[4], // Mike's address
    paymentMethod: PaymentMethod.APPLE_PAY,
    paymentStatus: PaymentStatus.PAID,
    shippingMethod: ShippingMethod.EXPRESS,
    createdAt: '2024-01-12T09:15:00Z',
    updatedAt: '2024-01-12T16:30:00Z'
  },
  {
    id: 'order-4',
    userId: 'user-4',
    orderNumber: 'ORD-2024-004',
    status: OrderStatus.CONFIRMED,
    items: [
      {
        id: 'item-5',
        orderId: 'order-4',
        productId: 'prod-4',
        variantId: 'var-4-1',
        quantity: 1,
        price: 1299.99,
        total: 1299.99,
        product: {
          name: 'Samsung Galaxy S24 Ultra',
          thumbnail: '/images/products/samsung-s24-ultra-thumb.jpg',
          sku: 'SAMSUNG-S24U-512GB'
        },
        variant: {
          name: '512GB - Titanium Gray',
          attributes: {
            storage: '512GB',
            color: 'Titanium Gray'
          }
        }
      }
    ],
    subtotal: 1299.99,
    tax: 104.00,
    shipping: 0,
    discount: 0,
    total: 1403.99,
    currency: 'USD',
    billingAddress: addresses[5], // Sarah's address
    shippingAddress: addresses[5], // Sarah's address
    paymentMethod: PaymentMethod.CREDIT_CARD,
    paymentStatus: PaymentStatus.PAID,
    shippingMethod: ShippingMethod.EXPRESS,
    createdAt: '2024-01-13T11:45:00Z',
    updatedAt: '2024-01-13T12:00:00Z'
  },
  {
    id: 'order-5',
    userId: 'user-5',
    orderNumber: 'ORD-2024-005',
    status: OrderStatus.PENDING,
    items: [
      {
        id: 'item-6',
        orderId: 'order-5',
        productId: 'prod-3',
        variantId: 'var-3-2',
        quantity: 1,
        price: 129.99,
        total: 129.99,
        product: {
          name: 'Nike Air Max 270',
          thumbnail: '/images/products/nike-air-max-270-thumb.jpg',
          sku: 'NIKE-AM270-BLK'
        },
        variant: {
          name: 'Black - Size 10',
          attributes: {
            color: 'Black',
            size: '10'
          }
        }
      }
    ],
    subtotal: 129.99,
    tax: 10.40,
    shipping: 8.99,
    discount: 0,
    total: 149.38,
    currency: 'USD',
    billingAddress: addresses[6], // David's address
    shippingAddress: addresses[6], // David's address
    paymentMethod: PaymentMethod.GOOGLE_PAY,
    paymentStatus: PaymentStatus.PENDING,
    shippingMethod: ShippingMethod.STANDARD,
    createdAt: '2024-01-14T16:20:00Z',
    updatedAt: '2024-01-14T16:20:00Z'
  }
];

export const getOrdersByUserId = (userId: string): Order[] => {
  return orders.filter(order => order.userId === userId);
};

export const getOrderByOrderNumber = (orderNumber: string): Order | undefined => {
  return orders.find(order => order.orderNumber === orderNumber);
};

export const getRecentOrders = (limit: number = 5): Order[] => {
  return orders
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
};

export const getOrdersByStatus = (status: OrderStatus): Order[] => {
  return orders.filter(order => order.status === status);
};
