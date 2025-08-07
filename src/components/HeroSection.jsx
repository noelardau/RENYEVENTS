
import heroImage from  "../assets/images/heroSectionImage.jpg" 
export const HeroSection = () => {

        return (
    <section className="px-6 py-10 bg-white" id="hero">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Texte à gauche */}
        <div className="text-center md:text-left max-w-xl space-y-6">
          <h1 className="text-4xl font-bold leading-snug">
            Votre partenaire <br />
            pour des <span className="text-red-600">évènements memorables</span>
          </h1>

          <p className="text-gray-700">
            RENY Events organise vos séminaires, spectacles, foires, conférences et tous vos
            évènements professionnels avec expertise et créativité. Faites de vos projets des succès inoubliables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#service" className="btn bg-red-600 text-white hover:bg-red-700 border-none">
              Découvrir nos services
            </a>
            <a href="#contact" className="btn text-red-500 btn-outline hover:bg-gray-100">
              Nous contacter
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 py-20 ">
          <img
            src={heroImage}
            alt="Événement RENY"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>
      </div>
    </section>
  );

}