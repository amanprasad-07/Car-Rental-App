/**
 * Footer Component
 * ----------------
 * Displays site branding, navigation links, and contact/social information.
 */

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  // Common link styles for navigation and social links
  const linkStyle = "hover:text-white transition-colors";

  return (
    <footer className="bg-[#131314] text-gray-700">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Branding section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-50 mb-4">LuxeRides</h2>
          <p className="text-gray-300 text-sm">Your journey, our priority</p>
        </div>

        {/* Quick links section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-50">Quick Links</h3>
          <ul className="flex flex-row gap-4 text-gray-300">
            <li><Link to="/home" className={linkStyle}>Home</Link></li>
            <li><Link to="/browse" className={linkStyle}>Browse</Link></li>
            <li><Link to="/myprofile" className={linkStyle}>My Profile</Link></li>
            <li><Link to="/contact" className={linkStyle}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact/Social section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-50">Connect</h3>
          <p className="text-sm mb-2 text-gray-300">support@LuxeRides.com</p>
          <div className="flex gap-4 mt-2 text-gray-300">
            <a href="#" className="hover:text-blue-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Facebook</a>
          </div>
        </div>

      </div>

      {/* Footer bottom */}
      <div className="bg-neutral-950 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} LuxeRides. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
