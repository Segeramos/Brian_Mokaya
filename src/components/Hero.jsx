// src/components/Hero.jsx
import React from "react";
// import profilePic from "/assets/profile.png"; // update path

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-8 md:px-16 lg:px-24 py-20 bg-white"
    >
      {/* Left Content */}
      <div className="max-w-2xl text-center md:text-left space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-purple-700">
          SEO Expert
        </h1>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full shadow-md transition"
          >
            Get In Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-medium py-3 px-6 rounded-full shadow-md transition"
          >
            Download my Resume
          </a>
        </div>
      </div>

      {/* Right Side: Image + About */}
      <div className="flex flex-col items-center text-center md:text-left max-w-md">
        {/* Replace with actual image */}
        {/* <img
          src={profilePic}
          alt="Profile"
          className="w-80 h-auto rounded-lg"
        /> */}
        <div className="w-72 h-72 md:w-80 md:h-80 bg-purple-100 flex items-center justify-center rounded-lg mb-6">
          <span className="text-purple-400 italic">Profile Image</span>
        </div>

        <p className="text-base md:text-lg text-purple-600">
          I help website rank on google with SEO stategies
        </p>
      </div>
    </section>
  );
};

export default Hero;
