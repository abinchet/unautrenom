import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const PolitiqueConfidentialite = () => {
  return (
    <div className="app-container">
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-bold mb-8 underline decoration-blue-500"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Politique de Confidentialité
          </h1>

          <div className="space-y-8 text-gray-300">
            {/* Introduction */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Introduction
              </h2>
              <p className="leading-relaxed">
                La présente politique de confidentialité a pour but de vous
                informer sur la manière dont nous collectons, utilisons et
                protégeons vos données personnelles lorsque vous visitez notre
                site web{" "}
                <span className="text-blue-400">abinchet.vercel.app</span>.
              </p>
              <p className="leading-relaxed mt-4">
                Nous nous engageons à respecter votre vie privée et à protéger
                vos données conformément au Règlement Général sur la Protection
                des Données (RGPD).
              </p>
            </section>

            {/* Données collectées */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                1. Données Collectées
              </h2>
              <h3 className="text-xl font-semibold mb-3 text-white">
                1.1 Données que vous nous fournissez
              </h3>
              <p className="leading-relaxed mb-4">
                Lorsque vous utilisez notre formulaire de contact, nous
                collectons les informations suivantes :
              </p>
              <ul className="list-none mt-4 space-y-2 pl-4">
                <li>• Votre nom et prénom</li>
                <li>• Votre adresse e-mail</li>
                <li>• Le contenu de votre message</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-white">
                1.2 Données collectées automatiquement
              </h3>
              <p className="leading-relaxed mb-4">
                Lors de votre visite, certaines données techniques peuvent être
                collectées automatiquement :
              </p>
              <ul className="list-none mt-4 space-y-2 pl-4">
                <li>• Adresse IP</li>
                <li>• Type de navigateur et version</li>
                <li>• Système d'exploitation</li>
                <li>• Pages visitées et durée de visite</li>
                <li>• Données de navigation (via les logs du serveur)</li>
              </ul>
            </section>

            {/* Utilisation des données */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                2. Utilisation des Données
              </h2>
              <p className="leading-relaxed mb-4">
                Les données collectées sont utilisées pour les finalités
                suivantes :
              </p>
              <ul className="list-none mt-4 space-y-2 pl-4">
                <li>• Répondre à vos demandes via le formulaire de contact</li>
                <li>• Améliorer l'expérience utilisateur du site</li>
                <li>• Assurer la sécurité et la maintenance du site</li>
                <li>
                  • Analyser l'utilisation du site pour optimiser son contenu
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                Nous ne vendons, ne louons ni ne partageons vos données
                personnelles avec des tiers à des fins commerciales.
              </p>
            </section>

            {/* Conservation des données */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                3. Conservation des Données
              </h2>
              <p className="leading-relaxed">
                Vos données personnelles sont conservées uniquement le temps
                nécessaire aux finalités pour lesquelles elles ont été
                collectées :
              </p>
              <ul className="list-none mt-4 space-y-2 pl-4">
                <li>
                  • Les messages du formulaire de contact sont conservés pendant
                  3 ans maximum
                </li>
                <li>
                  • Les données de navigation (logs) sont conservées pendant 12
                  mois maximum
                </li>
              </ul>
            </section>

            {/* Sécurité */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                4. Sécurité des Données
              </h2>
              <p className="leading-relaxed">
                Nous mettons en œuvre des mesures de sécurité techniques et
                organisationnelles appropriées pour protéger vos données
                personnelles contre la perte, l'utilisation abusive, l'accès non
                autorisé, la divulgation, l'altération ou la destruction :
              </p>
              <ul className="list-none mt-4 space-y-2 pl-4">
                <li>• Chiffrement des données en transit (HTTPS)</li>
                <li>• Hébergement sécurisé chez Vercel</li>
                <li>• Accès restreint aux données personnelles</li>
                <li>• Sauvegardes régulières</li>
              </ul>
            </section>

            {/* Vos droits */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                5. Vos Droits (RGPD)
              </h2>
              <p className="leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants
                concernant vos données personnelles :
              </p>
              <ul className="list-none mt-4 space-y-2 pl-4">
                <li>
                  <strong className="text-white">Droit d'accès :</strong>{" "}
                  Obtenir une copie de vos données
                </li>
                <li>
                  <strong className="text-white">
                    Droit de rectification :
                  </strong>{" "}
                  Corriger des données inexactes
                </li>
                <li>
                  <strong className="text-white">Droit à l'effacement :</strong>{" "}
                  Demander la suppression de vos données
                </li>
                <li>
                  <strong className="text-white">
                    Droit à la limitation :
                  </strong>{" "}
                  Limiter le traitement de vos données
                </li>
                <li>
                  <strong className="text-white">Droit d'opposition :</strong>{" "}
                  Vous opposer au traitement de vos données
                </li>
                <li>
                  <strong className="text-white">
                    Droit à la portabilité :
                  </strong>{" "}
                  Recevoir vos données dans un format structuré
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à l'adresse :{" "}
                <a
                  href="mailto:arthurbinchet12@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  arthurbinchet12@gmail.com
                </a>
              </p>
            </section>

            {/* Services tiers */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                6. Services Tiers
              </h2>
              <p className="leading-relaxed mb-4">
                Notre site utilise les services tiers suivants :
              </p>
              <ul className="list-none mt-4 space-y-2 pl-4">
                <li>
                  <strong className="text-white">Vercel :</strong> Hébergement
                  du site web
                </li>
                <li>
                  <strong className="text-white">Formspree :</strong> Traitement
                  des formulaires de contact
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                Ces services ont leurs propres politiques de confidentialité et
                peuvent collecter des données conformément à leurs conditions
                d'utilisation.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                7. Modifications de la Politique
              </h2>
              <p className="leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de
                confidentialité à tout moment. Les modifications seront publiées
                sur cette page avec une date de mise à jour. Nous vous
                encourageons à consulter régulièrement cette page.
              </p>
              <p className="leading-relaxed mt-4">
                <strong className="text-white">Dernière mise à jour :</strong>{" "}
                25 novembre 2025
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                8. Contact
              </h2>
              <p className="leading-relaxed mb-4">
                Pour toute question concernant cette politique de
                confidentialité ou pour exercer vos droits, vous pouvez nous
                contacter :
              </p>
              <ul className="list-none space-y-2 pl-4">
                <li>
                  <strong className="text-white">Par e-mail :</strong>{" "}
                  <a
                    href="mailto:arthurbinchet12@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    arthurbinchet12@gmail.com
                  </a>
                </li>
                <li>
                  <strong className="text-white">
                    Responsable du traitement :
                  </strong>{" "}
                  Arthur BINCHET
                </li>
              </ul>
            </section>
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
    </div>
  );
};

export default PolitiqueConfidentialite;
