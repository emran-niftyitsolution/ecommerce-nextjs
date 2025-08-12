import { Coupon } from "./types";

export const coupons: Coupon[] = [
  {
    id: "coupon-1",
    code: "WELCOME10",
    type: "percentage",
    value: 10,
    minimumAmount: 50,
    maximumDiscount: 100,
    usageLimit: 1000,
    usedCount: 234,
    isActive: true,
    validFrom: "2024-01-01T00:00:00Z",
    validUntil: "2024-12-31T23:59:59Z",
    applicableProducts: [],
    applicableCategories: [],
  },
  {
    id: "coupon-2",
    code: "SAVE20",
    type: "percentage",
    value: 20,
    minimumAmount: 100,
    maximumDiscount: 200,
    usageLimit: 500,
    usedCount: 156,
    isActive: true,
    validFrom: "2024-01-01T00:00:00Z",
    validUntil: "2024-06-30T23:59:59Z",
    applicableProducts: [],
    applicableCategories: ["cat-1", "cat-2"], // Electronics and Fashion
  },
  {
    id: "coupon-3",
    code: "FREESHIP",
    type: "fixed",
    value: 15,
    minimumAmount: 75,
    maximumDiscount: 15,
    usageLimit: 2000,
    usedCount: 892,
    isActive: true,
    validFrom: "2024-01-01T00:00:00Z",
    validUntil: "2024-12-31T23:59:59Z",
    applicableProducts: [],
    applicableCategories: [],
  },
  {
    id: "coupon-4",
    code: "FLASH25",
    type: "percentage",
    value: 25,
    minimumAmount: 200,
    maximumDiscount: 500,
    usageLimit: 100,
    usedCount: 67,
    isActive: true,
    validFrom: "2024-01-15T00:00:00Z",
    validUntil: "2024-01-31T23:59:59Z",
    applicableProducts: ["prod-1", "prod-2", "prod-4"], // Specific products
    applicableCategories: [],
  },
  {
    id: "coupon-5",
    code: "NEWCUST",
    type: "fixed",
    value: 25,
    minimumAmount: 25,
    maximumDiscount: 25,
    usageLimit: 5000,
    usedCount: 1234,
    isActive: true,
    validFrom: "2024-01-01T00:00:00Z",
    validUntil: "2024-12-31T23:59:59Z",
    applicableProducts: [],
    applicableCategories: [],
  },
  {
    id: "coupon-6",
    code: "SPORTS15",
    type: "percentage",
    value: 15,
    minimumAmount: 50,
    maximumDiscount: 150,
    usageLimit: 300,
    usedCount: 89,
    isActive: true,
    validFrom: "2024-01-01T00:00:00Z",
    validUntil: "2024-12-31T23:59:59Z",
    applicableProducts: [],
    applicableCategories: ["cat-4"], // Sports & Outdoors
  },
  {
    id: "coupon-7",
    code: "HOME30",
    type: "percentage",
    value: 30,
    minimumAmount: 150,
    maximumDiscount: 300,
    usageLimit: 200,
    usedCount: 45,
    isActive: true,
    validFrom: "2024-01-01T00:00:00Z",
    validUntil: "2024-03-31T23:59:59Z",
    applicableProducts: [],
    applicableCategories: ["cat-3"], // Home & Garden
  },
  {
    id: "coupon-8",
    code: "BEAUTY20",
    type: "percentage",
    value: 20,
    minimumAmount: 30,
    maximumDiscount: 100,
    usageLimit: 400,
    usedCount: 178,
    isActive: true,
    validFrom: "2024-01-01T00:00:00Z",
    validUntil: "2024-12-31T23:59:59Z",
    applicableProducts: [],
    applicableCategories: ["cat-7"], // Health & Beauty
  },
  {
    id: "coupon-9",
    code: "EXPIRED50",
    type: "percentage",
    value: 50,
    minimumAmount: 100,
    maximumDiscount: 500,
    usageLimit: 50,
    usedCount: 50,
    isActive: false,
    validFrom: "2023-01-01T00:00:00Z",
    validUntil: "2023-12-31T23:59:59Z",
    applicableProducts: [],
    applicableCategories: [],
  },
  {
    id: "coupon-10",
    code: "FUTURE30",
    type: "percentage",
    value: 30,
    minimumAmount: 200,
    maximumDiscount: 600,
    usageLimit: 100,
    usedCount: 0,
    isActive: false,
    validFrom: "2024-06-01T00:00:00Z",
    validUntil: "2024-08-31T23:59:59Z",
    applicableProducts: [],
    applicableCategories: [],
  },
];

export const getActiveCoupons = (): Coupon[] => {
  const now = new Date();
  return coupons.filter(
    (coupon) =>
      coupon.isActive &&
      new Date(coupon.validFrom) <= now &&
      new Date(coupon.validUntil) >= now
  );
};

export const getCouponByCode = (code: string): Coupon | undefined => {
  return coupons.find(
    (coupon) => coupon.code.toLowerCase() === code.toLowerCase()
  );
};

export const isCouponValid = (coupon: Coupon): boolean => {
  const now = new Date();
  return (
    coupon.isActive &&
    new Date(coupon.validFrom) <= now &&
    new Date(coupon.validUntil) >= now &&
    coupon.usedCount < (coupon.usageLimit || Infinity)
  );
};
