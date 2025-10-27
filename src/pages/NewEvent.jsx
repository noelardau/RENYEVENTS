
import { Link } from "react-router-dom";

export const NewEventForm = () => {
  return (
    <div className="container mx-auto p-4 pt-30 bg-white min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Nouvel événement</h2>
        <p className="text-gray-500 mb-6">Créez un nouvel événement à venir</p>
        <form className="space-y-4 bg-white">
          <div>
            <label className="block text-sm font-medium text-gray-700">Titre de l'événement *</label>
            <input
              type="text"
              className="input input-bordered border-1 border-red-100 w-full mt-1  bg-white"
              placeholder="Ex: Séminaire d'entreprise"
            />
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-gray-700">Type d'événement *</label>
              <select className="select select-bordered border-1 border-red-100 w-full mt-1 bg-white">
                <option>Séminaire</option>
              </select>
            </div>
            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-gray-700">Date de l'événement *</label>
              <input
                type="text"
                className="input input-bordered w-full mt-1 bg-white border-1 border-red-100"
                placeholder="mm/dd/yyyy"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Lieu *</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1 bg-white border-1 border-red-100"
              placeholder="Ex: Paris, France"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description *</label>
            <textarea
              className="textarea textarea-bordered w-full mt-1 h-24 bg-white border-1 border-red-100"
              placeholder="Décrivez l'événement..."
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium ">URL de l'image (optionnel)</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1 bg-white border-1 border-red-100"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-4">
            <button type="button" className="btn btn-ghost w-full md:w-auto"><Link to="/admin">Annuler</Link></button>
            <button type="submit" className="btn bg-red-600 text-white w-full md:w-auto">Créer événement</button>
          </div>
        </form>
      </div>
    </div>
  );
};