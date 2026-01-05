import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-400/30 backdrop-blur-md bg-black/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-10">
        {/* Trois colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Colonne gauche - À propos */}
          <div className="text-left w-75">
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Arthur BINCHET
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Étudiant en BUT MMI passionné par la photographie, le
              développement web et le design. Créatif et déterminé à réaliser
              des projets innovants.
            </p>
          </div>

          {/* Colonne milieu - Navigation */}
          <div className="text-left">
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Navigation
            </h3>
            <nav className="flex flex-col text-left gap-1">
              <Link
                to="/"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Accueil
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                À propos
              </Link>
              <Link
                to="/projects"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Projets
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Colonne droite - Réseaux sociaux */}
          <div className="text-left">
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Me suivre
            </h3>
            <div className="flex gap-3 items-left">
              <a
                href="https://www.instagram.com/a.bc_prod/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500 hover:border-blue-400 backdrop-blur-sm bg-black/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/arthur-binchet-b11aab2b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500 hover:border-blue-400 backdrop-blur-sm bg-black/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <Link
                to="/contact#contact"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500 hover:border-blue-400 backdrop-blur-sm bg-black/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="h-px w-full bg-gray-400/30 mb-6"></div>

        {/* Copyright et mentions légales */}
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-center">
          <div>
            <p className="text-gray-400 text-sm md:text-base mb-2">
              © {new Date().getFullYear()} Arthur BINCHET - Tous droits réservés
            </p>
          </div>
          <div className="flex justify-center gap-4 text-xs md:text-sm text-gray-500">
            <Link
              to="/mentions-legales"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Mentions légales
            </Link>
            <span>•</span>
            <Link
              to="/politique-confidentialite"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
