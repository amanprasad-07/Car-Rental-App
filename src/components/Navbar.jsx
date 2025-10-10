/**
 * Navbar Component
 * ----------------
 * Responsive navigation bar that hides on scroll down and shows on scroll up.
 * Supports desktop and mobile (hamburger) navigation.
 */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);      // Mobile sidebar open state
  const [show, setShow] = useState(true);           // Navbar visibility on scroll
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  // Update navbar visibility based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY < lastScrollY || window.scrollY < 50);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Common styles for links
  const linkStyle = "text-white hover:text-gray-300 transition-colors";

  // List of navigation links
  const navLinks = [
    { label: "Home", path: "/home" },
    { label: "Browse", path: "/browse" },
    { label: "My Profile", path: "/myprofile" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-neutral-950 flex justify-between items-center px-5 py-5 shadow-md transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Branding */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-50 tracking-wide hover:text-gray-400 transition-colors duration-300">
          <Link to="/home">LuxeRides</Link>
        </h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-12 text-lg items-center px-10">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className={linkStyle}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Menu */}
      <div className="relative lg:hidden">
        <button onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer">
          <div className="space-y-1">
            <span className="block w-8 h-1 bg-gray-200 rounded"></span>
            <span className="block w-8 h-1 bg-gray-200 rounded"></span>
            <span className="block w-8 h-1 bg-gray-200 rounded"></span>
          </div>
        </button>

        {/* Mobile Sidebar */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Sidebar Links */}
            <div className="fixed right-0 top-18 h-screen w-full bg-neutral-800 p-6 shadow-lg">
              <ul className="flex flex-col gap-4 text-xl font-semibold">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="block w-full text-center py-2 rounded hover:bg-neutral-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
