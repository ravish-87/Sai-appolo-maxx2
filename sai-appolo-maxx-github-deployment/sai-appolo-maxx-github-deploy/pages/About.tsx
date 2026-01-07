import React from 'react';
import { Users, Award, Factory, Truck } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import Button from '../components/Button';

const About: React.FC = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Focus',
      description: 'We prioritize our customers\' needs and strive to exceed expectations in every interaction.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Only the finest materials and rigorous testing ensure our products meet industry standards.'
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Continuously evolving to bring cutting-edge solutions to the motorcycle parts market.'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Reliable Delivery',
      description: 'Timely and secure delivery to ensure our customers receive their parts when they need them.'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About Sai Appolo Maxx</h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            Your trusted partner for premium motorcycle spare parts since January 2021
          </p>
        </div>

        {/* Company Overview */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-600 mb-6">
                Founded in January 2021 in the heart of Deoghar, Jharkhand, Sai Appolo Maxx began with a simple mission:
                to provide motorcycle enthusiasts and mechanics with high-quality spare parts that enhance performance
                and ensure safety.
              </p>
              <p className="text-slate-600 mb-6">
                In April 2023, we officially registered as an enterprise, marking a significant milestone in our journey.
                This formal recognition has enabled us to expand our reach and serve an even broader customer base.
              </p>
              <p className="text-slate-600 mb-6">
                Over the years, we've grown from a small local shop to a recognized supplier across Jharkhand,
                earning the trust of thousands of customers through our commitment to quality, reliability, and
                exceptional service.
              </p>
              <p className="text-slate-600">
                Today, we offer an extensive catalog of motorcycle parts ranging from engine components to
                braking systems, all sourced from reputable manufacturers and rigorously tested for performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800"
                alt="Our facility"
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-center">
                <p className="text-slate-500 italic">Our modern warehouse and distribution center</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Principles that guide our business decisions and relationships with customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mb-16 bg-slate-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">View Our Documents</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Browse our important documents directly in your browser (view-only)
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 24v-8h8v8h4v-10h6l-10-10-10 10h6v10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Registration Certificate</h3>
              <p className="text-slate-600 mb-4">Official business registration document</p>

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
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 24v-8h8v8h4v-10h6l-10-10-10 10h6v10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">UDYAM Registration</h3>
              <p className="text-slate-600 mb-4">Government registration certificate</p>

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
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">IndiaMart Profile</h3>
              <p className="text-slate-600 mb-4">Our business profile on India's largest B2B marketplace</p>

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

        {/* Team/CTA Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Meet Our Expert Team</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Our skilled professionals are dedicated to helping you find the perfect parts for your motorcycle needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${CONTACT_INFO.mobile}`}>
              <Button variant="secondary" size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Call Us: {CONTACT_INFO.mobile}
              </Button>
            </a>
            <a href={`https://wa.me/91${CONTACT_INFO.whatsapp}`} target="_blank" rel="noreferrer">
              <Button variant="secondary" size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                WhatsApp Inquiry
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;