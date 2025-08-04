
import { FaPhone, FaFax, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';

export const FooterSection = () => {
  return (
    <footer className="footer bg-gray-800 text-white p-10">
      <div className="grid grid-flow-col gap-4">
    
        <div>
          <span className="footer-title">RENY Events</span>
          <p>Organisateur d’événements professionnels, associatifs, culturels, sportifs, corporatifs et tous vos événements divers, conférences et foires.</p>
          <div className="flex items-center mt-2">
            <FaPhone className="text-error mr-2" />
            <span>038 22 74 91</span>
          </div>
          <div className="flex items-center mt-2">
            <FaFax className="text-error mr-2" />
            <span>038 00 01 08</span>
          </div>
          <a href="https://www.facebook.com/RENYEvents" target="_blank" rel="noopener noreferrer" className="flex items-center mt-2">
            <FaFacebook className="text-error h-5 w-5" />
          </a>
          <div className="flex items-center mt-2">
            <FaMapMarkerAlt className="text-error mr-2" />
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
            <a href="/" className="link link-hover">Accueil</a>
            <a href="/services" className="link link-hover">Services</a>
            <a href="/a-propos" className="link link-hover">A propos</a>
            <a href="/contacts" className="link link-hover">Contacts</a>
          </div>
        </div>
      </div>

 
      <div className="w-full flex justify-between mt-8">
        <span>© 2023 RENY Events. Tous droits réservés.</span>
        <span>Organisateur événementiel professionnel.</span>
      </div>
    </footer>
  );
};

