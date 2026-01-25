import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar.jsx";
import Titre from "../Titre.jsx";
import "./../App.css";
import Rond from "../rond.jsx";

const Gallerie = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src, alt) => {
    setSelectedImage({ src, alt });
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Navbar />
      <div className="app-container">
        <div className="flex flex-col min-h-screen p-8 py-30 md:p-22 lg:p-30 text-center ">
          <Titre
            className="underline decoration-blue-500 text-4xl md:text-5xl lg:text-5xl mb-10 titre-centre"
            style={{
              fontWeight: "bold",
            }}
          >
            Ma Galerie photo
          </Titre>
          <div class="full-size">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col gap-20">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 items-start">
              <div
                className="h-64 overflow-hidden cursor-pointer"
                onClick={() =>
                  openImage("/gallerie/inte2.webp", "Journée d'intégration MMI")
                }
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/inte2.webp"
                  alt="Journée d'intégration MMI"
                />
              </div>
              <div
                className="h-64 overflow-hidden cursor-pointer"
                onClick={() => openImage("/gallerie/e1.webp", "Match Basket")}
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/e1.webp"
                  alt="Match Basket"
                />
              </div>
              <div
                className="h-64 overflow-hidden cursor-pointer"
                onClick={() =>
                  openImage("/gallerie/7.webp", "Entrainement Rugby")
                }
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/7.webp"
                  alt="Entrainement Rugby"
                />
              </div>
              <div
                className="h-64 overflow-hidden cursor-pointer"
                onClick={() => openImage("/gallerie/am.webp", "Match Handball")}
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/am.webp"
                  alt="Match Handball"
                  loading="lazy"
                />
              </div>
              <div
                className="h-64 overflow-hidden cursor-pointer"
                onClick={() =>
                  openImage("/gallerie/inte1.webp", "Journée d'intégration MMI")
                }
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/inte1.webp"
                  alt="Journée d'intégration MMI"
                  loading="lazy"
                />
              </div>
              <div
                className="h-64 overflow-hidden cursor-pointer"
                onClick={() =>
                  openImage("/gallerie/blue.webp", "Match Handball")
                }
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/blue.webp"
                  alt="Match Handball"
                  loading="lazy"
                />
              </div>
              <div
                className="h-64 overflow-hidden cursor-pointer"
                onClick={() =>
                  openImage("/gallerie/team.webp", "Match Handball")
                }
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/team.webp"
                  alt="Match Handball"
                  loading="lazy"
                />
              </div>
              <div
                className="h-64 overflow-hidden cursor-pointer"
                onClick={() =>
                  openImage("/gallerie/tom.webp", "Match Handball")
                }
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/tom.webp"
                  alt="Match Handball"
                  loading="lazy"
                />
              </div>
              <div
                className="h-64 overflow-hidden cursor-pointer"
                onClick={() =>
                  openImage("/gallerie/inte3.webp", "Journée d'intégration MMI")
                }
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/inte3.webp"
                  alt="Journée d'intégration MMI"
                  loading="lazy"
                />
              </div>
            </div>
            {/*Photos vertical*/}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-start">
              <div
                className="h-80 sm:h-96 overflow-hidden cursor-pointer"
                onClick={() =>
                  openImage("/gallerie/clement.webp", "BasketBall")
                }
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/clement.webp"
                  alt="BasketBall"
                  loading="lazy"
                />
              </div>
              <div
                className="h-80 sm:h-96 overflow-hidden cursor-pointer"
                onClick={() =>
                  openImage("/gallerie/louise.webp", "Match Basket")
                }
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/louise.webp"
                  alt="Match Basket"
                  loading="lazy"
                />
              </div>
              <div
                className="h-80 sm:h-96 overflow-hidden cursor-pointer"
                onClick={() =>
                  openImage("/gallerie/hedi2.webp", "Entrainement MMA")
                }
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/hedi2.webp"
                  alt="Entrainement MMA"
                  loading="lazy"
                />
              </div>
              <div
                className="h-80 sm:h-96 overflow-hidden cursor-pointer"
                onClick={() =>
                  openImage("/gallerie/ethan.webp", "Match Football")
                }
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/ethan.webp"
                  alt="Match Football"
                  loading="lazy"
                />
              </div>
              <div
                className="h-80 sm:h-96 overflow-hidden cursor-pointer"
                onClick={() => openImage("/gallerie/mathysnb.webp", "Shooting")}
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/mathysnb.webp"
                  alt="Shooting"
                  loading="lazy"
                />
              </div>
              <div
                className="h-80 sm:h-96 overflow-hidden cursor-pointer"
                onClick={() =>
                  openImage("/gallerie/tom2.webp", "Match Handball")
                }
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/tom2.webp"
                  alt="Match Handball"
                  loading="lazy"
                />
              </div>
              <div
                className="h-80 sm:h-96 overflow-hidden cursor-pointer"
                onClick={() => openImage("/gallerie/8.webp", "Match Handball")}
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/8.webp"
                  alt="Match Handball"
                  loading="lazy"
                />
              </div>
              <div
                className="h-80 sm:h-96 overflow-hidden cursor-pointer"
                onClick={() =>
                  openImage("/gallerie/basket1.webp", "Match Basket")
                }
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/basket1.webp"
                  alt="Match Basket"
                  loading="lazy"
                />
              </div>
              <div
                className="h-80 sm:h-96 overflow-hidden cursor-pointer"
                onClick={() =>
                  openImage("/gallerie/hedi.webp", "Entrainement MMA")
                }
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/hedi.webp"
                  alt="Entrainement MMA"
                  loading="lazy"
                />
              </div>
              <div
                className="h-80 sm:h-96 overflow-hidden cursor-pointer"
                onClick={() => openImage("/gallerie/shoot.webp", "Shooting")}
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/shoot.webp"
                  alt="Shooting"
                  loading="lazy"
                />
              </div>
              <div
                className="h-80 sm:h-96 overflow-hidden cursor-pointer"
                onClick={() =>
                  openImage("/gallerie/gero.webp", "Match Pétanque")
                }
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/gero.webp"
                  alt="Match Pétanque"
                  loading="lazy"
                />
              </div>
              <div
                className="h-80 sm:h-96 overflow-hidden cursor-pointer"
                onClick={() => openImage("/gallerie/jc.webp", "Match Handball")}
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/jc.webp"
                  alt="Match Handball"
                  loading="lazy"
                />
              </div>
              <div
                className="h-80 sm:h-96 overflow-hidden cursor-pointer"
                onClick={() =>
                  openImage("/gallerie/maia.webp", "Match Handball")
                }
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/maia.webp"
                  alt="Match Handball"
                  loading="lazy"
                />
              </div>
              <div
                className="h-80 sm:h-96 overflow-hidden cursor-pointer"
                onClick={() => openImage("/gallerie/lucas.webp", "Shooting")}
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/lucas.webp"
                  alt="Shooting"
                  loading="lazy"
                />
              </div>
              <div
                className="h-80 sm:h-96 overflow-hidden cursor-pointer"
                onClick={() => openImage("/gallerie/79.webp", "Match Handball")}
              >
                <img
                  className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                  src="/gallerie/79.webp"
                  alt="Match Handball"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:gap-10">
            <hr className="mt-8 md:mt-12" />
            <p className="text-sm sm:text-base md:text-lg px-4">
              <span
                style={{ color: "blue", fontSize: "2rem" }}
                className="sm:text-5xl"
              >
                *
              </span>
              Ces photos représentent une partie de mon travail, pour voir ces
              photos en meilleure qualité et continuer à suivre mes aventures,{" "}
              <span className="hidden sm:inline">
                <br />
              </span>
              n'hésitez pas à me suivre sur mon compte Instagram :
            </p>
            <div className="flex justify-center items-center gap-2">
              <a
                href="https://www.instagram.com/a.bc_prod/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/insta.png"
                  alt="Logo instagram"
                  className="h-5 sm:h-6 md:h-7 cursor-pointer"
                />
              </a>
              <a
                href="https://www.instagram.com/a.bc_prod/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-bold cursor-pointer text-base sm:text-lg md:text-xl">
                  a.bc_prod
                </p>
              </a>
            </div>
            <div className="flex justify-center items-center pb-10">
              <Link to="/projects">
                <Rond
                  style={{
                    width: "120px",
                    height: "50px",
                    textAlign: "center",
                  }}
                  className="sm:w-32"
                >
                  Retour
                </Rond>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div className="max-w-7xl max-h-full flex items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button
            className="absolute left-5 text-white text-4xl font-bold hover:text-gray-300 transition-colors z-10"
            onClick={closeImage}
            aria-label="Fermer"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default Gallerie;
