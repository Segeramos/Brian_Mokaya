// src/components/Experience.jsx
import React from "react";

const experiences = [
  {
    title: "SEO Specialist",
    company: "Some Company",
    duration: "Jan 2022 – Present",
    description:
      "Improved organic traffic by 50% in 6 months. Specialized in keyword research, technical SEO, and link-building strategies.",
  },
  {
    title: "Junior SEO Analyst",
    company: "Another Company",
    duration: "Jun 2020 – Dec 2021",
    description:
      "Assisted in SEO audits, optimized content for SERPs, conducted competitor analysis, and supported outreach campaigns.",
  },
  // Add more as needed
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/BG5.png')" }} // inline fallback
    >
      {/* Full-section overlay (fades the background) */}
      <div
        className="absolute inset-0 bg-black/60"
        aria-hidden="true"
      ></div>

      {/* Content wrapper sits above the overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center">
          Work Experience
          <span className="block w-20 h-1 bg-purple-500 mt-3 mx-auto rounded-full"></span>
        </h2>

        {/* Timeline / Cards */}
        <div className="relative border-l-4 border-purple-600 pl-6 space-y-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white border border-purple-200 rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl md:text-2xl font-bold text-purple-700">
                {exp.title}
              </h3>
              <span className="block text-sm text-gray-600 mb-3">
                {exp.company} · {exp.duration}
              </span>
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
