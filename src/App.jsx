import React from "react";
import "./App.css";
import Orb from "./Orb.jsx";
import Titre from "./Titre.jsx";
import Navbar from "./Navbar.jsx";
import TextType from "./components/TextType.jsx";
import TiltedCard from "./components/TiltedCard.jsx";
import Rond from "./rond.jsx";
import CircularGallery from "./caroussel.jsx";
import Box from "./components/box.jsx";
import Button from "./button.jsx";
import Barre from "./Barre.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Gallerie from "./pages/Gallerie";
import Designs from "./pages/Designs";
import Videos from "./pages/Videos";
import ScrollProgress from "./components/ScrollProgress.jsx";
import "./timeline.css";

function App() {
  return (
    <Router>
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="app-container">
              <section
                className="hero-section"
                style={{
                  height: "100vh",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Orb en arrière-plan */}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                >
                  <Orb
                    hoverIntensity={0.5}
                    rotateOnHover={true}
                    hue={0}
                    forceHoverState={false}
                  />
                </div>

                {/* Contenu centré */}
                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    zIndex: 5,
                    pointerEvents: "none",
                  }}
                >
                  <Titre
                    className="titre-principal titre-centre"
                    style={{
                      pointerEvents: "auto",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "5.6rem",
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Arthur BINCHET
                  </Titre>

                  <div style={{ textAlign: "center", maxWidth: "800px" }}>
                    <div style={{ fontSize: "1.5rem", lineHeight: "1.8" }}>
                      <TextType
                        text={[
                          "Portfolio",
                          "Developpeur Web",
                          "Photographe",
                          "Graphiste",
                        ]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className="text-white text-4xl"
                      />
                    </div>
                  </div>
                </div>
              </section>
              {/* A propos */}
              <section id="a-propos" className="vh-10"></section>
              <section
                id="a-propos"
                className="about-section"
                style={{
                  height: "70vh",
                  marginTop: "7rem",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0 2rem",
                }}
              >
                <div className="flex flex-col justify-center items-center w-full h-full px-4">
                  <div className="mb-10 flex flex-col lg:flex-row justify-center items-start w-full max-w-6xl gap-6 lg:gap-12">
                    <div className="flex justify-center lg:justify-start w-full lg:w-auto">
                      <TiltedCard
                        imageSrc="/assets/img/moi1.JPG"
                        altText="Arthur BINCHET Picture"
                        captionText="Arthur BINCHET Photo"
                        containerHeight="300px"
                        containerWidth="300px"
                        imageHeight="300px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.05}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                      />
                    </div>
                    <div className="flex flex-col justify-start w-full text-center lg:text-left">
                      <Titre
                        className="underline decoration-blue-500 text-4xl md:text-5xl lg:text-5xl mb-4"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Qui suis-je ?
                      </Titre>
                      <Titre
                        className="text-2xl md:text-3xl lg:text-3xl mb-6 font-bold"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        Arthur <span style={{ color: "#3b82f6" }}>BINCHET</span>
                      </Titre>
                      <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                        Je suis étudiant en BUT MMI à l'Iut d'Angoulême.
                        Passionné par la photographie, le développement Web ou
                        encore le design, je mets mes compétences à rudes
                        épreuves afin de pouvoir me diversifier et d'en
                        apprendre toujours plus.
                      </p>
                      <div className="flex gap-4 mt-5 justify-center lg:justify-start">
                        <a href="/about" className="text-blue-500">
                          <Button>En savoir plus</Button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center lg:justify-between items-center w-full max-w-6xl gap-3 md:gap-6">
                    <Rond>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-map-pin-icon lucide-map-pin"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Angoulême
                    </Rond>
                    <Rond>Dev Web</Rond>
                    <Rond>Photographie</Rond>
                    <Rond>Design</Rond>
                    <Rond>Montage</Rond>
                  </div>
                </div>
              </section>
              {/* Défillement Photos */}
              <section>
                <div style={{ height: "600px", position: "relative" }}>
                  <CircularGallery
                    bend={0}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    autoScroll={true}
                    autoScrollSpeed={3.5}
                    showTitles={false}
                  />
                </div>
              </section>
              {/* Timeline */}
              <section>
                <div class="main">
                  <div class="timeline_container">
                    <div class="indicator_line"></div>
                    <div
                      class="timeline_box box-1"
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-duration="700"
                      data-aos-easing="ease-in-sine"
                    >
                      <div class="timeline_card">
                        <div class="icon">
                          <div class="circle"></div>
                        </div>
                        <div class="timeline_content">
                          <div class="company_box">
                            <h5 class="role">Photographe / Vidéaste</h5>
                            <p class="company_name">16h33</p>
                          </div>
                          <div class="working_detail mb-3">
                            <h6 class="type">
                              Stage |<span> 2 mois</span>
                            </h6>
                            <p class="duration_time">Février/avril 2026</p>
                          </div>
                          <div class="tags">
                            <button class="tag_btn">Prise de vue</button>
                            <button class="tag_btn">Photographie</button>
                            <button class="tag_btn">Retouche</button>
                            <button class="tag_btn">Montage</button>
                            <button class="tag_btn">Organisation</button>
                          </div>
                          <p class="desc">
                            Durant mon stage chez 16h33, je serais missionné de
                            prendre des photos/vidéos pour les clients et de
                            réaliser la post-production pour finaliser.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="timeline_box box-2"
                      data-aos="fade-left"
                      data-aos-offset="300"
                      data-aos-duration="700"
                      data-aos-easing="ease-in-sine"
                    >
                      <div class="timeline_card">
                        <div class="icon">
                          <div class="circle"></div>
                        </div>
                        <div class="timeline_content">
                          <div class="company_box">
                            <h5 class="role">Designer</h5>
                            <p class="company_name">ETeC Handball</p>
                          </div>
                          <div class="working_detail mb-3">
                            <h6 class="type"></h6>
                            <p class="duration_time">Septembre 2025/présent</p>
                          </div>
                          <div class="tags">
                            <button class="tag_btn">Photoshop</button>
                            <button class="tag_btn">Illustrator</button>
                            <button class="tag_btn">Excel</button>
                          </div>
                          <p class="desc">
                            Je réalise des designs pour l'ETeC Handball, les
                            designs sont préalablement faits et je les modifie
                            en fonction des matchs du week-end.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="timeline_box box-1"
                      data-aos="fade-right"
                      data-aos-offset="30"
                      data-aos-duration="700"
                      data-aos-easing="ease-in-sine"
                    >
                      <div class="timeline_card">
                        <div class="b-left">
                          <div class="icon">
                            <div class="circle"></div>
                          </div>
                          <div class="timeline_content">
                            <div class="company_box">
                              <h5 class="role">your position</h5>
                              <p class="company_name">company name</p>
                            </div>
                            <div class="working_detail">
                              <h6 class="type">
                                Part-time | <span>Remote</span>
                              </h6>
                              <p class="duration_time">start date - end date</p>
                            </div>
                            <div class="tags">
                              <button class="tag_btn">Python</button>
                              <button class="tag_btn">Nodejs</button>
                              <button class="tag_btn">React</button>
                              <button class="tag_btn">NextJs</button>
                              <button class="tag_btn">Django</button>
                            </div>
                            <p class="desc">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Numquam eaque iusto rerum recusandae
                              delectus facilis excepturi, quasi culpa eius
                              repudiandae.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="timeline_box box-2"
                      data-aos="fade-left"
                      data-aos-offset="30"
                      data-aos-duration="700"
                      data-aos-easing="ease-in-sine"
                    >
                      <div class="timeline_card">
                        <div class="icon">
                          <div class="circle"></div>
                        </div>
                        <div class="timeline_content">
                          <div class="company_box">
                            <h5 class="role">Sr. Full-Stack Developer</h5>
                            <p class="company_name">G-Tech Official</p>
                          </div>
                          <div class="working_detail">
                            <h6 class="type">
                              Part-time | <span>Remote</span>
                            </h6>
                            <p class="duration_time">2022 - Present</p>
                          </div>
                          <div class="tags">
                            <button class="tag_btn">Python</button>
                            <button class="tag_btn">Nodejs</button>
                            <button class="tag_btn">React</button>
                            <button class="tag_btn">NextJs</button>
                            <button class="tag_btn">Django</button>
                          </div>
                          <p class="desc">
                            I design and develop services for customers of all
                            sizes, specializing in creating stylish, modern
                            websites
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gap-15 mt-5 justify-center items-center flex">
                  <a
                    href="/BINCHETArthurCV.pdf"
                    download
                    className="text-blue-500 pb-10"
                  >
                    <Rond>
                      Télécharger mon CV
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-move-up-right-icon lucide-move-up-right"
                      >
                        <path d="M13 5H19V11" />
                        <path d="M19 5L5 19" />
                      </svg>
                    </Rond>
                  </a>
                </div>
              </section>
              {/* Compétences*/}
              <section className="about-section">
                <div
                  style={{
                    marginTop: "2rem",
                  }}
                >
                  <Titre
                    className="underline decoration-blue-500 text-4xl md:text-5xl lg:text-5xl mb-4 titre-centre"
                    style={{
                      pointerEvents: "auto",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      marginBottom: "3.5rem",
                    }}
                  >
                    Mes compétences
                  </Titre>
                  <div className="flex items-center justify-center gap-15 flex-wrap">
                    <img
                      src="/HTML.png"
                      alt="Logo HTML"
                      className="h-22 w-24"
                    />
                    <img src="/CSS.png" alt="Logo CSS" className="h-22 w-24" />
                    <img
                      src="/REACT.png"
                      alt="Logo React"
                      className="h-22 w-24"
                    />
                    <img
                      src="/PHOTOSHOP.png"
                      alt="Logo Photoshop"
                      className="h-22 w-24"
                    />
                    <img
                      src="/ILLUSTRATOR.png"
                      alt="Logo Illustrator"
                      className="h-22 w-24"
                    />
                    <img
                      src="/DAVINCI.png"
                      alt="Logo DaVinci Resolve"
                      className="h-26 w-26"
                    />
                    <img
                      src="/LIGHTROOM.png"
                      alt="Logo Lightroom"
                      className="h-22 w-24"
                    />
                  </div>
                  <div className="flex justify-center mt-10">
                    <a href="/about" className="mt-5 text-blue-500">
                      <Button>En savoir plus</Button>
                    </a>
                  </div>
                </div>
              </section>
              {/* Mes projets */}
              <section id="projects" className="h-[10vh]"></section>
              <section>
                <div
                  style={{
                    marginTop: "2rem",
                    paddingBottom: "4rem",
                  }}
                >
                  <Titre
                    className="underline decoration-blue-500 text-4xl md:text-5xl lg:text-5xl mb-4 titre-centre"
                    style={{
                      pointerEvents: "auto",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      marginBottom: "3rem",
                    }}
                  >
                    Mes projets
                  </Titre>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "2rem",
                    }}
                  >
                    <div
                      className="flex flex-col md:flex-row gap-4 justify-center items-center"
                      style={{
                        display: "flex",
                        gap: "1rem",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "80%",
                      }}
                    >
                      <Box>
                        <div
                          className="flex flex-col"
                          style={{ height: "100%" }}
                        >
                          <div style={{ width: "100%", height: "120px" }}>
                            <img
                              href="https://www.youtube.com/watch?v=3sGPWYlTL"
                              src="projet1.png"
                              alt="Screen d'une expérience inédite"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                                borderRadius: "12px",
                              }}
                            />
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
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-center"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              marginBottom: "1rem",
                            }}
                          >
                            Une expérience inédite
                          </Titre>
                          <Barre></Barre>
                          <p className="text-xs sm:text-sm md:text-base lg:text-base leading-relaxed text-center px-2 py-2">
                            Une expérience inédite était un projet d'audiovisuel
                            de première année de BUT MMI. Ce premier projet m'a
                            apporté de diverses connaissances.
                          </p>
                        </div>
                        <div className="flex flex-wrap justify-center mt-4 gap-2">
                          <Rond
                            style={{ height: "60px" }}
                            className="text-sm sm:text-xs md:text-sm lg:text-base"
                          >
                            Cadrage
                          </Rond>
                          <Rond
                            style={{ height: "60px" }}
                            className="text-sm sm:text-xs md:text-sm lg:text-base"
                          >
                            Montage
                          </Rond>
                          <Rond
                            style={{ height: "60px", lineHeight: "1.2" }}
                            className="text-sm sm:text-xs md:text-sm lg:text-base"
                          >
                            Gestion de projet
                          </Rond>
                        </div>
                      </Box>
                      <Box>
                        <div
                          className="flex flex-col"
                          style={{ height: "100%" }}
                        >
                          <div style={{ width: "100%", height: "120px" }}>
                            <a href="https://drive.google.com/drive/folders/1yXrkn2ATn9LeiQbIEplQX6epUG-1oxNA?usp=drive_link">
                              <img
                                src="projet2.jpg"
                                alt="Photo journée intégration"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  display: "block",
                                  borderRadius: "12px",
                                }}
                              />
                            </a>
                          </div>
                          <div
                            style={{
                              width: "100%",
                              flex: 1,
                              paddingTop: "1rem",
                            }}
                          >
                            <Titre
                              className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-2 text-center"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                marginBottom: "1rem",
                              }}
                            >
                              Shooting journée intégration
                            </Titre>
                            <Barre></Barre>
                            <p className="text-xs sm:text-sm md:text-base lg:text-base leading-relaxed text-center px-2 py-2">
                              J'ai réalisé un shooting pour la journée
                              d'intégration MMI 2025. Cela a été un bon
                              entraînement car il fallait gérer la partie
                              lumière, qui est importante mais difficile dans ce
                              genre d'endroit.
                            </p>
                          </div>
                          <div className="flex flex-wrap justify-center mt-4 gap-2">
                            <Rond
                              style={{ height: "60px" }}
                              className="text-sm sm:text-xs md:text-sm lg:text-base"
                            >
                              Cadrage
                            </Rond>
                            <Rond
                              style={{ height: "60px" }}
                              className="text-sm sm:text-xs md:text-sm lg:text-base"
                            >
                              Prise de vue
                            </Rond>
                            <Rond
                              style={{ height: "60px", lineHeight: "1.2" }}
                              className="text-sm sm:text-xs md:text-sm lg:text-base"
                            >
                              Retouche
                            </Rond>
                          </div>
                        </div>
                      </Box>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallerie />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>
  );
}

export default App;
