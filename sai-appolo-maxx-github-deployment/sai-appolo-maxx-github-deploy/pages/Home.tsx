import React, { useEffect } from 'react';


import { Link } from 'react-router-dom';
import { ChevronRight, MessageCircle } from 'lucide-react';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import ProductSlider from '../components/ProductSlider';
import { PRODUCTS, FEATURES, CONTACT_INFO } from '../constants';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured);

  // Removed Adobe PDF viewer functionality
  // Certificate viewers are now handled with direct links on mobile and iframes on desktop

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=2000"
            alt="Motorcycle Engine Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Precision Parts for <br />
              <span className="text-orange-500">Peak Performance</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Sai Appolo Maxx delivers top-tier motorcycle spare parts including clutch plates, engine oils, and advanced braking systems. Engineered for durability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Products <ChevronRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-orange-500 text-white hover:bg-orange-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Featured Products</h2>
              <p className="mt-2 text-slate-600">Our best-selling high performance parts.</p>
            </div>
            <Link to="/products" className="hidden sm:flex items-center text-orange-600 font-semibold hover:text-orange-700">
              View All <ChevronRight size={20} />
            </Link>
          </div>

          <ProductSlider products={featuredProducts} />

          <div className="mt-12 text-center sm:hidden">
            <Link to="/products">
              <Button variant="outline" className="w-full">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Sai Appolo Maxx?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Committed to quality, safety, and customer satisfaction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-green-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 text-green-600 mb-6 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Certifications</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We maintain the highest standards of quality and compliance in our operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-slate-100">
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Registration Certificate</h3>
                <p className="text-slate-600 text-sm mb-4">Official business registration document</p>

                {/* Certificate preview - Desktop */}
                <div className="hidden md:block w-full border border-slate-300 rounded-lg overflow-hidden bg-white mb-4">
                  <img
                    src="/assets/Registration.jpeg"
                    alt="Registration Certificate"
                    className="w-full h-auto max-h-80 object-contain"
                    style={{
                      minHeight: '256px',
                    }}
                  />
                </div>

                {/* Certificate preview - Mobile */}
                <div className="md:hidden w-full border border-slate-300 rounded-lg overflow-hidden bg-white mb-4">
                  <img
                    src="/assets/Registration.jpeg"
                    alt="Registration Certificate"
                    className="w-full h-auto max-h-64 object-contain"
                    style={{
                      minHeight: '256px',
                    }}
                  />
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex space-x-3">
                <a
                  href="/documents/Registration Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye">
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="1" />
                  </svg>
                  Preview
                </a>
                <a
                  href="/documents/Registration Certificate.pdf"
                  download
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Download
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-slate-100">
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2">UDYAM Registration</h3>
                <p className="text-slate-600 text-sm mb-4">Government registration certificate</p>

                {/* Certificate preview - Desktop */}
                <div className="hidden md:block w-full border border-slate-300 rounded-lg overflow-hidden bg-white mb-4">
                  <img
                    src="/assets/Udyam.jpeg"
                    alt="UDYAM Registration Certificate"
                    className="w-full h-auto max-h-80 object-contain"
                    style={{
                      minHeight: '256px',
                    }}
                  />
                </div>

                {/* Certificate preview - Mobile */}
                <div className="md:hidden w-full border border-slate-300 rounded-lg overflow-hidden bg-white mb-4">
                  <img
                    src="/assets/Udyam.jpeg"
                    alt="UDYAM Registration Certificate"
                    className="w-full h-auto max-h-64 object-contain"
                    style={{
                      minHeight: '256px',
                    }}
                  />
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex space-x-3">
                <a
                  href="/documents/UDYAM REGISTRATION CERTIFICATE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye">
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="1" />
                  </svg>
                  Preview
                </a>
                <a
                  href="/documents/UDYAM REGISTRATION CERTIFICATE.pdf"
                  download
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Download
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-slate-100">
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2">IndiaMART Certification</h3>
                <p className="text-slate-600 text-sm mb-4">B2B marketplace verification certificate</p>

                {/* Certificate preview - Desktop */}
                <div className="hidden md:block w-full border border-slate-300 rounded-lg overflow-hidden bg-white mb-4">
                  <img
                    src="/assets/India Mart.jpeg"
                    alt="IndiaMART Certificate"
                    className="w-full h-auto max-h-80 object-contain"
                    style={{
                      minHeight: '256px',
                    }}
                  />
                </div>

                {/* Certificate preview - Mobile */}
                <div className="md:hidden w-full border border-slate-300 rounded-lg overflow-hidden bg-white mb-4">
                  <img
                    src="/assets/India Mart.jpeg"
                    alt="IndiaMART Certificate"
                    className="w-full h-auto max-h-64 object-contain"
                    style={{
                      minHeight: '256px',
                    }}
                  />
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex space-x-3">
                <a
                  href="/documents/indiamart.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye">
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="1" />
                  </svg>
                  Preview
                </a>
                <a
                  href="/documents/indiamart.pdf"
                  download
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Presence Section */}
      <section className="py-16 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Online Presence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-left space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🏪</span>
                  <div>
                    <p className="font-bold text-lg">Sai Appolo Maxx</p>
                    <p className="text-slate-600">📍 Deoghar</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-bold">IndiaMART Verified Supplier</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🧾</span>
                  <div>
                    <p className="font-bold">GST: 20HULPK4905G1ZQ</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 text-center">
                <p className="font-bold text-lg mb-4">View our catalog ⬇️</p>
                <a
                  href="https://IndiaMART.in/KQnzqMzR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                >
                  Visit Our IndiaMART Page
                </a>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="font-bold mb-2">Call us ☎️</p>
                  <a
                    href="tel:+918789574430"
                    className="text-orange-600 font-semibold hover:text-orange-700 text-lg"
                  >
                    +91 8789574430
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;