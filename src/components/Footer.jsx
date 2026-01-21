import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: About */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-blue-400">Anugrah Memorial College</h4>
          <p className="text-gray-400 text-sm">
            Empowering students with knowledge, character, and integrity. Join a legacy of excellence in education.
          </p>
        </div>

        {/* Column 2: Quick Links (UPDATED WITH REACT LINKS) */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link to="/academics" className="hover:text-blue-400 transition">Academics</Link></li>
            <li><Link to="/admissions" className="hover:text-blue-400 transition">Admissions</Link></li>
            <li><Link to="/faculty" className="hover:text-blue-400 transition">Faculty Directory</Link></li>
            <li><Link to="/tour" className="hover:text-blue-400 transition">Virtual Tour</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-blue-500" />
              Katari Hill Road, Gaya, Bihar 823001
            </li>
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-blue-500" />
              +91 631 222 2222
            </li>
            <li className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-blue-500" />
              contact@amcollege.ac.in
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
          <div className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition font-medium">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4 mt-6">
            <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer" />
            <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
            <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-500 cursor-pointer" />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        © 2026 Anugrah Memorial College. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;