import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Log form data to console (mock functionality)
    console.log('Contact form submission:', formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = '+93782538457';
    const message = 'Hello! I have a question about your products. Can you help me?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+93 782 538 457',
      description: 'Call us anytime',
      action: () => window.open('tel:+93782538457')
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'info@dropstore.com',
      description: 'Send us an email',
      action: () => window.open('mailto:info@dropstore.com')
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      value: 'Kabul, Afghanistan',
      description: 'Our main office'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      value: '24/7 Support',
      description: 'Always here to help'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Premium Dropshipping Store</title>
        <meta name="description" content="Get in touch with us for any questions about our products, shipping, or customer support. We're here to help 24/7." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Have questions about our products or need help with your order? 
            We're here to help you 24/7!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                Send us a Message
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    Thank you for contacting us. We'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="input-field resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:bg-secondary-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="card p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={info.action}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="card p-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
            >
              <div className="text-center">
                <MessageCircle className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  Chat with us on WhatsApp
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                  Get instant support and answers to your questions
                </p>
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start WhatsApp Chat
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400">
              Find quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                How long does shipping take?
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                Shipping typically takes 7-20 days worldwide, depending on your location and the product.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                We accept all major credit cards, PayPal, and local payment methods in most countries.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                Yes, we offer a 30-day money-back guarantee for all products in their original condition.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                Is my payment secure?
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                Absolutely! We use industry-standard SSL encryption to protect all your payment information.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact; 