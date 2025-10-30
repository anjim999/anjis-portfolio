import React from "react";
import skills from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-8">
        {skills.map((skill) => (
          <div key={skill.name} className="p-4 bg-white dark:bg-gray-900 shadow rounded-lg text-center hover:scale-105 transition-transform">
            <img src={skill.icon} alt={skill.name} className="w-10 h-10 mx-auto mb-3" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
