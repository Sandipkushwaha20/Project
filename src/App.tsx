import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProductModal from './components/ProductModal';
import AuthModal from './components/AuthModal';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';
import { Product } from './types';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAuthClick = () => {
    setShowAuthModal(true);
  };

  const handleCartClick = () => {
    setShowCartModal(true);
  };

  const handleCheckoutClick = () => {
    setShowCheckoutModal(true);
  };

  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header
              onAuthClick={handleAuthClick}
              onCartClick={handleCartClick}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            <div className="flex-1">
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <Home
                      searchQuery={searchQuery}
                      onProductClick={handleProductClick}
                    />
                  } 
                />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
              </Routes>
            </div>

            <Footer />

            {/* Modals */}
            <ProductModal
              product={selectedProduct!}
              isOpen={!!selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />

            <AuthModal
              isOpen={showAuthModal}
              onClose={() => setShowAuthModal(false)}
            />

            <CartModal
              isOpen={showCartModal}
              onClose={() => setShowCartModal(false)}
              onCheckout={handleCheckoutClick}
            />

            <CheckoutModal
              isOpen={showCheckoutModal}
              onClose={() => setShowCheckoutModal(false)}
            />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;