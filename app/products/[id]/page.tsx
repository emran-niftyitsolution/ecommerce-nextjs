'use client';

import Footer from '@/components/navigation/Footer';
import Header from '@/components/navigation/Header';
import { Button } from '@/components/ui/Button';
import { useAppDispatch } from '@/lib/store';
import { addToCart } from '@/lib/store/slices/cartSlice';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  FiCheck,
  FiHeart,
  FiMinus,
  FiPlus,
  FiRefreshCw,
  FiShare2,
  FiShield,
  FiShoppingCart,
  FiStar,
  FiTruck,
  FiZoomIn,
} from 'react-icons/fi';
import { toast } from 'react-toastify';
// Mock products data - same as products page
const mockProducts = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 89.99,
    originalPrice: 129.99,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 128,
    badge: 'Best Seller',
    category: 'Electronics',
    brand: 'AudioTech',
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    price: 199.99,
    originalPrice: 249.99,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    rating: 4.3,
    reviews: 89,
    badge: 'New',
    category: 'Electronics',
    brand: 'FitTech',
  },
  {
    id: 3,
    name: 'Premium Coffee Maker',
    price: 149.99,
    image:
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 256,
    badge: 'Top Rated',
    category: 'Home & Garden',
    brand: 'BrewMaster',
  },
  {
    id: 4,
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    rating: 4.2,
    reviews: 67,
    category: 'Fashion',
    brand: 'EcoWear',
  },
  {
    id: 5,
    name: 'Wireless Gaming Mouse',
    price: 79.99,
    image:
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 142,
    badge: 'Gaming',
    category: 'Electronics',
    brand: 'GameTech',
  },
  {
    id: 6,
    name: 'Yoga Mat Premium',
    price: 49.99,
    originalPrice: 69.99,
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    rating: 4.4,
    reviews: 93,
    category: 'Sports',
    brand: 'FitLife',
  },
];

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  // Find the product by ID
  const product = mockProducts.find(p => p.id.toString() === params.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="text-6xl mb-4">😕</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Product not found
            </h1>
            <p className="text-gray-600 mb-4">
              The product you're looking for doesn't exist.
            </p>
            <Button onClick={() => router.push('/products')}>
              Back to Products
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const productImages = [
    product.image,
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&h=600&fit=crop',
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'Black', value: 'black', class: 'bg-black' },
    { name: 'White', value: 'white', class: 'bg-white border border-gray-300' },
    { name: 'Blue', value: 'blue', class: 'bg-blue-500' },
    { name: 'Red', value: 'red', class: 'bg-red-500' },
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    if (!selectedColor) {
      toast.error('Please select a color');
      return;
    }

    dispatch(
      addToCart({
        id: product.id.toString(),
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        category: product.category || 'Electronics',
        quantity,
        rating: product.rating,
        reviews: product.reviews,
        badge: product.badge,
      })
    );
    toast.success(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = () => {
    toast.success(`${product.name} added to wishlist!`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out this amazing product: ${product.name}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  const relatedProducts = mockProducts
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
            <span>/</span>
            <a href="/products" className="hover:text-blue-600">
              Products
            </a>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
                <FiZoomIn className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-blue-500'
                      : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Product Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                {product.badge && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {product.badge}
                  </span>
                )}
                <span className="text-sm text-gray-500">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Experience premium quality with this amazing product. Features
                advanced technology and sleek design.
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-lg font-semibold text-gray-900">
                  {product.rating}
                </span>
              </div>
              <span className="text-gray-500">
                ({product.reviews?.toLocaleString()} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline space-x-3">
              <span className="text-4xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full font-medium">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              )}
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
              <div className="grid grid-cols-6 gap-2">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 rounded-lg border-2 font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-blue-500 bg-blue-50 text-blue-600'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Color
              </h3>
              <div className="flex space-x-3">
                {colors.map(color => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`relative w-10 h-10 rounded-full ${color.class} border-2 transition-colors ${
                      selectedColor === color.value
                        ? 'border-blue-500'
                        : 'border-gray-200'
                    }`}
                    title={color.name}
                  >
                    {selectedColor === color.value && (
                      <FiCheck className="absolute inset-0 m-auto w-5 h-5 text-white drop-shadow" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quantity
              </h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  <FiMinus className="w-4 h-4" />
                </button>
                <span className="w-16 text-center text-lg font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  <FiPlus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                icon={<FiShoppingCart className="w-5 h-5" />}
              >
                Add to Cart
              </Button>
              <Button
                onClick={handleAddToWishlist}
                variant="outline"
                className="px-6"
                icon={<FiHeart className="w-5 h-5" />}
              />
              <Button
                onClick={handleShare}
                variant="outline"
                className="px-6"
                icon={<FiShare2 className="w-5 h-5" />}
              />
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <FiTruck className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <FiShield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Secure Payment</p>
              </div>
              <div className="text-center">
                <FiRefreshCw className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Easy Returns</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Product Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Features
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FiCheck className="w-4 h-4 text-green-500 mr-2" />
                    Premium quality materials
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="w-4 h-4 text-green-500 mr-2" />
                    Advanced technology
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="w-4 h-4 text-green-500 mr-2" />
                    Sleek and modern design
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="w-4 h-4 text-green-500 mr-2" />
                    Long-lasting durability
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Specifications
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Brand:</span>
                    <span className="font-medium">
                      {product.brand || 'ShopHub'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span className="font-medium">{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rating:</span>
                    <span className="font-medium">{product.rating}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reviews:</span>
                    <span className="font-medium">
                      {product.reviews?.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <div
                key={relatedProduct.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {relatedProduct.badge && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {relatedProduct.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      ${relatedProduct.price}
                    </span>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
