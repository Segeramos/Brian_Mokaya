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

        
      </div>

      <p className="mt-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Mokaya Brian. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
