import React from "react";
import Navbar from "../Navbar.jsx";
import Titre from "../Titre.jsx";
import "./../App.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const Projects = () => {
  const projects = [
    {
      title: "Photographie",
      description: "Capturer des moments uniques à travers l'objectif",
      link: "/gallery",
      buttonText: "Découvrir",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      ),
      category: "Visual",
    },
    {
      title: "Graphisme",
      description: "Créer des visuels qui racontent une histoire",
      link: "/designs",
      buttonText: "Explorer",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
          <path d="m14 7 3 3" />
          <path d="M5 6v4" />
          <path d="M19 14v4" />
          <path d="M10 2v2" />
          <path d="M7 8H3" />
          <path d="M21 16h-4" />
          <path d="M11 3H9" />
        </svg>
      ),
      category: "Design",
    },
    {
      title: "Vidéo",
      description: "Donner vie aux idées en mouvement",
      link: "/videos",
      buttonText: "Visionner",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
          <rect x="2" y="6" width="14" height="12" rx="2" />
        </svg>
      ),
      category: "Motion",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="app-container">
        <div className="flex flex-col min-h-screen justify-center items-center px-4 md:px-8 lg:px-16 xl:px-24 py-20 md:py-24">
          <div className="w-full max-w-7xl">
            <Titre
              className="underline decoration-blue-500 text-3xl sm:text-3xl md:text-4xl lg:text-5xl mt-16 sm:mt-10 mb-3 text-center"
              style={{
                fontWeight: "bold",
                marginBottom: "3rem",
              }}
            >
              Mes Projets
            </Titre>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <Link key={index} to={project.link} className="group relative">
                  <div className="relative h-full border border-gray-400/30 backdrop-blur-md bg-black/20 rounded-2xl p-8 md:p-10 transition-all duration-500 hover:bg-black/30 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
                    {/* Effet de brillance au survol */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_ease-in-out] group-hover:left-full"></div>
                    </div>

                    {/* Badge catégorie */}
                    <div className="absolute top-4 right-4 text-xs font-semibold text-blue-400 border border-blue-400/30 px-3 py-1 rounded-full backdrop-blur-sm bg-blue-500/10">
                      {project.category}
                    </div>

                    <div className="relative flex flex-col h-full">
                      {/* Icône */}
                      <div className="mb-6 text-blue-400 group-hover:text-blue-300 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2">
                        {project.icon}
                      </div>

                      {/* Titre */}
                      <h2
                        className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {project.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      {/* Bouton */}
                      <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-4 transition-all duration-300">
                        <span className="relative">
                          {project.buttonText}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transform group-hover:translate-x-1 transition-transform duration-300"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
