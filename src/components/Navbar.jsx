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
          className="md:hidden text-gray-700 focus:outline-none text-2xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul
          className="bg-[url('/BG5.png')] bg-cover bg-center bg-no-repeat shadow-md 
                     py-6 px-6 space-y-6 text-white font-medium text-center"
        >
          <li>
            <a
              href="#home"
              className="block hover:text-purple-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block hover:text-purple-300 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="block hover:text-purple-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block hover:text-purple-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
