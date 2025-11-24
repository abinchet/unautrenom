import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar.jsx";
import Titre from "../Titre.jsx";
import "./../App.css";
import Rond from "../rond.jsx";

const Designs = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <div className="flex flex-col min-h-screen p-8 py-30 md:p-22 lg:p-30 text-center ">
          <Titre
            className="underline decoration-blue-500 text-4xl md:text-5xl lg:text-5xl mb-10 titre-centre"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
            }}
          >
            Mes designs
          </Titre>
          {/*Photos vertical*/}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-start max-w-7xl">
              <div className="h-115 w-65 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/designs/dd.png"
                  alt="Design"
                />
              </div>
              <div className="h-115 w-65 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/designs/clem.jpg"
                  alt="Design"
                />
              </div>
              <div className="h-115 w-65 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/designs/monaco.jpg"
                  alt="Design"
                />
              </div>
              <div className="h-115 w-65 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/designs/bo.png"
                  alt="Design"
                />
              </div>
              <div className="h-115 w-65 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/designs/kyrie.png"
                  alt="Design"
                />
              </div>
              <div className="h-115 w-65 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/designs/dd2.png"
                  alt="Design"
                />
              </div>
              <div className="h-115 w-65 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/designs/dort.png"
                  alt="Design"
                />
              </div>
              <div className="h-115 w-65 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/designs/methalie.png"
                  alt="Design"
                />
              </div>
              <div className="h-115 w-65 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/designs/finale.png"
                  alt="Design"
                />
              </div>
              <div className="h-90 w-65 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/designs/derby.png"
                  alt="Design"
                />
              </div>
              <div className="h-90 w-65 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/designs/gidsel.png"
                  aalt="Design"
                />
              </div>
              <div className="h-90 w-65 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="/designs/vaki.png"
                  alt="Design"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-10 items-center text-center pb-10">
          <hr className="w-full max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg px-4 max-w-3xl">
            <span
              style={{ color: "blue", fontSize: "2rem" }}
              className="sm:text-5xl"
            >
              *
            </span>
            Ces designs sont des créations réalisées dans l'objectif de
            m'améliorer, pour voir mes prochains designs, suivez moi sur mon
            compte Instagram :{" "}
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
    </>
  );
};

export default Designs;
