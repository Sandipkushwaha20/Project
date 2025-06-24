import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
        </p>
        <div className="text-sm text-gray-500 mt-4">
          Last updated: December 2024
        </div>
      </div>

      {/* Policy Sections */}
      <div className="space-y-12">
        {/* Information We Collect */}
        <section>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Name and contact information (email, phone number, address)</li>
              <li>• Payment information (processed securely through our payment partners)</li>
              <li>• Account credentials and preferences</li>
              <li>• Order history and purchase behavior</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Automatically Collected Information</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Device information (IP address, browser type, operating system)</li>
              <li>• Usage data (pages visited, time spent, interactions)</li>
              <li>• Cookies and similar tracking technologies</li>
              <li>• Location data (with your consent)</li>
            </ul>
          </div>
        </section>

        {/* How We Use Information */}
        <section>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <ul className="space-y-3 text-gray-600">
              <li>• <strong>Order Processing:</strong> To process and fulfill your orders, send order confirmations, and provide customer support</li>
              <li>• <strong>Account Management:</strong> To create and manage your account, process payments, and maintain your preferences</li>
              <li>• <strong>Communication:</strong> To send you important updates, respond to inquiries, and provide customer service</li>
              <li>• <strong>Personalization:</strong> To personalize your shopping experience, recommend products, and improve our services</li>
              <li>• <strong>Analytics:</strong> To analyze usage patterns, improve our website, and develop new features</li>
              <li>• <strong>Security:</strong> To protect against fraud, unauthorized access, and ensure the security of our platform</li>
            </ul>
          </div>
        </section>

        {/* Information Sharing */}
        <section>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>• <strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business (payment processors, shipping partners, etc.)</li>
              <li>• <strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
              <li>• <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li>• <strong>Consent:</strong> With your explicit consent for specific purposes</li>
            </ul>
          </div>
        </section>

        {/* Data Security */}
        <section>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
              <Lock className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>• Encryption of sensitive data in transit and at rest</li>
              <li>• Regular security assessments and updates</li>
              <li>• Access controls and authentication measures</li>
              <li>• Employee training on data protection</li>
              <li>• Incident response procedures</li>
            </ul>
          </div>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <p className="text-gray-600 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>• <strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li>• <strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li>• <strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li>• <strong>Portability:</strong> Request transfer of your data to another service provider</li>
              <li>• <strong>Objection:</strong> Object to certain processing of your personal information</li>
              <li>• <strong>Withdrawal:</strong> Withdraw consent for processing based on consent</li>
            </ul>
          </div>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <p className="text-gray-600 mb-4">
              We use cookies and similar technologies to enhance your browsing experience:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>• <strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li>• <strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
              <li>• <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              <li>• <strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="text-gray-600 mt-4">
              You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
            </p>
          </div>
        </section>

        {/* Children's Privacy */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <p className="text-gray-600">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. 
              If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </div>
        </section>

        {/* Changes to Policy */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <p className="text-gray-600">
              We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page 
              and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <p className="text-gray-600 mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> privacy@shopease.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Commerce Street, San Francisco, CA 94105</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy; 