import React from 'react';

const Header = () => {
    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                
                {/* Website Logo / Name */}
                <div className="flex items-center">
                    <h1 className="text-xl font-extrabold text-[#1a1a3d] tracking-tight cursor-pointer">
                        CS — Ticket System
                    </h1>
                </div>

                {/* Right Side: Menu Items and Button */}
                <div className="flex items-center gap-8">
                    {/* Navigation Menu */}
                    <nav className="hidden lg:flex">
                        <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
                            <li className="hover:text-indigo-600 transition cursor-pointer">Home</li>
                            <li className="hover:text-indigo-600 transition cursor-pointer">FAQ</li>
                            <li className="hover:text-indigo-600 transition cursor-pointer">Changelog</li>
                            <li className="hover:text-indigo-600 transition cursor-pointer">Blog</li>
                            <li className="hover:text-indigo-600 transition cursor-pointer">Download</li>
                            <li className="hover:text-indigo-600 transition cursor-pointer">Contact</li>
                        </ul>
                    </nav>

                    {/* New Ticket Button (DaisyUI style) */}
                    <button className="btn border-none bg-[#7c4dff] hover:bg-[#6a3de8] text-white normal-case px-6 min-h-0 h-10 rounded-lg flex items-center gap-2 shadow-md">
                        <span className="text-lg">+</span> New Ticket
                    </button>
                    
                    {/* Mobile Menu Icon (Only visible on small screens) */}
                    <div className="lg:hidden">
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;