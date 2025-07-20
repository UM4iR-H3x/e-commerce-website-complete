import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Trash2, 
  ArrowLeft, 
  MessageCircle,
  Truck,
  Shield
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice, 
    clearCart 
  } = useCart();

  const handleCheckout = () => {
    const phoneNumber = '+93782538457';
    const orderItems = items.map(item => 
      `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const message = `Hi! I'd like to place an order:\n\n${orderItems}\n\nTotal: $${getTotalPrice().toFixed(2)}\n\nCan you help me complete this purchase?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.3
      }
    }
  };

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>Cart - Premium Dropshipping Store</title>
          <meta name="description" content="Your shopping cart is empty. Browse our products and add items to get started." />
        </Helmet>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              Your cart is empty
            </h1>
            <p className="text-secondary-600 dark:text-secondary-400 mb-8 max-w-md mx-auto">
              Looks like you haven't added any products to your cart yet. Start shopping to discover amazing products!
            </p>
            <Link
              to="/products"
              className="btn-primary inline-flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Cart - Premium Dropshipping Store</title>
        <meta name="description" content="Review your cart items and proceed to checkout. Secure payment and fast worldwide shipping available." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-secondary-900 dark:text-white">
              Shopping Cart
            </h1>
            <button
              onClick={clearCart}
              className="text-secondary-600 dark:text-secondary-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    exit="exit"
                    className="card p-6"
                  >
                    <div className="flex items-center gap-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-1 truncate">
                          {item.name}
                        </h3>
                        <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-2">
                          {item.shipping}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                            ${item.price}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="w-8 h-8 flex items-center justify-center border border-secondary-300 dark:border-secondary-600 rounded hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors"
                            >
                              -
                            </button>
                            <span className="w-12 text-center text-secondary-900 dark:text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center border border-secondary-300 dark:border-secondary-600 rounded hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex-shrink-0 p-2 text-secondary-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Item Total */}
                    <div className="mt-4 pt-4 border-t border-secondary-200 dark:border-secondary-700">
                      <div className="flex justify-between items-center">
                        <span className="text-secondary-600 dark:text-secondary-400">
                          Item Total:
                        </span>
                        <span className="text-lg font-semibold text-secondary-900 dark:text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="card p-6 sticky top-24">
              <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">
                Order Summary
              </h2>

              {/* Order Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-secondary-600 dark:text-secondary-400">
                    Items ({items.length}):
                  </span>
                  <span className="text-secondary-900 dark:text-white">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600 dark:text-secondary-400">
                    Shipping:
                  </span>
                  <span className="text-green-600 dark:text-green-400">
                    Free
                  </span>
                </div>
                <div className="border-t border-secondary-200 dark:border-secondary-700 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-secondary-900 dark:text-white">
                      Total:
                    </span>
                    <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-secondary-900 dark:text-white">
                    Secure Payment
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-secondary-900 dark:text-white">
                    Fast Worldwide Shipping
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                Checkout via WhatsApp
              </button>

              {/* Continue Shopping */}
              <Link
                to="/products"
                className="block w-full text-center mt-4 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Cart; 