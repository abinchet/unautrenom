import React from "react";
import Navbar from "../Navbar.jsx";
import Titre from "../Titre.jsx";
import "./../App.css";
import Box from "../components/Box.jsx";
import Button from "./../button.jsx";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <div className="flex flex-col lg:flex-row min-h-screen justify-center items-center px-4 md:px-8 lg:px-24 gap-8 text-center lg:text-left py-10">
          <div className="w-full lg:w-3/4 flex flex-col items-center lg:items-start mx-0 lg:mx-5 lg:pr-20 sm:text-left text-center">
            <Titre
              className="underline decoration-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
              }}
            >
              Mes projets
            </Titre>
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              <Box className="flex flex-col justify-center">
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  Photographie
                </h1>
                <Link
                  to="/gallery"
                  className="flex justify-center items-center"
                >
                  <a
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#3b82f6",
                      color: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      border: "none",
                      cursor: "pointer",
                      marginTop: "1rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Ma gallerie
                  </a>
                </Link>
              </Box>
              <Box>
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  Graphisme
                </h1>
                <Link
                  to="/designs"
                  className="flex justify-center items-center"
                >
                  <a
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#3b82f6",
                      color: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      border: "none",
                      cursor: "pointer",
                      marginTop: "1rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Mes designs
                  </a>
                </Link>
              </Box>
              <Box>
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  Vidéo
                </h1>
                <Link to="/videos" className="flex justify-center items-center">
                  <a
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#3b82f6",
                      color: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      border: "none",
                      cursor: "pointer",
                      marginTop: "1rem",
                      whiteSpace: "nowrap",
                      gap: "0.5rem",
                    }}
                  >
                    Voir
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      marginTop="2rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-play-icon lucide-play"
                    >
                      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                    </svg>
                  </a>
                </Link>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
