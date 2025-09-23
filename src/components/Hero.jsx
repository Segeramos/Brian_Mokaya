// src/components/Hero.jsx
import React from "react";
// import profilePic from "/assets/profile.png"; // update path

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white"
    >
      {/* Left Content */}
      <div className="space-y-6 max-w-xl text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Mokaya <span className="text-purple-300">Brian</span>
        </h1>
        <p className="text-lg md:text-xl uppercase tracking-wide text-purple-200">
          SEO Expert & Frontend Developer
        </p>
        <p className="text-base md:text-lg text-gray-200 max-w-md">
          Helping brands grow online through SEO strategies and clean, modern web
          experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
          <a
            href="#contact"
            className="bg-purple-500 hover:bg-purple-400 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="border-2 border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-purple-900 font-medium py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 md:ml-12">
        {/* Uncomment when you add your image */}
        {/* <img
          src={profilePic}
          alt="Profile"
          className="w-72 h-auto rounded-2xl shadow-2xl border-4 border-purple-300"
        /> */}
        <div className="w-72 h-72 rounded-2xl bg-purple-400 bg-opacity-20 border-2 border-purple-300 flex items-center justify-center shadow-2xl">
          <span className="text-purple-200 italic">Profile Image</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
