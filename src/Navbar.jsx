import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex justify-between items-center px-8 py-4 rounded-full border border-gray-400 backdrop-blur-md shadow-2xl bg-black/30"
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        width: "90%",
        maxWidth: "800px",
        boxShadow:
          "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="flex items-center">
        <Link
          to="/"
          className="font-bold text-xl transition-colors duration-300"
        >
          AB
        </Link>
      </div>
      <button
        className="block sm:hidden ml-4 focus:outline-none group"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <div className="w-7 h-6 flex flex-col justify-between items-center relative">
          <span
            className={`w-full h-0.5 bg-current rounded-full transform transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
              open ? "opacity-0 scale-0" : "opacity-100 scale-100"
            }`}
          />
          <span
            className={`w-full h-0.5 bg-current rounded-full transform transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </button>
      <div className="hidden sm:block">
        <ul className="flex gap-4 list-none p-0 m-0 items-center">
          <li>
            <Link
              to="/"
              className="text-gray-300 hover:text-blue-400 font-medium py-2 px-4 transition-all duration-300 cursor-pointer no-underline "
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-300 hover:text-blue-400 font-medium py-2 px-4 transition-all duration-300 cursor-pointer no-underline"
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-gray-300 hover:text-blue-400 font-medium py-2 px-4 transition-all duration-300 cursor-pointer no-underline"
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-blue-400 font-medium py-2 px-6 rounded-lg transition-all duration-300 cursor-pointer no-underline "
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg rounded-b-xl shadow-lg sm:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 py-4 items-center">
          <li
            className={`transform transition-all duration-300 ${
              open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
            style={{ transitionDelay: open ? "100ms" : "0ms" }}
          >
            <Link
              to="/"
              className="block text-gray-300 hover:text-blue-400 font-medium py-2 px-4 transition-all duration-300 cursor-pointer no-underline"
              onClick={() => setOpen(false)}
            >
              Accueil
            </Link>
          </li>
          <li
            className={`transform transition-all duration-300 ${
              open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
            style={{ transitionDelay: open ? "200ms" : "0ms" }}
          >
            <Link
              to="/about"
              className="block text-gray-300 hover:text-blue-400 font-medium py-2 px-4 transition-all duration-300 cursor-pointer no-underline"
              onClick={() => setOpen(false)}
            >
              À propos
            </Link>
          </li>
          <li
            className={`transform transition-all duration-300 ${
              open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
            style={{ transitionDelay: open ? "300ms" : "0ms" }}
          >
            <Link
              to="/projects"
              className="block text-gray-300 hover:text-blue-400 font-medium py-2 px-4 transition-all duration-300 cursor-pointer no-underline"
              onClick={() => setOpen(false)}
            >
              Projets
            </Link>
          </li>
          <li
            className={`transform transition-all duration-300 ${
              open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
            style={{ transitionDelay: open ? "400ms" : "0ms" }}
          >
            <Link
              to="/contact"
              className="block text-gray-300 hover:text-blue-400 font-medium py-2 px-6 rounded-lg transition-all duration-300 cursor-pointer no-underline"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
