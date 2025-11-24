import React from "react";
import Navbar from "../Navbar.jsx";
import Titre from "../Titre.jsx";
import SoftBadge from "../components/SoftBadge.jsx";
import Box from "../components/box.jsx";
import "./../App.css";

const About = () => {
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
              Arthur BINCHET
            </Titre>
            <div className="flex flex-col gap-6 md:gap-8">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl sm:text-left text-center">
                Je suis étudiant en BUT MMI à l'Iut d'Angoulême. Passionné par
                la photographie, le développement Web ou encore le design, je
                mets mes compétences à rudes épreuves afin de pouvoir me
                diversifier et d'en apprendre toujours plus...
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl sm:text-left text-center">
                Je suis quelqu'un de sportif, je fais du handball depuis
                maintenant quelques années, ce qui m'a permis de me découvrir un
                côté compétiteur/déterminé. La musique fait aussi en grande
                partie de ma vie et j'en pratique souvent dans mon quotidien.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl sm:text-left text-center">
                Mon parcours en MMI m'a permis de développer une approche
                polyvalente du multimédia : de la conception d'interfaces web
                responsives à la réalisation de shootings photo, en passant par
                le montage vidéo et la création graphique. Cette diversité me
                permet d'avoir une vision globale des projets.
              </p>
            </div>
          </div>
          <div className="w-32 h-full sm:w-48 sm:h-full md:w-64 md:h-full lg:w-1/4 lg:h-full  rounded-xl overflow-hidden shadow-lg border-4 border-blue-500 flex-shrink-0">
            <img
              src="./../profil.jpg"
              alt="Arthur Binchet"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="mx-4 md:mx-8 lg:mx-24 py-10">
          <div className="mx-6 md:mx-12 lg:mx-20 mb-12">
            <Titre
              className="underline decoration-blue-500 text-xl md:text-2xl lg:text-3xl mb-4 text-center md:text-left"
              style={{
                pointerEvents: "auto",
                fontFamily: "Poppins, sans-serif",
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
