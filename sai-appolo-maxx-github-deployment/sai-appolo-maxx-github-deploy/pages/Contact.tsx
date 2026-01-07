import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have questions about our products? Need to place a bulk order? Reach out to us directly or visit our main office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Our Location</h3>
                  <p className="text-slate-600 mt-1">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Phone Support</h3>
                  <p className="text-slate-600 mt-1">Mobile: <a href={`tel:${CONTACT_INFO.mobile}`} className="hover:text-orange-600">{CONTACT_INFO.mobile}</a></p>
                  <p className="text-slate-600">WhatsApp: <a href={`https://wa.me/91${CONTACT_INFO.whatsapp}`} className="hover:text-orange-600">{CONTACT_INFO.whatsapp}</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Email Us</h3>
                  <p className="text-slate-600 mt-1">
                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-orange-600">{CONTACT_INFO.email}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">Business Hours</h3>
                  <p className="text-slate-600 mt-1">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-slate-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href={`https://wa.me/91${CONTACT_INFO.whatsapp}?text=Hello, I have an inquiry about Sai Appolo Maxx products.`}
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="h-full min-h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-sm border border-slate-100 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.702223264459!2d86.68999999999998!3d24.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f117367869bd91%3A0x9e63739926b5a7d1!2sSai%20Appolo%20Maxx%2C%20Nawadih%2C%20Punasiya%2C%20Deoghar%2C%20Jharkhand%20814113!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sai Appolo Maxx Location"
            ></iframe>
            {/* Overlay for aesthetic if needed, but keeping clean for map interaction */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;