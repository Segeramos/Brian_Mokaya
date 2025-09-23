// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-12 py-20 max-w-5xl mx-auto text-center md:text-left"
    >
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-extrabold text-purple-700 mb-8 relative inline-block">
        About Me
        <span className="block w-16 h-1 bg-purple-500 mt-2 mx-auto md:mx-0 rounded-full"></span>
      </h2>

      {/* Card */}
      <div className="border border-purple-300 rounded-2xl p-8 bg-gradient-to-r from-purple-50 via-white to-purple-50 shadow-lg">
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          I’m{" "}
          <span className="text-purple-700 font-semibold">Brian Mokaya</span>, an{" "}
          <span className="text-purple-600 font-semibold">SEO Expert</span> with
          a passion for helping brands achieve{" "}
          <span className="text-purple-600">high rankings</span> and greater{" "}
          <span className="text-purple-600">visibility</span> in search engines.
          With over <span className="font-medium">X years of experience</span>,
          I've worked on on-page and off-page SEO, content strategy, technical
          SEO audits, and link building.
        </p>

        <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-700">
          I enjoy collaborating with{" "}
          <span className="text-purple-700 font-medium">
            designers, developers, and content creators
          </span>{" "}
          to craft SEO-friendly websites that deliver{" "}
          <span className="text-purple-700 font-medium">measurable growth</span>.
        </p>
      </div>
    </section>
  );
};

export default About;

