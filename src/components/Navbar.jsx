// src/components/Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
        {/* Logo / Name */}
        <a href="#home" className="text-3xl font-extrabold text-purple-700">
          Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-purple-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-purple-600 transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md py-4 px-6 space-y-4 text-gray-700 font-medium">
          <li>
            <a
              href="#home"
              className="block hover:text-purple-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block hover:text-purple-600 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="block hover:text-purple-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block hover:text-purple-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
