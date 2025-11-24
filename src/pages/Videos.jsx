import React from "react";
import Navbar from "../Navbar.jsx";
import Titre from "../Titre.jsx";
import "./../App.css";
import Rond from "../rond.jsx";
import Box from "../components/box.jsx";
import Barre from "../Barre.jsx";

const Videos = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <div className="flex flex-col min-h-screen justify-center items-center px-4 md:px-8 lg:px-24 py-20 md:py-30">
          <Titre
            className="underline decoration-blue-500 text-3xl md:text-4xl lg:text-5xl mb-6 text-center"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold" }}
          >
            Mes Vidéos
          </Titre>
          <div className="w-full flex flex-col md:flex-row justify-center gap-6 md:gap-8 px-4 md:px-10 mb-10">
            <Box className="w-full md:w-1/2">
              <div className="flex flex-col">
                <div
                  style={{
                    width: "100%",
                    height: "120px",
                    position: "relative",
                  }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=3sGPWYlTLwo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block w-full h-full"
                  >
                    <img
                      src="projet1.png"
                      alt="Screen d'une expérience inédite"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        borderRadius: "12px",
                        cursor: "pointer",
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  flex: 1,
                  paddingTop: "1rem",
                }}
              >
                <Titre
                  className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-center"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    marginBottom: "0.75rem",
                  }}
                >
                  Une expérience inédite
                </Titre>
                <Barre></Barre>
                <p className="text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed text-center px-2 py-2">
                  Une expérience inédite était un projet d'audiovisuel de
                  première année de BUT MMI. Ce premier projet m'a apporté de
                  diverses connaissances.
                </p>
              </div>
              <div className="flex flex-wrap justify-center mt-4 gap-2">
                <Rond
                  style={{
                    height: "35px",
                    fontSize: "1rem",
                    padding: "0.25rem 0.5rem",
                  }}
                  className="text-xs"
                >
                  Cadrage
                </Rond>
                <Rond
                  style={{
                    height: "35px",
                    fontSize: "1rem",
                    padding: "0.25rem 0.5rem",
                  }}
                  className="text-xs"
                >
                  Montage
                </Rond>
                <Rond
                  style={{
                    height: "35px",
                    fontSize: "0.80rem",
                    lineHeight: "1.2",
                    padding: "0.25rem 0.5rem",
                  }}
                  className="text-xs"
                >
                  Gestion de projet
                </Rond>
              </div>
            </Box>
            <Box className="w-full md:w-1/2">
              <div className="flex flex-col">
                <div
                  style={{
                    width: "100%",
                    height: "120px",
                    position: "relative",
                  }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=6X9-h6bbchM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block w-full h-full"
                  >
                    <img
                      src="ombre.png"
                      alt="Screen de l'ombre"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        borderRadius: "12px",
                        cursor: "pointer",
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  flex: 1,
                  paddingTop: "1rem",
                }}
              >
                <Titre
                  className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-center"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    marginBottom: "0.75rem",
                  }}
                >
                  L'ombre
                </Titre>
                <Barre></Barre>
                <p className="text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed text-center px-2 py-2">
                  Le court métrage l'ombre était un exercice audiovisuel en
                  rapport avec le hors champ. Cela m'a permis de découvrir de
                  nouvelles prises de vue.
                </p>
              </div>
              <div className="flex flex-wrap justify-center mt-4 gap-2">
                <Rond
                  style={{
                    height: "35px",
                    fontSize: "1rem",
                    padding: "0.25rem 0.5rem",
                  }}
                  className="text-xs"
                >
                  Cadrage
                </Rond>
                <Rond
                  style={{
                    height: "35px",
                    fontSize: "1rem",
                    padding: "0.25rem 0.5rem",
                  }}
                  className="text-xs"
                >
                  Montage
                </Rond>
              </div>
            </Box>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center gap-6 md:gap-8 px-4 md:px-10 mb-10">
            <Box className="w-full md:w-1/2">
              <div className="flex flex-col">
                <div
                  style={{
                    width: "100%",
                    height: "120px",
                    position: "relative",
                  }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=K4_Xuxzdb9w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block w-full h-full"
                  >
                    <img
                      src="maif.png"
                      alt="Screen de la vidéo MAIF"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        borderRadius: "12px",
                        cursor: "pointer",
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  flex: 1,
                  paddingTop: "1rem",
                }}
              >
                <Titre
                  className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-center"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    marginBottom: "0.75rem",
                  }}
                >
                  Concours grand angle MAIF
                </Titre>
                <Barre></Barre>
                <p className="text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed text-center px-2 py-2">
                  Cette vidéo a été réalisé pour le concours grand angle de la
                  MAIF, cette année le sujet était les nudges. Beaucoup de
                  reflexions et de contraintes imposées mais cela nous a permis
                  de nous mettre en conditions réelles.
                </p>
              </div>
              <div className="flex flex-wrap justify-center mt-4 gap-2">
                <Rond
                  style={{
                    height: "35px",
                    fontSize: "1rem",
                    padding: "0.25rem 0.5rem",
                  }}
                  className="text-xs"
                >
                  Cadrage
                </Rond>
                <Rond
                  style={{
                    height: "35px",
                    fontSize: "1rem",
                    padding: "0.25rem 0.5rem",
                  }}
                  className="text-xs"
                >
                  Montage
                </Rond>
                <Rond
                  style={{
                    height: "35px",
                    fontSize: "1rem",
                    padding: "0.25rem 0.5rem",
                  }}
                  className="text-xs"
                >
                  Scénario
                </Rond>
                <Rond
                  style={{
                    height: "35px",
                    fontSize: "1rem",
                    padding: "0.25rem 0.5rem",
                  }}
                  className="text-xs"
                >
                  Organisation
                </Rond>
              </div>
            </Box>
            <Box className="w-full md:w-1/2">
              <div className="flex flex-col">
                <div
                  style={{
                    width: "100%",
                    height: "120px",
                    position: "relative",
                  }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=K4_Xuxzdb9w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block w-full h-full"
                  >
                    <img
                      src="ombre.png"
                      alt="Screen de l'ombre"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        borderRadius: "12px",
                        cursor: "pointer",
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  flex: 1,
                  paddingTop: "1rem",
                }}
              >
                <Titre
                  className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-center"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    marginBottom: "0.75rem",
                  }}
                >
                  ???
                </Titre>
                <Barre></Barre>
                <p className="text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed text-center px-2 py-2">
                  ???
                </p>
              </div>
              <div className="flex flex-wrap justify-center mt-4 gap-2">
                <Rond
                  style={{
                    height: "35px",
                    fontSize: "1rem",
                    padding: "0.25rem 0.5rem",
                  }}
                  className="text-xs"
                >
                  Cadrage
                </Rond>
                <Rond
                  style={{
                    height: "35px",
                    fontSize: "1rem",
                    padding: "0.25rem 0.5rem",
                  }}
                  className="text-xs"
                >
                  Montage
                </Rond>
              </div>
            </Box>
          </div>
          <div className="flex justify-center items-center pb-10">
            <a href="/projects">
              <Rond
                style={{ width: "120px", height: "50px", textAlign: "center" }}
              >
                Retour
              </Rond>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
