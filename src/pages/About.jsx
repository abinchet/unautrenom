import React from "react";
import Navbar from "../Navbar.jsx";
import Titre from "../Titre.jsx";
import SoftBadge from "../components/SoftBadge.jsx";
import Box from "../components/box.jsx";
import "./../App.css";
import Footer from "../components/Footer.jsx";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        {/* Section principale avec photo et texte */}
        <div className="flex flex-col lg:flex-row min-h-screen justify-center items-center px-4 sm:px-6 md:px-8 lg:px-24 gap-6 sm:gap-8 text-center lg:text-left pt-35 pb-10 sm:pt-60 lg:pt-30 sm:pb-12 lg:py-10">
          {/* Texte */}
          <div className="w-full lg:w-3/4 flex flex-col items-center lg:items-start lg:mx-5 lg:pr-20">
            <Titre
              className="underline decoration-blue-500 text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 text-left px-2 w-full"
              style={{
                fontWeight: "bold",
              }}
            >
              Arthur BINCHET
            </Titre>

            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 text-left lg:text-left w-full max-w-3xl px-2 pb-10 sm:px-0">
              <p className="text-lg sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-300">
                Je suis étudiant en BUT MMI à l'Iut d'Angoulême. Passionné par
                la photographie, le développement Web ou encore le design, je
                mets mes compétences à rudes épreuves afin de pouvoir me
                diversifier et d'en apprendre toujours plus...
              </p>
              <p className="text-lg sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-300">
                Je suis quelqu'un de sportif, je fais du handball depuis
                maintenant quelques années, ce qui m'a permis de me découvrir un
                côté compétiteur/déterminé. La musique fait aussi en grande
                partie de ma vie et j'en pratique souvent dans mon quotidien.
              </p>
              <p className="text-lg sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-300">
                Mon parcours en MMI m'a permis de développer une approche
                polyvalente du multimédia : de la conception d'interfaces web
                responsives à la réalisation de shootings photo, en passant par
                le montage vidéo et la création graphique. Cette diversité me
                permet d'avoir une vision globale des projets.
              </p>
            </div>
          </div>

          {/* Photo */}
          <div className="w-80 h-100 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-1/4 lg:h-auto rounded-xl overflow-hidden shadow-lg border-2 sm:border-4 border-blue-500 flex-shrink-0">
            <img
              src="./../profil.jpg"
              alt="Arthur Binchet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="mx-4 md:mx-8 lg:mx-24 py-10">
          <div className="mx-6 md:mx-12 lg:mx-20 mb-12">
            <Titre
              className="underline decoration-blue-500 text-xl md:text-2xl lg:text-3xl mb-4 text-center md:text-left"
              style={{
                pointerEvents: "auto",
                fontWeight: "bold",
                marginBottom: "3.5rem",
              }}
            >
              Quels sont mes outils au quotidien ?
            </Titre>
          </div>
          <div className="flex justify-center items-start gap-8 lg:text-left lg:mx-12 md:mx-8 sm:mx-6 mx-4">
            <div className="flex flex-col md:flex-row gap-8 w-full">
              <Box className="w-full md:w-1/3">
                <li className="mb-4 text-lg sm:text-lg md:text-xl lg:text-2xl flex flex-col items-center justify-center gap-8">
                  <strong>Développement Web</strong>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <SoftBadge
                      iconSrc="/HTML.png"
                      label="HTML 5"
                      bgColor="#ffededff"
                      borderColor="#d98d00ff"
                      textColor="#f41a01ff"
                    />
                    <SoftBadge
                      iconSrc="/CSS.png"
                      label="CSS 3"
                      bgColor="#e2f8ffff"
                      borderColor="#399fffff"
                      textColor="#0353ffff"
                    />
                    <SoftBadge
                      iconSrc="/REACT.png"
                      label="React"
                      bgColor="#ecf4ffff"
                      borderColor="#61DAFB"
                      textColor="#14a9ffff"
                    />
                    <SoftBadge
                      iconSrc="/JAVASCRIPT.png"
                      label="Javascript"
                      bgColor="#fcffecff"
                      borderColor="#ffec3fff"
                      textColor="#000000ff"
                    />
                  </div>
                </li>
              </Box>
              <Box className="w-full md:w-1/3">
                <li className="mb-4 text-lg sm:text-lg md:text-xl lg:text-2xl flex flex-col items-center justify-center gap-8">
                  <strong>Design</strong>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <SoftBadge
                      iconSrc="/FIGMA.png"
                      label="Figma"
                      bgColor="#ffededff"
                      borderColor="#d98d00ff"
                      textColor="#f41a01ff"
                    />
                    <SoftBadge
                      iconSrc="/PHOTOSHOP.png"
                      label="Photoshop"
                      bgColor="#e2f8ffff"
                      borderColor="#399fffff"
                      textColor="#0353ffff"
                    />
                    <SoftBadge
                      iconSrc="/ILLUSTRATOR.png"
                      label="Illustrator"
                      bgColor="#ffefe2ff"
                      borderColor="#d07214ff"
                      textColor="#3b1d00ff"
                    />
                    <SoftBadge
                      iconSrc="/LIGHTROOM.png"
                      label="Lightroom"
                      bgColor="#e2f8ffff"
                      borderColor="#399fffff"
                      textColor="#0353ffff"
                    />
                  </div>
                </li>
              </Box>
              <Box className="w-full md:w-1/3">
                <li className="mb-4 text-lg sm:text-lg md:text-xl lg:text-2xl flex flex-col items-center justify-center gap-8">
                  <strong>Montage vidéo</strong>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <SoftBadge
                      iconSrc="/DAVINCI.png"
                      label="DaVinci Resolve"
                      bgColor="#ffededff"
                      borderColor="#d98d00ff"
                      textColor="#f41a01ff"
                    />
                  </div>
                </li>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
