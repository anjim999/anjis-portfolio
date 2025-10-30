import React from "react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white text-center">
      <h2 className="text-4xl font-bold mb-10 text-pink-500">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{project.description}</p>

            <div className="flex flex-wrap justify-center gap-2 mb-3">
              {project.tech.map((techItem, index) => (
                <span
                  key={index}
                  className="text-xs bg-pink-600 text-white px-2 py-1 rounded-md"
                >
                  {techItem}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-pink-600 transition"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 px-3 py-2 rounded-lg text-sm hover:bg-pink-700 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
