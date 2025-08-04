import { FaPhoneAlt, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <section className="py-10 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
      
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Contactez RENY Events</h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Vous avez un projet d'événement ? Contactez-nous dès maintenant pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
        
          <div className="w-full lg:w-1/3 space-y-6">
            <h3 className="font-semibold text-lg">Restons en contact</h3>
            <p className="text-sm text-gray-700">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans la réalisation de vos projets événementiels.
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
                <p className="text-sm text-gray-700">Reny Events<br />Suivez nos actualités</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-500 mt-1" />
              <div>
                <h4 className="font-semibold">Adresse</h4>
                <p className="text-sm text-gray-700">
                  Pavillon 2, Cité Perrier Ampandrana
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-lg mb-4">Demande de Devis Gratuit</h3>
              <p className="text-sm text-gray-600 mb-4">
                Décrivez-nous votre projet et nous vous recontacterons rapidement avec une proposition personnalisée.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Votre prénom" className="input input-bordered w-full text-sm" required />
                  <input type="text" placeholder="Votre nom" className="input input-bordered w-full text-sm" required />
                  <input type="email" placeholder="Votre@gmail.com" className="input input-bordered w-full text-sm" required />
                  <input type="tel" placeholder="Votre numéro" className="input input-bordered w-full text-sm" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select className="select select-bordered w-full text-sm">
                    <option disabled selected>Sélectionner un type</option>
                    <option>Conférence</option>
                    <option>Salon</option>
                    <option>Show</option>
                  </select>
                  <input type="text" placeholder="Nombre de participant" className="input input-bordered w-full text-sm" />
                </div>

                <input type="date" className="input input-bordered w-full text-sm" />

                <textarea
                  className="textarea textarea-bordered w-full text-sm"
                  placeholder="Décrivez-nous votre évènement: objectif, format..."
                  rows="4"
                ></textarea>

                <button type="submit" className="btn btn-error w-full text-white font-semibold">
                  Envoyer ma demande de devis
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
