import { Link } from "react-router-dom";

export const EventManagement = () => {

    let events = [
        {id:1, title:"Event 1", date:"2024-07-01", location:"Location 1", description:"Description 1"},
        {id:2, title:"Event 2", date:"2024-07-07", location:"Location 1", description:"Description 1"},
    ]
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
        {
            events.length === 0 ? (
              <div className="flex justify-center items-center flex-col text-center text-gray-400">
          <span className="text-4xl mb-4" role="img" aria-label="calendar">📅</span>
          <p className="text-lg">Aucun événement pour le moment</p>
          <p className="text-sm">Créez votre premier événement pour commencer</p>
        </div>
            ) : (
                <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left text-gray-600">Titre</th>
                    <th className="px-4 py-2 text-left text-gray-600">Date</th>
                    <th className="px-4 py-2 text-left text-gray-600">Lieu</th>
                    <th className="px-4 py-2 text-left text-gray-600">Description</th>
                    <th className="px-4 py-2 text-left text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={event.id   } className="border-b"> 
                        <td className="px-4 py-2">{event.title}</td>
                        <td className="px-4 py-2">{event.date}</td>
                        <td className="px-4 py-2">{event.location}</td>
                        <td className="px-4 py-2">{event.description}</td>
                        <td className="px-4 py-2">
                            <button className="btn btn-sm bg-blue-600 text-white mr-2">Éditer</button>
                            <button className="btn btn-sm bg-red-600 text-white">Supprimer</button>
                        </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )         
        }
      </div>
    </div>
  );
};