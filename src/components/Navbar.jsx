import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Navbar Component
 * Responsive navigation bar that hides on scroll down and shows on scroll up.
 */
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);       // Sidebar menu open state for mobile
    const [show, setShow] = useState(true);           // Navbar visibility state
    const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

    // Handle navbar hide/show on scroll
    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY < lastScrollY || window.scrollY < 50);
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); 
    }, [lastScrollY]);

    return (
        <nav
            className={`
        fixed top-0 left-0 w-full z-50 bg-neutral-950 flex justify-between items-center 
        px-5 py-5 shadow-md transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
        >
            {/* Branding */}
            <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-50 tracking-wide hover:text-gray-400 transition-colors duration-300">
                     <Link to="/">LuxeRides</Link>
                </h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-12 text-lg items-center px-10">
                <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
                <li><Link to="/browse" className="text-white hover:text-gray-300">Browse</Link></li>
                <li><Link to="/my-bookings" className="text-white hover:text-gray-300">My Bookings</Link></li>
            </ul>

            {/* Mobile Hamburger Menu */}
            <div className="relative lg:hidden">
                <button onClick={() => setIsOpen(prev => !prev)} className="cursor-pointer">
                    <div className="space-y-1">
                        <span className="block w-8 h-1 bg-gray-200 rounded"></span>
                        <span className="block w-8 h-1 bg-gray-200 rounded"></span>
                        <span className="block w-8 h-1 bg-gray-200 rounded"></span>
                    </div>
                </button>

                {/* Mobile Sidebar Menu */}
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex justify-end">
                        {/* Semi-transparent overlay */}
                        <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>

                        {/* Sidebar links */}
                        <div className="fixed right-0 top-18 h-screen w-full bg-neutral-800  p-6 shadow-lg">
                            <ul className="flex flex-col gap-4 text-xl font-semibold">
                                <li>
                                    <Link to="/" className="block w-full text-center py-2 rounded hover:bg-neutral-600" onClick={() => setIsOpen(false)}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/browse" className="block w-full text-center py-2 rounded hover:bg-neutral-600" onClick={() => setIsOpen(false)}>
                                        Browse
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/my-bookings" className="block w-full text-center py-2 rounded hover:bg-neutral-600" onClick={() => setIsOpen(false)}>
                                        My Bookings
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;


