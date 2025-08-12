import { Brand, Product } from "./types";

// Extended brands list
export const extendedBrands: Brand[] = [
  {
    id: "brand-1",
    name: "Apple",
    slug: "apple",
    logo: "/images/brands/apple-logo.png",
    description: "Think Different",
    website: "https://apple.com",
    isActive: true,
  },
  {
    id: "brand-2",
    name: "Samsung",
    slug: "samsung",
    logo: "/images/brands/samsung-logo.png",
    description: "Do What You Can't",
    website: "https://samsung.com",
    isActive: true,
  },
  {
    id: "brand-3",
    name: "Nike",
    slug: "nike",
    logo: "/images/brands/nike-logo.png",
    description: "Just Do It",
    website: "https://nike.com",
    isActive: true,
  },
  {
    id: "brand-4",
    name: "Adidas",
    slug: "adidas",
    logo: "/images/brands/adidas-logo.png",
    description: "Impossible Is Nothing",
    website: "https://adidas.com",
    isActive: true,
  },
  {
    id: "brand-5",
    name: "Sony",
    slug: "sony",
    logo: "/images/brands/sony-logo.png",
    description: "Make.Believe",
    website: "https://sony.com",
    isActive: true,
  },
  {
    id: "brand-6",
    name: "LG",
    slug: "lg",
    logo: "/images/brands/lg-logo.png",
    description: "Life's Good",
    website: "https://lg.com",
    isActive: true,
  },
  {
    id: "brand-7",
    name: "Dell",
    slug: "dell",
    logo: "/images/brands/dell-logo.png",
    description: "Innovation that stops at nothing",
    website: "https://dell.com",
    isActive: true,
  },
  {
    id: "brand-8",
    name: "HP",
    slug: "hp",
    logo: "/images/brands/hp-logo.png",
    description: "Keep reinventing",
    website: "https://hp.com",
    isActive: true,
  },
  {
    id: "brand-9",
    name: "Canon",
    slug: "canon",
    logo: "/images/brands/canon-logo.png",
    description: "Delighting You Always",
    website: "https://canon.com",
    isActive: true,
  },
  {
    id: "brand-10",
    name: "Nintendo",
    slug: "nintendo",
    logo: "/images/brands/nintendo-logo.png",
    description: "Creating smiles",
    website: "https://nintendo.com",
    isActive: true,
  },
];

