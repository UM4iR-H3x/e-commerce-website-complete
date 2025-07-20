import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Star, 
  Truck, 
  Shield, 
  ArrowLeft,
  Check,
  MessageCircle
} from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
          Product not found
        </h1>
        <Link to="/products" className="btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleBuyNow = () => {
    const phoneNumber = '+93782538457';
    const message = `Hi! I'm interested in buying ${product.name} for $${product.price}. Can you help me with the purchase?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const images = [product.image, product.image, product.image]; // Multiple images for gallery

  return (
    <>
      <Helmet>
        <title>{product.name} - Premium Dropshipping Store</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/products"
            className="inline-flex items-center text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                ${product.price}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-primary-600'
                      : 'border-secondary-200 dark:border-secondary-700'
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Product Title and Rating */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-secondary-300 dark:text-secondary-600'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-secondary-600 dark:text-secondary-400">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Price and Shipping */}
            <div className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  ${product.price}
                </span>
                <span className="text-sm text-secondary-500 dark:text-secondary-400">
                  {product.shipping}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary-600 dark:text-secondary-400">
                <Truck className="w-4 h-4" />
                Free shipping on orders over $50
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-secondary-300 dark:border-secondary-600 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-secondary-900 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-secondary-500 dark:text-secondary-400">
                  {product.shipping}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                Buy Now via WhatsApp
              </button>
            </div>

            {/* Product Description */}
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
                Description
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-600 dark:text-secondary-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
                Why Trust Us?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-500" />
                  <div>
                    <div className="font-medium text-secondary-900 dark:text-white">
                      Secure Payment
                    </div>
                    <div className="text-sm text-secondary-600 dark:text-secondary-400">
                      Multiple payment options
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-6 h-6 text-blue-500" />
                  <div>
                    <div className="font-medium text-secondary-900 dark:text-white">
                      Fast Shipping
                    </div>
                    <div className="text-sm text-secondary-600 dark:text-secondary-400">
                      Worldwide delivery
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail; 