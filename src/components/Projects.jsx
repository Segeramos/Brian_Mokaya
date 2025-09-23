// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: "Nairobi Camera House",
    imageSrc: "/assets/project1.jpg",
    link: "#"
  },
  {
    title: "Project Two",
    imageSrc: "/assets/project2.jpg",
    link: "#"
  },
  {
    title: "Project Three",
    imageSrc: "/assets/project3.jpg",
    link: "#"
  },
  {
    title: "Project Four",
    imageSrc: "/assets/project4.jpg",
    link: "#"
  },
  {
    title: "Project Five",
    imageSrc: "/assets/project5.jpg",
    link: "#"
  },
  {
    title: "Project Six",
    imageSrc: "/assets/project6.jpg",
    link: "#"
  },
  {
    title: "Project Seven",
    imageSrc: "/assets/project7.jpg",
    link: "#"
  },
  {
    title: "Project Eight",
    imageSrc: "/assets/project8.jpg",
    link: "#"
  },
  {
    title: "Project Nine",
    imageSrc: "/assets/project9.jpg",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-12 py-12 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-accent mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.link}
            className="relative overflow-hidden border-2 border-black rounded-lg group"
          >
            <img
              src={proj.imageSrc}
              alt={proj.title}
              className="w-full h-48 object-cover group-hover:scale-105 transform transition duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 opacity-80">
              <h3 className="text-white text-lg">{proj.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
