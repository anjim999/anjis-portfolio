import React from "react";
import hero from "../assets/hero.svg";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-8 pt-24 gap-10">
      <div className="max-w-lg">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-500 dark:text-indigo-400">
           Veeranjaneyulu 
          </span>
        </h2>
        
        <p className="text-lg mb-6">
I’m a passionate Full-Stack Web Developer skilled in building responsive, secure, and high-performance web applications using React.js, Node.js, Express.js, and Flask. I enjoy creating seamless digital experiences that blend clean design, efficient code, and real-world functionality.       </p>
        
        <a
          href="/resume.pdf"
          download="Veeranjaneyulu_Resume.pdf" 
          className="bg-indigo-500 text-white px-5 py-2 rounded-md hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
        >
          Download Resume
        </a>

      </div>
      <img src={hero} alt="Hero" className="w-64 md:w-96 animate-float" />
    </section>
  );
}