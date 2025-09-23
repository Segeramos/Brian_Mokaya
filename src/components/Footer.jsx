// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex space-x-4">
          {/* Replace with your actual social links */}
          <a href="#" aria-label="Facebook" className="hover:opacity-75">
            <svg className="w-6 h-6 fill-current text-white" /* Facebook icon */> {/* ... */} </svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-75">
            <svg className="w-6 h-6 fill-current text-white" /* Instagram icon */> {/* ... */} </svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:opacity-75">
            <svg className="w-6 h-6 fill-current text-white" /* Twitter icon */> {/* ... */} </svg>
          </a>
          <a href="#" aria-label="Google" className="hover:opacity-75">
            <svg className="w-6 h-6 fill-current text-white" /* Google icon */> {/* ... */} </svg>
          </a>
          <a href="#" aria-label="YouTube" className="hover:opacity-75">
            <svg className="w-6 h-6 fill-current text-white" /* YouTube icon */> {/* ... */} </svg>
          </a>
        </div>
        <nav className="flex space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#news" className="hover:underline">News</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
          <a href="#team" className="hover:underline">Our Team</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
