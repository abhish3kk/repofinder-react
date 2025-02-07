"use client";

import { useState } from "react";
import { Link, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link className="text-xl font-bold text-gray-900 dark:text-white"> 
          MyBrand
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">About</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Services</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 p-4">
          <a href="#" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500">Home</a>
          <a href="#" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500">About</a>
          <a href="#" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500">Services</a>
          <a href="#" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
