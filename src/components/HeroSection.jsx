import hero_image from  "../assets/images/heroSectionImage.jpg" 

export const HeroSection = () => {

        return (
    <section className="hero-padding" id="hero">
      <div className="hero-root-layout">
        {/* Texte à gauche */}
        <div className="hero-left-side-style">
          <h1 className="text-4xl font-bold leading-snug">
            Votre partenaire <br />
            pour des <span className="text-red-600">évènements memorables</span>
          </h1>

          <p className="text-gray-700">
            RENY Events organise vos séminaires, spectacles, foires, conférences et tous vos
            évènements professionnels avec expertise et créativité. Faites de vos projets des succès inoubliables.
          </p>

          <div className="hero-button-layout">
            <a href="#service" className="hero-button-service-style">
              Découvrir nos services
            </a>
            <a href="#contact" className="hero-button-contact-style">
              Nous contacter
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