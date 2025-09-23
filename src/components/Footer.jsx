// src/components/Footer.jsx
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <SocialIcon url="https://facebook.com" fgColor="#fff" bgColor="transparent" />
          <SocialIcon url="https://instagram.com" fgColor="#fff" bgColor="transparent" />
          <SocialIcon url="https://twitter.com" fgColor="#fff" bgColor="transparent" />
          <SocialIcon url="https://youtube.com" fgColor="#fff" bgColor="transparent" />
          <SocialIcon url="mailto:example@email.com" fgColor="#fff" bgColor="transparent" />
        </div>

        {/* Footer Nav */}
        <nav className="flex flex-col md:flex-row gap-4 text-center md:text-left">
          <a href="#home" className="hover:text-purple-400 transition">Home</a>
          <a href="#news" className="hover:text-purple-400 transition">News</a>
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          <a href="#team" className="hover:text-purple-400 transition">Our Team</a>
        </nav>
      </div>

      <p className="mt-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Mokaya Brian. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
