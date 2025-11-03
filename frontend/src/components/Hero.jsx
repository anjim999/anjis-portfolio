import React from "react";
import hero from "../assets/hero.svg";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-8 pt-24 gap-10">
      <div className="max-w-lg">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-500">M.S.R. Veeranjaneyulu</span>
        </h2>
        <p className="text-lg mb-6">
          I’m a Frontend Developer passionate about crafting responsive, beautiful, and high-performance web interfaces using modern web technologies.
        </p>
        
        {/* --- START OF FINAL FIX --- */}
        <a
          href="/resume.pdf"          // 1. Points to the file in your 'public' folder
          target="_blank"             // 2. Opens the link in a new tab
          rel="noopener noreferrer"   // 3. A security best practice for new tabs
          className="bg-indigo-500 text-white px-5 py-2 rounded-md hover:bg-indigo-600"
          // 4. The 'download' attribute has been REMOVED to prevent mobile errors
        >
          View Resume
        </a>

      </div>
      <img src={hero} alt="Hero" className="w-64 md:w-96 animate-float" />
    </section>
  );
}