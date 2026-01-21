import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! The Admissions Cell will contact you shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 pb-16">
      
      {/* 1. Header */}
      <div className="bg-blue-900 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Admissions Cell</h1>
          <p className="text-blue-200 text-lg">
            Have questions? We are here to help you navigate your journey to Anugrah Memorial College.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* 2. Contact Information Cards */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Admissions Helpline</h4>
                  <p className="text-gray-600">+91 631 222 2222</p>
                  <p className="text-gray-600">+91 999 888 7777 (WhatsApp)</p>
                  <p className="text-sm text-green-600 mt-1 font-medium flex items-center">
                    <MessageCircle className="h-3 w-3 mr-1" /> Available 9 AM - 5 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email Support</h4>
                  <p className="text-gray-600">admissions@amcollege.ac.in</p>
                  <p className="text-sm text-gray-500">Response time: 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Visit Campus</h4>
                  <p className="text-gray-600">
                    Anugrah Memorial College,<br />
                    Katari Hill Road, Gaya,<br />
                    Bihar - 823001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Embed (Fixed) */}
          <div className="bg-gray-200 h-80 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe 
              title="Anugrah Memorial College Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.535783350171!2d84.99623697597116!3d24.74317924992523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a6eb6404285%3A0x6b45a669146193e6!2sAnugrah%20Memorial%20College%20Gaya!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* 3. Inquiry Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Send a Query</h2>
          <p className="text-gray-500 mb-8">Not sure which course to pick? Ask us!</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Question</label>
              <textarea 
                rows="4"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all flex justify-center items-center"
            >
              <Send className="h-5 w-5 mr-2" /> Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;