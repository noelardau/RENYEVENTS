import { Link } from "react-router-dom";

export const EventManagement = () => {
  return (
    <div className="container pt-30 mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Gestion des événements</h2>
          <p className="text-gray-500">Créez et gérez vos événements à venir</p>
        </div>
        <button className="btn bg-red-600 text-white"> <Link to="/admin/createEvent">+ Nouvel événement</Link> </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <div className="flex justify-center items-center flex-col text-center text-gray-400">
          <span className="text-4xl mb-4" role="img" aria-label="calendar">📅</span>
          <p className="text-lg">Aucun événement pour le moment</p>
          <p className="text-sm">Créez votre premier événement pour commencer</p>
        </div>
      </div>
    </div>
  );
};