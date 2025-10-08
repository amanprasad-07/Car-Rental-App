import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";


/**
 * Footer Component
 * Displays site branding, quick links, and social/contact info.
 */
function Footer() {
    return (
        <footer className="bg-[#131314] text-gray-700  ">
            {/* Main Footer Content */}
            <div className=" max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 ">

                {/* Branding Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-50 mb-4">LuxeRides</h2>
                    <p className="text-gray-300 text-sm">Your journey, our priority</p>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-50 ">Quick Links</h3>
                    <ul className="flex flex-row gap-4 text-gray-300">
                        <li><Link to="/home" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link to="/browse" className="hover:text-white transition-colors">Browse</Link></li>
                        <li><Link to="/my-bookings" className="hover:text-white transition-colors">My Bookings</Link></li>
                    </ul>
                </div>

                {/* Connect / Social Section */}
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

            {/* Footer Bottom */}
            <div className="bg-neutral-950 text-center py-4 text-sm text-gray-500">
                © {new Date().getFullYear()} LuxeRides. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
