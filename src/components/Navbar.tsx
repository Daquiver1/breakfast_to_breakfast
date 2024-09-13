import React from 'react';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Image src='/logo.png' alt="Logo" width={50} height={50} />
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="/home" className="text-gray-700 hover:text-gray-900">Home</a>
        <a href="/menu" className="text-gray-700 hover:text-gray-900">Menu</a>
        <a href="/about" className="text-gray-700 hover:text-gray-900">About us</a>
        <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
      </div>
      <div className="hidden md:flex space-x-4">
        <a href="#" className="px-4 py-2 text-gray-700 hover:text-gray-900">Login</a>
        <a href="#" className="px-4 py-2 text-white bg-slate-500 rounded hover:bg-slate-600">Sign up</a>
      </div>
      <div className="md:hidden">
        {/* Hamburger Icon for Mobile View */}
        <button className="text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
