import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How do I place an order?",
      answer: "To place an order, simply browse our products, add items to your cart, and proceed to checkout. You'll need to create an account or sign in, provide shipping and payment information, and confirm your order.",
      category: "ordering"
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All payments are processed securely through our encrypted payment system.",
      category: "payment"
    },
    {
      id: 3,
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days. Express shipping (1-2 business days) is available for an additional fee. Free shipping is available on orders over $50.",
      category: "shipping"
    },
    {
      id: 4,
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be unused and in original packaging. Some items may have different return conditions. Please contact our customer service for specific details.",
      category: "returns"
    },
    {
      id: 5,
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and visiting the 'My Orders' section.",
      category: "tracking"
    },
    {
      id: 6,
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. You can see available shipping options during checkout.",
      category: "shipping"
    },
    {
      id: 7,
      question: "How do I change or cancel my order?",
      answer: "Orders can be modified or cancelled within 1 hour of placement. Please contact our customer service immediately if you need to make changes. Once an order ships, it cannot be cancelled.",
      category: "ordering"
    },
    {
      id: 8,
      question: "Are your products authentic?",
      answer: "Yes, all our products are 100% authentic and sourced directly from authorized manufacturers and distributors. We never sell counterfeit or replica items.",
      category: "products"
    },
    {
      id: 9,
      question: "What if I receive a damaged item?",
      answer: "If you receive a damaged item, please take photos and contact our customer service within 48 hours of delivery. We'll arrange a replacement or refund at no additional cost.",
      category: "returns"
    },
    {
      id: 10,
      question: "How do I create an account?",
      answer: "You can create an account by clicking the 'Sign Up' button in the top right corner. You'll need to provide your email address, create a password, and verify your email to complete registration.",
      category: "account"
    },
    {
      id: 11,
      question: "Is my personal information secure?",
      answer: "Yes, we take your privacy seriously. All personal and payment information is encrypted and stored securely. We never share your information with third parties without your consent.",
      category: "security"
    },
    {
      id: 12,
      question: "Do you offer customer support?",
      answer: "Yes, our customer support team is available 24/7 via live chat, email, and phone. We're here to help with any questions or concerns you may have.",
      category: "support"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'ordering', name: 'Ordering' },
    { id: 'payment', name: 'Payment' },
    { id: 'shipping', name: 'Shipping' },
    { id: 'returns', name: 'Returns' },
    { id: 'account', name: 'Account' },
    { id: 'support', name: 'Support' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find answers to common questions about our products, services, and policies. 
          Can't find what you're looking for? Contact our support team.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4 mb-12">
        {filteredFAQ.length > 0 ? (
          filteredFAQ.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md border border-gray-200">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                {openItems.includes(item.id) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl text-gray-300 mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery 
                ? `No questions match "${searchQuery}". Try a different search term.`
                : 'No questions available in this category.'
              }
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Questions
            </button>
          </div>
        )}
      </div>

      {/* Contact Support */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Still Need Help?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Can't find the answer you're looking for? Our customer support team is here to help. 
          We're available 24/7 and ready to assist you with any questions or concerns.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">
            Live Chat
          </button>
        </div>
      </div>
    </main>
  );
};

export default FAQ; 