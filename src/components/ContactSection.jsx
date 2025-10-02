import { FaPhoneAlt, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


export const ContactSection = () => {
    const { t } = useTranslation();

return (
    // I think I should use variable to make these fucking class more clear
    <section className="py-10 pt-[88px] px-4 md:px-10 lg:px-20 bg-white w-full">
        <div className="max-w-7xl mx-auto">
        
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold">{t("contact-section-title")}</h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                    {t("contact-section-text")}
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 items-start">
            
                <div className="w-full lg:w-1/2 space-y-6">
                    <h3 className="font-semibold text-lg">{t("contact-section-left-side-title")}</h3>
                    <p className="text-sm text-gray-700">
                        {t("contact-section-left-side-text")}
                    </p>
                    <div className="flex items-start gap-3">
                        <FaPhoneAlt className="text-red-500 mt-1" />
                        <div>
                            <h4 className="font-semibold">Téléphones</h4>
                            <p className="text-sm text-gray-700">
                                038 32 746 01 / 034 80 001 88<br />
                                Disponible 7j/7
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <FaFacebook className="text-red-500 mt-1" />
                        <div>
                            <h4 className="font-semibold">Facebook</h4>
                            <p className="text-sm text-gray-700">Reny Events<br />{t('Suivez nos actualités')}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-red-500 mt-1" />
                        <div>
                            <h4 className="font-semibold">{t("Adresse")}</h4>
                            <p className="text-sm text-gray-700">
                                Pavillon 2, Cité Perrier Ampandrana
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
                        <h3 className="font-semibold text-lg mb-4">{t('Envoyer un mail')}</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            {t("contact-section-right-side-text")}
                        </p>

                        <form className="space-y-4">
                            <textarea
                                className="textarea-event-style"
                                placeholder={t("contact-section-placeholder")}
                                rows="4"
                            ></textarea>

                            <button
                                type="submit"
                                className="button-submit-event-description"
                            >
                                {t('Envoyer')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
}
