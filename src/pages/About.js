import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Globe, 
  Award, 
  Heart,
  Shield,
  Truck,
  Star
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Quality First',
      description: 'We never compromise on quality. Every product in our collection is carefully selected and tested to meet our high standards.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Focused',
      description: 'Our customers are at the heart of everything we do. We provide exceptional service and support to ensure complete satisfaction.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'We serve customers worldwide with fast, reliable shipping and local payment options for a seamless shopping experience.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Trust & Reliability',
      description: 'Building trust through transparent pricing, secure payments, and honest communication with our valued customers.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '50+', label: 'Countries Served' },
    { number: '99%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const team = [
    {
      name: 'Samiul Haq',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      description: 'Passionate about bringing the best products to customers worldwide.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      description: 'Ensuring smooth operations and excellent customer experience.'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      description: 'Curating the best trending products for our customers.'
    }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>About Us - Premium Dropshipping Store</title>
        <meta name="description" content="Learn about our mission to provide premium dropshipping products with excellent customer service and fast worldwide shipping." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            About Our Store
          </h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto leading-relaxed">
            We're passionate about bringing you the best trending products from around the world. 
            Our mission is to provide premium quality items with exceptional customer service and fast worldwide shipping.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-6 leading-relaxed">
                To become the most trusted dropshipping platform, connecting customers worldwide with 
                high-quality trending products while providing exceptional service and support.
              </p>
              <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
                We believe everyone deserves access to innovative, quality products at fair prices, 
                regardless of where they live. That's why we've built a global network of reliable 
                suppliers and shipping partners.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
                <Heart className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Customer Satisfaction</h3>
                <p className="text-primary-100">
                  Your satisfaction is our top priority. We work tirelessly to ensure every 
                  interaction with our store exceeds your expectations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-600 dark:text-secondary-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              These core values guide everything we do and help us deliver the best experience for our customers.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="text-center p-6 bg-white dark:bg-secondary-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Our dedicated team works hard to bring you the best products and service.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary-200 dark:border-primary-800"
                  />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400">
              We're committed to providing the best dropshipping experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                Secure & Trusted
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                Multiple secure payment options with buyer protection
              </p>
            </div>
            <div className="text-center">
              <Truck className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                Fast Worldwide Shipping
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                Reliable shipping to over 50 countries worldwide
              </p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                Premium Quality
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                Carefully selected products with quality guarantee
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About; 