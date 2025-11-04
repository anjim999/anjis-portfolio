import React from "react";
import { projects } from "../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-800 text-white text-center relative overflow-visible"
    >
      <h2 className="text-4xl font-bold mb-10 text-pink-500">My Projects</h2>

      <div className="relative max-w-6xl mx-auto px-6 pb-16 overflow-visible pl-5 pr-5">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-8 overflow-visible"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="overflow-visible">
              <div
                className="mb-5 mt-5 bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30 hover:scale-105 transform transition-transform duration-300 h-full flex flex-col justify-between"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-2xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>

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

                <div className="flex justify-center gap-4 mt-auto">
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="swiper-button-prev-custom absolute -left-8 top-1/2 -translate-y-1/2 cursor-pointer text-3xl text-pink-500 hover:text-pink-400 z-20 select-none">
          ❮
        </div>
        <div className="swiper-button-next-custom absolute -right-8 top-1/2 -translate-y-1/2 cursor-pointer text-3xl text-pink-500 hover:text-pink-400 z-20 select-none">
          ❯
        </div>

        {/* Custom Pagination Dots */}
        <div className="swiper-pagination-custom absolute left-0 right-0 bottom-[-30px] flex justify-center items-center space-x-2"></div>
      </div>
    </section>
  );
};

export default Projects;
