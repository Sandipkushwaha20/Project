import React, { useState, useEffect } from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

// Custom hook for counting animation
const useCountAnimation = (endValue: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(endValue * easeOutQuart);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [endValue, duration]);

  return count;
};

const AboutUs: React.FC = () => {
  // Animated values for stats
  const customerCount = useCountAnimation(50);
  const productCount = useCountAnimation(10);
  const satisfactionRate = useCountAnimation(99);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About ShopEase
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about bringing you the best shopping experience with quality products, 
          exceptional service, and unbeatable prices.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To provide customers with a seamless online shopping experience by offering 
            high-quality products, competitive prices, and exceptional customer service. 
            We strive to make shopping easy, convenient, and enjoyable for everyone.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
            <Award className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To become the leading e-commerce platform that customers trust and love, 
            known for our commitment to quality, innovation, and customer satisfaction. 
            We envision a future where shopping is effortless and delightful.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">
            Founded in 2020, ShopEase began as a small startup with a big dream: to revolutionize 
            the online shopping experience. What started as a simple idea has grown into a 
            thriving e-commerce platform serving thousands of satisfied customers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our journey has been marked by continuous innovation, customer feedback, and an 
            unwavering commitment to quality. We've expanded our product range, improved our 
            technology, and built a team of passionate professionals dedicated to serving you.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, ShopEase stands as a testament to what's possible when you combine 
            technology, customer focus, and a genuine desire to make a difference in people's lives.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer First</h3>
            <p className="text-gray-600">
              Every decision we make is guided by what's best for our customers. 
              Your satisfaction is our top priority.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
            <p className="text-gray-600">
              We never compromise on quality. Every product in our catalog meets 
              our strict quality standards.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Excellence</h3>
            <p className="text-gray-600">
              Our diverse team brings together expertise, creativity, and dedication 
              to deliver exceptional results.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-12 h-12 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Kajal singh</h3>
            <p className="text-blue-600 font-medium mb-3">CEO & Founder</p>
            <p className="text-gray-600 text-sm">
              Passionate entrepreneur with 10+ years of e-commerce experience. 
              Leading our mission to revolutionize online shopping.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-12 h-12 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Laxmi</h3>
            <p className="text-blue-600 font-medium mb-3">CTO</p>
            <p className="text-gray-600 text-sm">
              Technology expert driving innovation and ensuring our platform 
              delivers the best user experience possible.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-12 h-12 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Radha</h3>
            <p className="text-blue-600 font-medium mb-3">Head of Customer Success</p>
            <p className="text-gray-600 text-sm">
              Dedicated to ensuring every customer has an exceptional experience 
              and feels valued and supported.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">{customerCount}K+</div>
            <div className="text-blue-100">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">{productCount}K+</div>
            <div className="text-blue-100">Products</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">{satisfactionRate}%</div>
            <div className="text-blue-100">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-blue-100">Support</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs; 