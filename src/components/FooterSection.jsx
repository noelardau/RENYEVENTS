
import { FaPhone, FaFax, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';

export const FooterSection = () => {
return (
    <footer className="footer bg-gray-800 text-white p-10">
        <div className="grid grid-flow-col gap-8">{/* Increased gap from 4 to 8 */}
            <div>
                <span className="footer-title">RENY Events</span>
                <p>Organisateur d’événements professionnels, associatifs, culturels, sportifs, corporatifs et tous vos événements divers, conférences et foires.</p>
                <div className="flex items-start mt-2">
                    <FaPhone className="text-red-600 mr-2 mt-1" />
                    <div className="flex flex-col">
                        <span>038 22 74 91</span>
                        <span>038 00 01 08</span>
                    </div>
                </div>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center mt-2">
                    <FaFacebook className="text-red-600 h-5 w-5" />
                    <span>Reny events</span>
                </a>
                <div className="flex items-center mt-2">
                    <FaMapMarkerAlt className="text-red-600 mr-2" />
                    <span>1 Pavillon 2, Cité Perrier, Amphandra</span>
                </div>
            </div>

            <div>
                <span className="footer-title">Nos services</span>
                <div className="space-y-2 mt-4">
                    <p>Séminaires et formations</p>
                    <p>Spéctacles & shows</p>
                    <p>Conférences</p>
                    <p>Foires</p>
                </div>
            </div>

            <div>
                <span className="footer-title">Navigation</span>
                <div className="space-y-2 mt-4">
                    <a href="#hero" className="link link-hover px-2">Accueil</a>
                    <a href="#service" className="link link-hover px-2">Services</a>
                    <a href="#about" className="link link-hover px-2">A propos</a>
                    <a href="#contact" className="link link-hover px-2">Contacts</a>
                </div>
            </div>
        </div>

        <div className="w-full flex justify-between mt-8">
            <span>© 2025 RENY Events. Tous droits réservés.</span>
            <span>Organisateur événementiel professionnel.</span>
        </div>
    </footer>
);
};

