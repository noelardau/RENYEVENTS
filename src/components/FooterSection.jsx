
import { FaPhone, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


export const FooterSection = () => {
  const { t } = useTranslation();

return (
    <footer className="footer bg-gray-800 text-white p-10">
        <div className="flex justify-between w-full flex-col md:flex-row gap-8">
            <div>
                <span className="footer-title">RENY Events</span>
                <p>{t("footer-left-text")}</p>
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
                    <p>{t("first-service-title")}</p>
                    <p>{t("second-service-title")}</p>
                    <p>{t("forth-service-title")} </p>
                    <p>{t("third-service-title")}</p>
                </div>
            </div>

            <div>
                <span className="footer-title">Navigation</span>
                <div className="space-x-2 mt-4 flex flex-col">
                    <a href="#hero" className="link link-hover ">{t("home")}</a>
                    <a href="#service" className="link link-hover ">{t("services")}</a>
                    <a href="#about" className="link link-hover ">{t("about")}</a>
                    <a href="#contact" className="link link-hover ">{t("contacts")}</a>
                    <Link to={"/admin"} className="link link-hover ">back office</Link>
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

