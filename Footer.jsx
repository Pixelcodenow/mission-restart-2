import React from 'react';
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-12 px-6 lg:px-20 font-sans">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                

                <div className="lg:col-span-2">
                    <h2 className="text-white text-xl font-bold mb-4">CS — Ticket System</h2>
                    <p className="text-sm leading-relaxed max-w-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>


                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-white cursor-pointer transition">About Us</li>
                        <li className="hover:text-white cursor-pointer transition">Our Mission</li>
                        <li className="hover:text-white cursor-pointer transition">Contact Saled</li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-white cursor-pointer transition">Products & Services</li>
                        <li className="hover:text-white cursor-pointer transition">Customer Stories</li>
                        <li className="hover:text-white cursor-pointer transition">Download Apps</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Information</h3>
                    <ul className="space-y-3 text-sm mb-6">
                        <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
                        <li className="hover:text-white cursor-pointer transition">Terms & Conditions</li>
                        <li className="hover:text-white cursor-pointer transition">Join Us</li>
                    </ul>


                    <h3 className="text-white font-semibold mb-4 text-lg">Social Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-3 hover:text-white cursor-pointer transition">
                            <span className="bg-white text-black p-1 rounded-full text-xs"><FaXTwitter /></span> 
                            @CS — Ticket System
                        </li>
                        <li className="flex items-center gap-3 hover:text-white cursor-pointer transition">
                            <span className="bg-white text-black p-1 rounded-full text-xs"><FaLinkedinIn /></span> 
                            @CS — Ticket System
                        </li>
                        <li className="flex items-center gap-3 hover:text-white cursor-pointer transition">
                            <span className="bg-white text-black p-1 rounded-full text-xs"><FaFacebookF /></span> 
                            @CS — Ticket System
                        </li>
                        <li className="flex items-center gap-3 hover:text-white cursor-pointer transition">
                            <span className="bg-white text-black p-1 rounded-full text-xs"><MdEmail /></span> 
                            support@cst.com
                        </li>
                    </ul>
                </div>
            </div>


            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                <p>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;