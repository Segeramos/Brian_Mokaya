// src/components/Hero.jsx
import React from "react";
// import profilePic from "/assets/profile.png"; // update path

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-8 md:px-16 lg:px-24 py-20 
                 bg-[url('/BG5.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay for faded effect */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 w-full">
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            SEO Expert
          </h1>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-white hover:bg-blue-950 hover:text-white text-blue-950 font-medium py-3 px-6 rounded-full shadow-md transition"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="border-2 border-white text-white hover:bg-blue-950 hover:text-shadow-blue-900 font-medium py-3 px-6 rounded-full shadow-md transition"
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

          <p className="text-base md:text-lg text-white">
            SEO, Geo-Optimization & Digital Marketing Specialist <br />
            Various Technology and Retail Companies – Nairobi, Kenya
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