// Sample product data generator function
export const generateProducts = (): Product[] => {
  const products: Product[] = [];
  let productId = 1;

  // Electronics (15 products)
  const electronicsProducts = [
    { name: "iPhone 15 Pro Max", price: 1199.99, category: "cat-1-1" },
    { name: "Samsung Galaxy S24 Ultra", price: 1299.99, category: "cat-1-1" },
    { name: "MacBook Pro 16-inch", price: 2499.99, category: "cat-1-2" },
    { name: "Dell XPS 15", price: 1899.99, category: "cat-1-2" },
    { name: "iPad Pro 12.9", price: 1099.99, category: "cat-1-3" },
    { name: "Samsung Galaxy Tab S9", price: 799.99, category: "cat-1-3" },
    { name: "AirPods Pro", price: 249.99, category: "cat-1-4" },
    { name: "Sony WH-1000XM5", price: 399.99, category: "cat-1-4" },
    { name: "Apple Watch Series 9", price: 399.99, category: "cat-1-4" },
    { name: "Samsung Galaxy Watch 6", price: 349.99, category: "cat-1-4" },
    { name: "Canon EOS R5", price: 3899.99, category: "cat-1-4" },
    { name: "Sony A7 IV", price: 2499.99, category: "cat-1-4" },
    { name: "LG OLED C3 TV", price: 1999.99, category: "cat-1-4" },
    { name: "Samsung QLED Q80C", price: 1799.99, category: "cat-1-4" },
    { name: "PlayStation 5", price: 499.99, category: "cat-1-4" },
  ];

  // Fashion (15 products)
  const fashionProducts = [
    { name: "Nike Air Max 270", price: 129.99, category: "cat-2-3" },
    { name: "Adidas Ultraboost 22", price: 189.99, category: "cat-2-3" },
    { name: "Men's Casual Shirt", price: 49.99, category: "cat-2-1" },
    { name: "Women's Summer Dress", price: 79.99, category: "cat-2-2" },
    { name: "Leather Jacket", price: 199.99, category: "cat-2-1" },
    { name: "Denim Jeans", price: 89.99, category: "cat-2-1" },
    { name: "Running Shoes", price: 119.99, category: "cat-2-3" },
    { name: "Formal Suit", price: 299.99, category: "cat-2-1" },
    { name: "Evening Gown", price: 399.99, category: "cat-2-2" },
    { name: "Winter Coat", price: 159.99, category: "cat-2-2" },
    { name: "Athletic Shorts", price: 34.99, category: "cat-2-1" },
    { name: "Yoga Pants", price: 59.99, category: "cat-2-2" },
    { name: "Hiking Boots", price: 149.99, category: "cat-2-3" },
    { name: "Sneakers", price: 89.99, category: "cat-2-3" },
    { name: "Blazer", price: 129.99, category: "cat-2-2" },
  ];

  // Home & Garden (15 products)
  const homeProducts = [
    { name: "Dining Table Set", price: 599.99, category: "cat-3-1" },
    { name: "Sofa Set", price: 899.99, category: "cat-3-1" },
    { name: "Kitchen Mixer", price: 299.99, category: "cat-3-2" },
    { name: "Coffee Maker", price: 149.99, category: "cat-3-2" },
    { name: "Garden Hose", price: 39.99, category: "cat-3-3" },
    { name: "Plant Pots Set", price: 29.99, category: "cat-3-3" },
    { name: "Bed Frame", price: 399.99, category: "cat-3-1" },
    { name: "Blender", price: 89.99, category: "cat-3-2" },
    { name: "Garden Tools Set", price: 79.99, category: "cat-3-3" },
    { name: "Bookshelf", price: 199.99, category: "cat-3-1" },
    { name: "Toaster", price: 69.99, category: "cat-3-2" },
    { name: "Flower Seeds Pack", price: 9.99, category: "cat-3-3" },
    { name: "Office Chair", price: 249.99, category: "cat-3-1" },
    { name: "Microwave", price: 129.99, category: "cat-3-2" },
    { name: "Garden Bench", price: 179.99, category: "cat-3-3" },
  ];

  // Sports & Outdoors (10 products)
  const sportsProducts = [
    { name: "Treadmill", price: 899.99, category: "cat-4-1" },
    { name: "Dumbbells Set", price: 149.99, category: "cat-4-1" },
    { name: "Tent 4-Person", price: 299.99, category: "cat-4-2" },
    { name: "Sleeping Bag", price: 89.99, category: "cat-4-2" },
    { name: "Basketball", price: 49.99, category: "cat-4-3" },
    { name: "Soccer Ball", price: 39.99, category: "cat-4-3" },
    { name: "Yoga Mat", price: 29.99, category: "cat-4-1" },
    { name: "Camping Stove", price: 79.99, category: "cat-4-2" },
    { name: "Tennis Racket", price: 119.99, category: "cat-4-3" },
    { name: "Resistance Bands", price: 19.99, category: "cat-4-1" },
  ];

  // Books & Media (10 products)
  const mediaProducts = [
    { name: "The Great Gatsby", price: 12.99, category: "cat-5-1" },
    { name: "Harry Potter Box Set", price: 89.99, category: "cat-5-1" },
    { name: "Avengers Endgame DVD", price: 19.99, category: "cat-5-2" },
    { name: "Vinyl Record Player", price: 199.99, category: "cat-5-3" },
    { name: "Kindle Paperwhite", price: 139.99, category: "cat-5-1" },
    { name: "Bluetooth Speaker", price: 79.99, category: "cat-5-3" },
    { name: "Movie Collection Set", price: 49.99, category: "cat-5-2" },
    { name: "Audiobook Subscription", price: 14.99, category: "cat-5-1" },
    { name: "CD Collection", price: 29.99, category: "cat-5-3" },
    { name: "E-reader Case", price: 24.99, category: "cat-5-1" },
  ];

  // Toys & Games (10 products)
  const toyProducts = [
    { name: "Monopoly Board Game", price: 29.99, category: "cat-6-1" },
    { name: "LEGO Star Wars Set", price: 79.99, category: "cat-6-2" },
    { name: "Nintendo Switch", price: 299.99, category: "cat-6-3" },
    { name: "Puzzle 1000 Pieces", price: 19.99, category: "cat-6-1" },
    { name: "Educational Tablet", price: 149.99, category: "cat-6-2" },
    { name: "Xbox Series X", price: 499.99, category: "cat-6-3" },
    { name: "Chess Set", price: 39.99, category: "cat-6-1" },
    { name: "Science Kit", price: 59.99, category: "cat-6-2" },
    { name: "Gaming Headset", price: 89.99, category: "cat-6-3" },
    { name: "Art Supplies Set", price: 34.99, category: "cat-6-2" },
  ];

  // Health & Beauty (10 products)
  const beautyProducts = [
    { name: "Facial Cleanser", price: 24.99, category: "cat-7-1" },
    { name: "Foundation Makeup", price: 34.99, category: "cat-7-2" },
    { name: "Hair Dryer", price: 89.99, category: "cat-7-3" },
    { name: "Moisturizer Cream", price: 29.99, category: "cat-7-1" },
    { name: "Lipstick Set", price: 19.99, category: "cat-7-2" },
    { name: "Electric Razor", price: 149.99, category: "cat-7-3" },
    { name: "Sunscreen SPF 50", price: 14.99, category: "cat-7-1" },
    { name: "Eyeshadow Palette", price: 44.99, category: "cat-7-2" },
    { name: "Hair Straightener", price: 79.99, category: "cat-7-3" },
    { name: "Anti-aging Serum", price: 39.99, category: "cat-7-1" },
  ];

  // Automotive (5 products)
  const autoProducts = [
    { name: "Car Floor Mats", price: 49.99, category: "cat-8-2" },
    { name: "Phone Mount", price: 19.99, category: "cat-8-2" },
    { name: "Car Wash Kit", price: 34.99, category: "cat-8-2" },
    { name: "Tire Pressure Gauge", price: 9.99, category: "cat-8-3" },
    { name: "Car Air Freshener", price: 4.99, category: "cat-8-2" },
  ];

  // Baby & Kids (5 products)
  const babyProducts = [
    { name: "Baby Diapers Pack", price: 29.99, category: "cat-9-1" },
    { name: "Kids T-Shirt", price: 14.99, category: "cat-9-2" },
    { name: "Educational Toy", price: 24.99, category: "cat-9-3" },
    { name: "Baby Bottle Set", price: 19.99, category: "cat-9-1" },
    { name: "Kids Shoes", price: 39.99, category: "cat-9-2" },
  ];

  // Pet Supplies (5 products)
  const petProducts = [
    { name: "Dog Food 20lb", price: 49.99, category: "cat-10-1" },
    { name: "Cat Litter Box", price: 29.99, category: "cat-10-2" },
    { name: "Pet Toy Set", price: 19.99, category: "cat-10-1" },
    { name: "Fish Tank Filter", price: 34.99, category: "cat-10-3" },
    { name: "Pet Bed", price: 39.99, category: "cat-10-1" },
  ];

  // Office & Business (5 products)
  const officeProducts = [
    { name: "Printer Paper Ream", price: 9.99, category: "cat-11-1" },
    { name: "Desk Lamp", price: 49.99, category: "cat-11-2" },
    { name: "Wireless Mouse", price: 29.99, category: "cat-11-3" },
    { name: "Stapler", price: 4.99, category: "cat-11-1" },
    { name: "Monitor Stand", price: 79.99, category: "cat-11-2" },
  ];

  // Jewelry & Watches (5 products)
  const jewelryProducts = [
    { name: "Diamond Necklace", price: 899.99, category: "cat-12-1" },
    { name: "Gold Ring", price: 299.99, category: "cat-12-2" },
    { name: "Luxury Watch", price: 1299.99, category: "cat-12-3" },
    { name: "Pearl Earrings", price: 149.99, category: "cat-12-1" },
    { name: "Silver Bracelet", price: 89.99, category: "cat-12-2" },
  ];

  // Food & Beverages (5 products)
  const foodProducts = [
    { name: "Gourmet Coffee Beans", price: 24.99, category: "cat-13-3" },
    { name: "Organic Snack Mix", price: 14.99, category: "cat-13-2" },
    { name: "Premium Tea Set", price: 39.99, category: "cat-13-3" },
    { name: "Artisan Chocolate", price: 19.99, category: "cat-13-1" },
    { name: "Nuts Assortment", price: 29.99, category: "cat-13-2" },
  ];

  // Art & Crafts (5 products)
  const artProducts = [
    { name: "Acrylic Paint Set", price: 34.99, category: "cat-14-1" },
    { name: "Canvas Pack", price: 19.99, category: "cat-14-1" },
    { name: "Craft Paper Bundle", price: 14.99, category: "cat-14-2" },
    { name: "DIY Candle Kit", price: 29.99, category: "cat-14-3" },
    { name: "Paint Brushes Set", price: 24.99, category: "cat-14-1" },
  ];

  // Music & Instruments (5 products)
  const musicProducts = [
    { name: "Acoustic Guitar", price: 299.99, category: "cat-15-1" },
    { name: "Digital Piano", price: 599.99, category: "cat-15-2" },
    { name: "Bluetooth Speaker", price: 89.99, category: "cat-15-3" },
    { name: "Violin", price: 199.99, category: "cat-15-1" },
    { name: "Microphone", price: 149.99, category: "cat-15-3" },
  ];

  // Tools & Hardware (5 products)
  const toolProducts = [
    { name: "Cordless Drill", price: 199.99, category: "cat-16-1" },
    { name: "Tool Set", price: 149.99, category: "cat-16-2" },
    { name: "Circular Saw", price: 299.99, category: "cat-16-1" },
    { name: "Screwdriver Set", price: 39.99, category: "cat-16-2" },
    { name: "Hardware Kit", price: 24.99, category: "cat-16-3" },
  ];

  // Travel & Luggage (5 products)
  const travelProducts = [
    { name: "Rolling Suitcase", price: 199.99, category: "cat-17-1" },
    { name: "Travel Backpack", price: 89.99, category: "cat-17-1" },
    { name: "Packing Cubes", price: 29.99, category: "cat-17-2" },
    { name: "Camping Tent", price: 149.99, category: "cat-17-3" },
    { name: "Travel Pillow", price: 19.99, category: "cat-17-2" },
  ];

  // Collectibles & Hobbies (5 products)
  const collectibleProducts = [
    { name: "Pokemon Card Pack", price: 4.99, category: "cat-18-1" },
    { name: "Model Car Kit", price: 34.99, category: "cat-18-2" },
    { name: "Action Figure", price: 24.99, category: "cat-18-3" },
    { name: "Stamp Collection", price: 19.99, category: "cat-18-1" },
    { name: "RC Car", price: 89.99, category: "cat-18-2" },
  ];

  // Pharmacy & Health (5 products)
  const healthProducts = [
    { name: "Multivitamin Bottle", price: 19.99, category: "cat-19-1" },
    { name: "Toothbrush Set", price: 9.99, category: "cat-19-2" },
    { name: "First Aid Kit", price: 29.99, category: "cat-19-3" },
    { name: "Protein Powder", price: 39.99, category: "cat-19-1" },
    { name: "Hand Sanitizer", price: 4.99, category: "cat-19-2" },
  ];

  // Garden & Outdoor (5 products)
  const gardenProducts = [
    { name: "Garden Shovel", price: 29.99, category: "cat-20-1" },
    { name: "Flower Seeds Pack", price: 9.99, category: "cat-20-2" },
    { name: "Patio Chair", price: 79.99, category: "cat-20-3" },
    { name: "Watering Can", price: 19.99, category: "cat-20-1" },
    { name: "Garden Gnome", price: 14.99, category: "cat-20-3" },
  ];

  // Combine all product arrays
  const allProducts = [
    ...electronicsProducts,
    ...fashionProducts,
    ...homeProducts,
    ...sportsProducts,
    ...mediaProducts,
    ...toyProducts,
    ...beautyProducts,
    ...autoProducts,
    ...babyProducts,
    ...petProducts,
    ...officeProducts,
    ...jewelryProducts,
    ...foodProducts,
    ...artProducts,
    ...musicProducts,
    ...toolProducts,
    ...travelProducts,
    ...collectibleProducts,
    ...healthProducts,
    ...gardenProducts,
  ];

  // Generate product objects
  allProducts.forEach((productData, index) => {
    const product: Product = {
      id: `prod-${productId}`,
      name: productData.name,
      slug: productData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      description: `High-quality ${productData.name.toLowerCase()} with excellent features and durability.`,
      shortDescription: `Premium ${productData.name.toLowerCase()}`,
      price: productData.price,
      comparePrice: productData.price * 1.2,
      costPrice: productData.price * 0.6,
      sku: `SKU-${productId.toString().padStart(3, "0")}`,
      barcode: `1234567890${productId.toString().padStart(3, "0")}`,
      categoryId: productData.category,
      brandId: `brand-${Math.floor(Math.random() * 10) + 1}`,
      images: [
        `/images/products/${productData.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")}-1.jpg`,
        `/images/products/${productData.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")}-2.jpg`,
        `/images/products/${productData.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")}-3.jpg`,
      ],
      thumbnail: `/images/products/${productData.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")}-thumb.jpg`,
      isActive: true,
      isFeatured: index < 20,
      isOnSale: Math.random() > 0.7,
      weight: Math.floor(Math.random() * 1000) + 100,
      dimensions: {
        length: Math.floor(Math.random() * 50) + 10,
        width: Math.floor(Math.random() * 30) + 5,
        height: Math.floor(Math.random() * 20) + 2,
      },
      tags: ["premium", "quality", "popular"],
      variants: [
        {
          id: `var-${productId}-1`,
          productId: `prod-${productId}`,
          name: "Standard",
          sku: `SKU-${productId.toString().padStart(3, "0")}-STD`,
          price: productData.price,
          stockQuantity: Math.floor(Math.random() * 100) + 10,
          attributes: {
            size: "Standard",
            color: "Default",
          },
          isActive: true,
        },
      ],
      reviews: [],
      rating: Math.floor(Math.random() * 2) + 4,
      reviewCount: Math.floor(Math.random() * 50) + 5,
      stockQuantity: Math.floor(Math.random() * 100) + 10,
      lowStockThreshold: 10,
      createdAt: new Date(
        Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
      ).toISOString(),
      updatedAt: new Date().toISOString(),
    };

    products.push(product);
    productId++;
  });

  return products;
};

export const allProducts = generateProducts();
export const featuredProducts = allProducts.filter(
  (product) => product.isFeatured
);
export const saleProducts = allProducts.filter((product) => product.isOnSale);
export const newProducts = allProducts.filter(
  (product) =>
    new Date(product.createdAt) >
    new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
);
