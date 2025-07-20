import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqs = [
    {
      id: 1,
      question: "What is dropshipping and how does it work?",
      answer: "Dropshipping is a retail fulfillment method where we don't keep products in stock. Instead, when you place an order, we purchase the item from a third party (usually CJdropshipping) and have it shipped directly to you. This allows us to offer a wide variety of products without maintaining inventory."
    },
    {
      id: 2,
      question: "How long does shipping take?",
      answer: "Shipping times vary by product and location. Most products ship within 7-20 days worldwide. You'll receive tracking information once your order is shipped. Express shipping options are available for faster delivery."
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and local payment methods in most countries. All payments are processed securely with SSL encryption to protect your information."
    },
    {
      id: 4,
      question: "Do you offer refunds or returns?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your purchase, you can return it in its original condition within 30 days for a full refund. Contact our customer support to initiate a return."
    },
    {
      id: 5,
      question: "Are your products authentic and high quality?",
      answer: "Absolutely! All our products are carefully selected from trusted suppliers like CJdropshipping. We only work with verified manufacturers and conduct quality checks to ensure you receive premium products."
    },
    {
      id: 6,
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email. You can also track your order through your account dashboard. If you need help tracking your order, contact our support team."
    },
    {
      id: 7,
      question: "Do you ship worldwide?",
      answer: "Yes, we ship to over 50 countries worldwide! We work with reliable shipping partners to ensure your orders reach you safely and on time. Shipping costs and delivery times vary by location."
    },
    {
      id: 8,
      question: "What if my order arrives damaged or defective?",
      answer: "If your order arrives damaged or defective, please contact us immediately with photos of the damage. We'll arrange a replacement or refund at no additional cost to you."
    },
    {
      id: 9,
      question: "Can I cancel my order after it's placed?",
      answer: "Orders can be cancelled within 24 hours of placement, as long as they haven't been shipped yet. Contact our customer support team to request a cancellation. Once shipped, orders cannot be cancelled."
    },
    {
      id: 10,
      question: "How do I contact customer support?",
      answer: "You can reach our customer support team 24/7 through WhatsApp (+93 782 538 457), email (info@dropstore.com), or by filling out the contact form on our website. We typically respond within 2-4 hours."
    },
    {
      id: 11,
      question: "Are there any hidden fees or charges?",
      answer: "No hidden fees! The price you see is the price you pay. Shipping is included in the product price for most items. Any applicable taxes or customs duties will be clearly displayed during checkout."
    },
    {
      id: 12,
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer special pricing for bulk orders. Contact us directly through WhatsApp or email with your requirements, and we'll provide you with a custom quote and special pricing."
    }
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Premium Dropshipping Store</title>
        <meta name="description" content="Find answers to frequently asked questions about our products, shipping, payments, and customer service. Get help with your orders and learn more about our dropshipping service." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, payments, and more.
            Can't find what you're looking for? Contact our support team!
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="card overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                onKeyDown={(e) => handleKeyDown(e, faq.id)}
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-800"
                aria-expanded={openItems.has(faq.id)}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.has(faq.id) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-secondary-500 dark:text-secondary-400" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openItems.has(faq.id) && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card p-8 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6 max-w-md mx-auto">
              Our customer support team is here to help you 24/7. Get in touch with us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/93782538457?text=Hello! I have a question about your products. Can you help me?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Chat on WhatsApp
              </a>
              <a
                href="mailto:info@dropstore.com"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default FAQ; 