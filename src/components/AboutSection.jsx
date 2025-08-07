import { FaCheckCircle } from "react-icons/fa";
import AboutImage from "../assets/images/A_propos_image.jpg";


export const AboutSection = () => {
  const atouts = [
    "Expertise événementielle reconnue",
    "Respect des délais et budgets",
    "Réseau de partenaires fiables",
    "Solutions personnalisées",
    "Équipe professionnelle dédiée",
    "Innovation et créativité",
  ];

  return (
    <section className="py-10 px-4 pt-[88px] md:px-10 lg:px-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs text-red-500 font-semibold uppercase">Notre Histoire</span>

        <div className="flex flex-col lg:flex-row gap-10 items-start mt-4">
 
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              RENY Events, organisateur événementiel d'expérience
            </h2>
            <p className="text-gray-700 mb-4 text-sm md:text-base">
              Spécialisés dans l'organisation d'événements professionnels, nous mettons notre expertise au service de vos séminaires, spectacles, foires, conférences et de tous vos projets événementiels.
            </p>

            <h3 className="font-semibold text-lg mb-2">Notre Expertise</h3>
            <p className="text-gray-700 mb-4 text-sm md:text-base">
              Fort de nombreuses années d'expérience dans l'organisation événementielle, RENY Events s'est forgé une solide réputation dans la gestion complète d'événements professionnels de toute envergure.
              Nous combinons créativité, rigueur opérationnelle et excellence du service.
            </p>

            <h3 className="font-semibold text-lg mb-2">Nos atouts</h3>
            <ul className="text-gray-700 space-y-2 text-sm md:text-base">
              {atouts.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaCheckCircle className="text-red-500 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-lg mt-6 mb-2">Notre siège</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Pavillon 2, Cité Premier Ampandrana – Au cœur de notre communauté, nous restons proches de nos clients pour mieux les servir.
            </p>
          </div>


          <div className="flex-1 h-64 md:h-auto">
            <img
              src={AboutImage}
              height={500}
              alt="Notre Histoire"
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>
      <div  id="contact"></div>
    </section>
  );
}
