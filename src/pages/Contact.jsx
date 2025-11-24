import React, { useState } from "react";
import Navbar from "../Navbar.jsx";
import Titre from "../Titre.jsx";
import "./../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message,
        });
        // Réinitialiser le formulaire
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Une erreur est survenue.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error.message || "Erreur de connexion. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="app-container">
        <div className="flex flex-col min-h-screen justify-center items-center px-4 md:px-8 lg:px-24 gap-8 text-center py-40">
          <div className="w-full flex flex-col items-center mx-0 lg:mx-5">
            <Titre
              className="underline decoration-blue-500 text-4xl md:text-5xl lg:text-5xl mb-4 titre-centre"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
              }}
            >
              Prêt à passer à l'action ?
            </Titre>
            <p className="text-lg mb-6">
              Découvrez les différentes façons de prendre contact avec moi !
            </p>
          </div>

          {/* Cards de contact social */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8 mb-5">
            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/a.bc_prod/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#instagram-gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <defs>
                      <linearGradient
                        id="instagram-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#833AB4" />
                        <stop offset="50%" stopColor="#E1306C" />
                        <stop offset="100%" stopColor="#FD1D1D" />
                      </linearGradient>
                    </defs>
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <h4 className="text-white font-bold text-xl">Instagram</h4>
                <p className="text-white/90 text-sm text-center">a.bc_prod</p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/arthur-binchet-b11aab2b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="#0077B5"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-xl">LinkedIn</h4>
                <p className="text-white/90 text-sm text-center">
                  Arthur BINCHET
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="#contact"
              className="group relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h4 className="text-white font-bold text-xl">Email</h4>
                <p className="text-white/90 text-sm text-center">
                  arthurbinchet12@gmail.com
                </p>
              </div>
            </a>
          </div>

          <div className="items-center">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center transition-all duration-300 bg-blue-500 hover:bg-white hover:border-blue-400"
              style={{
                width: "4rem",
                height: "4rem",
                color: "white",
                borderRadius: "2rem",
                border: "3px solid #3b82f6",
              }}
              aria-label="Ajouter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                className="transition-all duration-500 group-hover:rotate-90 group-hover:stroke-blue-500"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </a>
          </div>
        </div>
        <section id="contact" className="h-10"></section>
        <div className="w-full px-8 md:px-14 lg:px-36 pb-20">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Photo avec overlay à gauche */}
            <div className="w-full lg:w-1/2 relative rounded-xl overflow-hidden shadow-xl min-h-[300px] lg:min-h-[450px]">
              <img
                src="/pdp.png"
                alt="Contact"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-transparent flex items-center justify-center">
                <div className="text-white text-center px-8">
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-3"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Travaillons ensemble
                  </h3>
                  <p className="text-base md:text-lg">
                    N'hésitez pas à me contacter pour une potentielle future
                    collaboration.
                  </p>
                </div>
              </div>
            </div>

            {/* Formulaire à droite */}
            <div className="w-full lg:w-1/2 bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-blue-500/20">
              <h3
                className="text-xl md:text-2xl font-bold mb-4 text-blue-500"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Envoyez-moi un message
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 bg-white/10 border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 bg-white/10 border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 bg-white/10 border border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none disabled:opacity-50"
                    placeholder="Décrivez votre projet ou votre demande..."
                  ></textarea>
                </div>

                {submitStatus && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-500/20 border border-green-500/50 text-green-100"
                        : "bg-red-500/20 border border-red-500/50 text-red-100"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    "Soumettre"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
