// src/components/Navbar.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";


export default function Navbar({ toggleTheme }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Veeranjaneyulu</h1>
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#hero" className="hover:text-indigo-500">Home</a></li>
          {/* <li><a href="#about" className="hover:text-indigo-500">About</a></li> */}
          <li><a href="#skills" className="hover:text-indigo-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>

        </ul>

        {/* <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 w-10 h-10 flex items-center justify-center"
        >
          <FontAwesomeIcon
            icon={faCircleHalfStroke}
            size="lg"
            className="transition-transform duration-300 ease-in-out hover:rotate-180"
          />
        </button> */}
      </div>
    </nav>
  );
}