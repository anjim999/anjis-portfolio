import nxtwatch from "../assets/images/nxtwatch.png";
import nxttrendz from "../assets/images/nxttrendz.png";
import tomato from "../assets/images/tomato.png";
import storeratings from "../assets/images/storeratings.png";

export const projects = [
  
  {
    id: 3,
    title: "Tomato Food Delivery",
    image: tomato,
    description:
      "Full-stack food delivery website with online payment integration using Stripe API and real-time cart updates.",
    tech: ["React", "Node.js", "Stripe API"],
    github: "https://github.com/anjim999/Tomato",
    live: "https://food-del-frontend2-u8pw.onrender.com/",
  },
  {
    id: 4,
    title: "Store Ratings App",
    image: storeratings,
    description:
      "Interactive web app for rating and reviewing stores. Built using React hooks, Tailwind, and localStorage.",
    tech: ["React", "Tailwind", "LocalStorage"],
    github: "https://github.com/anjim999/Store-Ratings-App",
    live: "https://store-ratings-app2.vercel.app/",
  },
  {
    id: 1,
    title: "Nxt Watch App",
    image: nxtwatch,
    description:
      "YouTube-like video streaming platform built with React, featuring theme toggle, authentication, and protected routes.",
    tech: ["React", "CSS", "REST API"],
    github: "https://github.com/yourusername/nxtwatchapp",
    live: "https://anjiwatch.ccbp.tech/",
  },
  {
    id: 2,
    title: "Nxt Trendz",
    image: nxttrendz,
    description:
      "Fully responsive e-commerce app with JWT authentication, product filters, and shopping cart management.",
    tech: ["React", "Bootstrap", "JWT"],
    github: "https://github.com/yourusername/nxttrendz",
    live: "https://anjitrendz.ccbp.tech/",
  },
];
