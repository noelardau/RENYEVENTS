import { FaMusic, FaHandshake, FaBullhorn, FaChalkboardTeacher, FaBuilding, FaComments } from 'react-icons/fa';

const services = [
  {
    icon: <FaChalkboardTeacher className="text-2xl text-red-500" />,
    title: "Séminaires & formations",
    items: [
      "Organisation de conférences, séminaires, formations, ateliers et workshops",
      "Salle équipée",
      "Matériel audiovisuel"
    ],
  },
  {
    icon: <FaMusic className="text-2xl text-red-500" />,
    title: "Spectacles & Shows",
    items: [
      "Soirée d’entreprise",
      "Concerts",
      "Coordination artistique"
    ],
  },
  {
    icon: <FaHandshake className="text-2xl text-red-500" />,
    title: "Foires & Salons",
    items: [
      "Stands personnalisés",
      "Logistique complète",
      "Promotion événementielle"
    ],
  },
  {
    icon: <FaComments className="text-2xl text-red-500" />,
    title: "Conférences",
    items: [
      "Organisation de webinaires, colloques et conférences de presse",
      "Décoration événementielle",
      "Matériel audiovisuel"
    ],
  },
  {
    icon: <FaBuilding className="text-2xl text-red-500" />,
    title: "Événements Corporate",
    items: [
      "Concept global",
      "Coordination logistique",
      "Communication intégrée"
    ],
  },
  {
    icon: <FaBullhorn className="text-2xl text-red-500" />,
    title: "Relations Publiques",
    items: [
      "Plan de communication",
      "Invitation média",
      "Gestion de presse"
    ],
  },
];



export const ServiceSection = ()=>{

    return (
    <section className="py-10 px-4 md:px-10 lg:px-20 bg-white" id="service">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Nos Services d'Organisation Événementielle
        </h2>
        <p className="text-gray-600 mb-10 text-sm md:text-base max-w-2xl mx-auto">
          De la conception à la réalisation, RENY Events vous accompagne dans tous vos projets événementiels avec un savoir-faire reconnu et une approche personnalisée.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-5 text-left shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center mb-3">
                {service.icon}
                <h3 className="ml-2 font-semibold text-lg">{service.title}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}