// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 py-20 min-h-screen bg-[url('/BG5.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay for fade */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center md:text-left">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center">
          About Me
          <span className="block w-20 h-1 bg-purple-500 mt-3 mx-auto rounded-full"></span>
        </h2>

        {/* Intro */}
        <div className="border border-purple-300 rounded-2xl p-8 bg-gradient-to-r from-purple-50 via-white to-purple-50 shadow-lg mb-12">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Over the years, I have developed and executed{" "}
            <span className="font-semibold text-purple-700">
              SEO, geo-targeting, and digital advertising strategies
            </span>{" "}
            for leading technology and retail companies, including{" "}
            <span className="text-purple-600">
              Nairobi Phones Technologies, Nairobi Camera House, Fox Printers,
              Panda Phones, Rondamo Technologies, Mighty Ape, Eleven Shop,
              Nairobi Apple Store, Frontline Africa, City Laptop Shop, and
              Nairobi Computers.
            </span>
            <br />
            My work consistently focused on{" "}
            <span className="text-purple-700 font-medium">
              driving organic growth, enhancing local visibility, and running
              high-converting paid campaigns.
            </span>
          </p>
        </div>

        {/* Responsibilities & Skills */}
        <h3 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          Key Responsibilities & Skills
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: "Local SEO & Geo-Targeting",
              text: "Optimized Google Business Profiles, citations, and local landing pages to boost visibility across Nairobi neighborhoods and districts.",
            },
            {
              title: "Keyword Research & Competitor Analysis",
              text: "Conducted deep keyword analysis, monitored competitors, and adapted strategies to stay ahead in rankings.",
            },
            {
              title: "On-Page & Technical SEO",
              text: "Enhanced site architecture, metadata, URLs, schema, and ensured mobile-first, fast-loading experiences.",
            },
            {
              title: "Content Strategy & Optimization",
              text: "Built content plans targeting high-intent keywords and local trends to increase engagement and conversions.",
            },
            {
              title: "Analytics & Performance Monitoring",
              text: "Leveraged Google Analytics, Search Console, Ahrefs, SEMrush, and Moz to optimize campaigns for maximum ROI.",
            },
            {
              title: "Digital Advertising",
              text: "Created high-converting Google Ads & Facebook Ads campaigns with segmentation, retargeting, and A/B testing.",
            },
            {
              title: "Link Building & Outreach",
              text: "Built strong backlink profiles via partnerships, guest posts, and trusted local directories.",
            },
            {
              title: "E-commerce & Retail Optimization",
              text: "Optimized product listings, categories, and store UX for discoverability and conversions in electronics retail.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border border-purple-200 rounded-xl p-6 shadow-md bg-white hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-purple-700 text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-base">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Key Achievements */}
        <h3 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          Key Achievements
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Increased local search visibility and foot traffic for multiple tech retail stores.",
            "Boosted organic rankings for competitive technology-related keywords in Nairobi.",
            "Executed multi-location SEO campaigns leading to more engagement and sales.",
            "Launched high-performing Google Ads & Facebook Ads, driving leads and in-store visits.",
            "Applied data-driven insights to improve ROI and ensure sustainable growth.",
          ].map((achievement, idx) => (
            <div
              key={idx}
              className="border border-purple-200 rounded-xl p-6 shadow-md bg-gradient-to-r from-purple-50 to-white"
            >
              <p className="text-gray-700 text-base leading-relaxed">
                ✅ {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
