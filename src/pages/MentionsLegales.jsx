import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const MentionsLegales = () => {
  return (
    <div className="app-container">
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-bold mb-8 underline decoration-blue-500"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Mentions Légales
          </h1>

          <div className="space-y-8 text-gray-300">
            {/* Éditeur du site */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                1. Éditeur du site
              </h2>
              <p className="leading-relaxed">
                Le site{" "}
                <span className="text-blue-400">abinchet.verceL.app</span> est
                édité par :
              </p>
              <ul className="list-none mt-4 space-y-2 pl-4">
                <li>
                  <strong className="text-white">Nom :</strong> Arthur BINCHET
                </li>
                <li>
                  <strong className="text-white">Statut :</strong> Étudiant en
                  BUT MMI
                </li>
                <li>
                  <strong className="text-white">Email :</strong>{" "}
                  arthurbinchet12@gmail.com
                </li>
                <li>
                  <strong className="text-white">Établissement :</strong> IUT
                  d'Angoulême
                </li>
              </ul>
            </section>

            {/* Hébergement */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                2. Hébergement
              </h2>
              <p className="leading-relaxed">Le site est hébergé par :</p>
              <ul className="list-none mt-4 space-y-2 pl-4">
                <li>
                  <strong className="text-white">Hébergeur :</strong> Vercel
                  Inc.
                </li>
                <li>
                  <strong className="text-white">Adresse :</strong> 340 S Lemon
                  Ave #4133, Walnut, CA 91789, USA
                </li>
                <li>
                  <strong className="text-white">Site web :</strong>{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    vercel.com
                  </a>
                </li>
              </ul>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                3. Propriété intellectuelle
              </h2>
              <p className="leading-relaxed">
                L'ensemble de ce site relève de la législation française et
                internationale sur le droit d'auteur et la propriété
                intellectuelle. Tous les droits de reproduction sont réservés, y
                compris pour les documents téléchargeables et les
                représentations iconographiques et photographiques.
              </p>
              <p className="leading-relaxed mt-4">
                Les photos, vidéos, designs et projets présentés sur ce site
                sont la propriété exclusive d'Arthur BINCHET. Toute
                reproduction, distribution, modification, adaptation,
                retransmission ou publication, même partielle, de ces différents
                éléments est strictement interdite sans l'accord exprès par
                écrit d'Arthur BINCHET d'après l'article 122-4 du Code de la
                propriété intellectuelle*.
              </p>
            </section>

            {/* Données personnelles */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                4. Données personnelles
              </h2>
              <p className="leading-relaxed">
                Conformément à la loi « Informatique et Libertés » du 6 janvier
                1978 modifiée et au Règlement Général sur la Protection des
                Données (RGPD), vous disposez d'un droit d'accès, de
                rectification et de suppression des données vous concernant.
              </p>
              <p className="leading-relaxed mt-4">
                Les informations recueillies via le formulaire de contact sont
                uniquement destinées à permettre la communication avec Arthur
                BINCHET. Elles ne seront en aucun cas cédées à des tiers.
              </p>
              <p className="leading-relaxed mt-4">
                Pour exercer vos droits, vous pouvez contacter :{" "}
                arthurbinchet12@gmail.com
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                5. Cookies
              </h2>
              <p className="leading-relaxed">
                Ce site n'utilise pas de cookies de tracking ou de publicité.
                Seuls des cookies techniques nécessaires au bon fonctionnement
                du site peuvent être utilisés.
              </p>
            </section>

            {/* Crédits */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                6. Crédits
              </h2>
              <p className="leading-relaxed">
                <strong className="text-white">
                  Conception et développement :
                </strong>{" "}
                Arthur BINCHET
              </p>
              <p className="leading-relaxed mt-2">
                <strong className="text-white">Technologies utilisées :</strong>{" "}
                React, Vite, Tailwind CSS, OGL (WebGL)
              </p>
              <p className="leading-relaxed mt-2">
                <strong className="text-white">Photographies :</strong> Arthur
                BINCHET
              </p>
            </section>

            {/* Responsabilité */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                7. Responsabilité
              </h2>
              <p className="leading-relaxed">
                Arthur BINCHET s'efforce d'assurer l'exactitude et la mise à
                jour des informations diffusées sur ce site. Toutefois, il ne
                peut garantir l'exactitude, la précision ou l'exhaustivité des
                informations mises à disposition sur ce site.
              </p>
              <p className="leading-relaxed mt-4">
                En conséquence, Arthur BINCHET décline toute responsabilité pour
                toute imprécision, inexactitude ou omission portant sur des
                informations disponibles sur le site.
              </p>
            </section>

            {/* Liens externes */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                8. Liens externes
              </h2>
              <p className="leading-relaxed">
                Ce site peut contenir des liens vers des sites externes. Arthur
                BINCHET n'exerce aucun contrôle sur ces sites et décline toute
                responsabilité quant à leur contenu.
              </p>
            </section>
          </div>

          {/* Bouton retour */}
          <div className="mt-12 flex justify-center">
            <Link
              to="/"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
