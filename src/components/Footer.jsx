import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    const linkClass = ({ isActive }) =>
        `hover:text-blue-500 transition-colors duration-200 ${isActive ? "text-blue-700 font-semibold" : "text-gray-600"
        }`;

    const randomUserId = Math.floor(Math.random() * 10) + 1;

    return (
        <footer className="bg-neutral-900 text-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-50 mb-4">
                        LuxeRides
                    </h2>
                    <p className="text-gray-300 text-sm">
                        Your journey, our priority
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-50">Quick Links</h3>
                    <ul className="space-y-2 flex flex-row gap-4 text-gray-300">
                        <li><Link to="/" className="">Home</Link></li>
                        <li><Link to="/about" className="">About</Link></li>
                        <li><Link to={`/user/${randomUserId}`} className="">Users</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-50">Connect</h3>
                    <p className="text-sm mb-2 text-gray-300"> support@LuxeRides.com</p>
                    <div className="flex gap-4 mt-2 text-gray-300">
                        <a
                            href="#"
                            className=" hover:text-blue-600 transition-colors"
                        >
                            Instagram
                        </a>
                        |
                        <a
                            href="#"
                            className=" hover:text-blue-600 transition-colors"
                        >
                            Twitter
                        </a>
                        |
                        <a
                            href="#"
                            className=" hover:text-blue-600 transition-colors"
                        >
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-neutral-950 text-center py-4 text-sm text-gray-700">
                © {new Date().getFullYear()} LuxeRides. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer