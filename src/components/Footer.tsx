import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">ShopEase</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Your one-stop shop for amazing products at unbeatable prices.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400">
              <li>
                <Link 
                  to="/about" 
                  className="hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1 sm:py-0"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1 sm:py-0"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1 sm:py-0"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1 sm:py-0"
                >
                  Shipping
                </a>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Categories</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400">
              <li>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1 sm:py-0"
                >
                  Electronics
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1 sm:py-0"
                >
                  Fashion
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1 sm:py-0"
                >
                  Home & Kitchen
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1 sm:py-0"
                >
                  Sports
                </a>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Customer Service</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400">
              <li>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1 sm:py-0"
                >
                  Returns
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1 sm:py-0"
                >
                  Track Order
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1 sm:py-0"
                >
                  Support
                </a>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1 sm:py-0"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">&copy; 2025 ShopEase. All rights reserved.</p>
          <p className="mt-2 text-sm sm:text-base">Created by ❤️ Kajal Singh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 