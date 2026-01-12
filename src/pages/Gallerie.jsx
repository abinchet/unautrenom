import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar.jsx";
import Titre from "../Titre.jsx";
import "./../App.css";
import Rond from "../rond.jsx";

const Gallerie = () => {
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
          <div className="flex flex-col gap-20">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 items-start">
              <div className="h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/inte2.webp"
                  alt="Journée d'intégration MMI"
                />
              </div>
              <div className="h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/e1.webp"
                  alt="Match Basket"
                />
              </div>
              <div className="h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/7.webp"
                  alt="Entrainement Rugby"
                />
              </div>
              <div className="h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/am.webp"
                  alt="Match Handball"
                  loading="lazy"
                />
              </div>
              <div className="h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/inte1.webp"
                  alt="Journée d'intégration MMI"
                  loading="lazy"
                />
              </div>
              <div className="h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/blue.webp"
                  alt="Match Handball"
                  loading="lazy"
                />
              </div>
              <div className="h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/team.webp"
                  alt="Match Handball"
                  loading="lazy"
                />
              </div>
              <div className="h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/tom.webp"
                  alt="Match Handball"
                  loading="lazy"
                />
              </div>
              <div className="h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/inte3.webp"
                  alt="Journée d'intégration MMI"
                  loading="lazy"
                />
              </div>
            </div>
            {/*Photos vertical*/}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-start">
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/clement.webp"
                  alt="BasketBall"
                  loading="lazy"
                />
              </div>
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/louise.webp"
                  alt="Match Basket"
                  loading="lazy"
                />
              </div>
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/hedi2.webp"
                  alt="Entrainement MMA"
                  loading="lazy"
                />
              </div>
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/ethan.webp"
                  alt="Match Football"
                  loading="lazy"
                />
              </div>
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/mathysnb.webp"
                  alt="Shooting"
                  loading="lazy"
                />
              </div>
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/tom2.webp"
                  alt="Match Handball"
                  loading="lazy"
                />
              </div>
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/8.webp"
                  alt="Match Handball"
                  loading="lazy"
                />
              </div>
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/basket1.webp"
                  alt="Match Basket"
                  loading="lazy"
                />
              </div>
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/hedi.webp"
                  alt="Entrainement MMA"
                  loading="lazy"
                />
              </div>
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/shoot.webp"
                  alt="Shooting"
                  loading="lazy"
                />
              </div>
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/gero.webp"
                  alt="Match Pétanque"
                  loading="lazy"
                />
              </div>
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/jc.webp"
                  alt="Match Handball"
                  loading="lazy"
                />
              </div>
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/maia.webp"
                  alt="Match Handball"
                  loading="lazy"
                />
              </div>
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/gallerie/lucas.webp"
                  alt="Shooting"
                  loading="lazy"
                />
              </div>
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
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
    </>
  );
};

export default Gallerie;
