import React from "react";
import { useState } from "react";
import { Link } from "react-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-pink-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl text-pink-600 font-bold">
            Glamour Haven
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/services" className="text-gray-600 hover:text-pink-600">
              Services
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-pink-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-pink-600">
              Contact
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-pink-600">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/services" className="block px-4 py-2 text-gray-600 bg-pink-100 my-2 rounded-r-full">
              Services
            </Link>
            <Link to="/about" className="block px-4 py-2 text-gray-600 bg-pink-100 my-2 rounded-r-full">
              About
            </Link>
            <Link to="/contact" className="block px-4 py-2 text-gray-600 bg-pink-100 my-2 rounded-r-full">
              Contact
            </Link>
            <Link to="/login" className="block px-4 py-2 text-gray-600 bg-pink-100 my-2 rounded-r-full">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
