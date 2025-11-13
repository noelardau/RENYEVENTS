import hero_image from  "../assets/images/newHeroImage.jpeg" 
import { useTranslation } from 'react-i18next';

export const HeroSection = () => {

  const { t } = useTranslation();

        return (
    <section className="hero-padding mt-[90px] md:pt-[88px] w-full" id="hero">
      <div className="hero-root-layout">
        {/* Texte à gauche */}
        <div className="hero-left-side-style">
     
         <h1 className="text-4xl font-bold leading-snug">
           {t('hero-section-title')} <br />
          {t('hero-section-title-1')}<span className="text-red-600">{t('hero-section-title-2')}</span>
         
          </h1>

          <p className="text-gray-700">
            {t("hero-section-text")}
          </p>

          <div className="hero-button-layout">
            <a href="#service" className="hero-button-service-style">
              {t("see-services-btn")}
            </a>
            <a href="#contact" className="hero-button-contact-style" >
                            {t("contact-btn")}

            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 py-20 ">
          <img
            src={hero_image}
            alt="Événement RENY"
            className="rounded-xl shadow-md w-full object-cover" 
          />
        </div>
      </div>
    </section>
  );

}