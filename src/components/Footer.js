import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'All Products', href: '/products' },
      { name: 'Electronics', href: '/products?category=Electronics' },
      { name: 'Home & Living', href: '/products?category=Home%20%26%20Lighting' },
      { name: 'Fashion', href: '/products?category=Fashion%20%26%20Accessories' },
      { name: 'Beauty', href: '/products?category=Beauty%20%26%20Personal%20Care' }
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Shipping Info', href: '/faq' },
      { name: 'Returns', href: '/faq' },
      { name: 'Size Guide', href: '/faq' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Mission', href: '/about' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Careers', href: '/careers' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com' }
  ];

  const contactInfo = [
    { icon: <Phone className="w-4 h-4" />, text: '+93 782 538 457' },
    { icon: <Mail className="w-4 h-4" />, text: 'info@dropstore.com' },
    { icon: <MapPin className="w-4 h-4" />, text: 'Kabul, Afghanistan' }
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h3 className="text-2xl font-bold text-white">DropStore</h3>
            </Link>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Premium dropshipping store bringing you the best trending products from around the world. 
              Fast worldwide shipping, secure payments, and excellent customer service.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-3 text-secondary-300">
                  <span className="text-primary-400">
                    {contact.icon}
                  </span>
                  <span>{contact.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-secondary-300 hover:text-white transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-secondary-800"
        >
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-2">
              Stay Updated
            </h4>
            <p className="text-secondary-300 mb-4">
              Subscribe to our newsletter for the latest products and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-secondary-800 border border-secondary-700 text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-secondary-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-400 text-sm">
              © {currentYear} DropStore. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-secondary-400">
              <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 