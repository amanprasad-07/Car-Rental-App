import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        `px-4 py-2 rounded hover:bg-blue-50 ${isActive ? "bg-white" : ""}`;

    const randomUserId = Math.floor(Math.random() * 10) + 1;

    return (
        <nav className="fixed top-0 left-0 w-full z-[9999] bg-neutral-950 opacity-95 flex justify-between items-center px-5 py-5">
            <div className='justify-center items-center'>
                <h1 className="text-2xl font-bold text-gray-50 tracking-wide hover:text-gray-500 transition-colors duration-300">
                    LuxeRides
                </h1>
            </div>

            <ul className='hidden lg:flex flex-row gap-12 justify-center items-center text-lg'>
                <li><Link to="/" className="text-white">Home</Link></li>
                <li><Link to="/Browse" className="text-white">Browse</Link></li>
                <li><Link to={`/user/${randomUserId}`} className="text-white">User</Link></li>
            </ul>

            <div className='relative'>
                <button
                    className='cursor-pointer lg:hidden'
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    <div>
                        <span className='block bg-gray-200 w-9 h-1 rounded-2xl'></span>
                        <span className='block bg-gray-200 w-9 h-1 rounded-2xl my-1'></span>
                        <span className='block bg-gray-200 w-9 h-1 rounded-2xl'></span>
                    </div>
                </button>
                {isOpen && (
                    <div className='fixed inset-0 z-[9999] flex justify-end'>
                        {/* Semi-transparent overlay behind the menu */}
                        <div
                            className='absolute inset-0 bg-black/50'
                            onClick={() => setIsOpen(false)}
                        ></div>

                        {/* Sidebar menu */}
                        <div className='fixed right-0 top-0 h-full bg-blue-200 w-80 p-7 shadow-lg z-[10000] lg:hidden'>
                            <ul className='flex flex-col gap-4'>
                                <li><Link to="/" className="" onClick={() => setIsOpen(false)}>Home</Link></li>
                                <li><Link to="/Browse" className="" onClick={() => setIsOpen(false)}>Browse</Link></li>
                                <li><Link to={`/user/${randomUserId}`} className="" onClick={() => setIsOpen(false)}>User</Link></li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;