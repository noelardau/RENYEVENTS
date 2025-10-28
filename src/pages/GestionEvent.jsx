import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEventStore } from "../store/eventStore";

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, eventTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirmer la suppression</h3>
        <p className="text-gray-600 mb-6">
          Êtes-vous sûr de vouloir supprimer l'événement "{eventTitle}" ? Cette action est irréversible.
        </p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="btn btn-ghost"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            className="btn bg-red-600 text-white hover:bg-red-700"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export const EventManagement = () => {
  

    const {events, removeEventById} = useEventStore();
    
    const [deleteModal, setDeleteModal] = useState({ show: false, eventId: null, eventTitle: "" });

    const handleDeleteClick = (event) => {
      setDeleteModal({ show: true, eventId: event.id, eventTitle: event.title });
    };

    const handleDeleteConfirm = () => {
      try {
        // Simuler une suppression avec un délai pour montrer le toast
        setTimeout(() => {

          removeEventById(deleteModal.eventId);
          toast.success("Événement supprimé avec succès !");
          setDeleteModal({ show: false, eventId: null, eventTitle: "" });
        }, 500);
      } catch (error) {

        toast.error("Erreur lors de la suppression de l'événement");
      throw error;
      }
    };
  return (
    <div className="container pt-30 mx-auto p-6 bg-gray-50 min-h-screen">
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <DeleteConfirmModal 
        isOpen={deleteModal.show}
        onClose={() => setDeleteModal({ show: false, eventId: null, eventTitle: "" })}
        onConfirm={handleDeleteConfirm}
        eventTitle={deleteModal.eventTitle}
      />

      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Gestion des événements</h2>
          <p className="text-gray-500">Créez et gérez vos événements à venir</p>
        </div>
       <Link to="/admin/createEvent"> <button className="btn bg-red-600 text-white"> + Nouvel événement </button></Link>
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
                    <tr key={event.titre} className="border-b"> 
                        <td className="px-4 py-2">{event.titre}</td>
                        <td className="px-4 py-2">{event.date_debut}</td>
                        <td className="px-4 py-2">{event.lieu}</td>
                        <td className="px-4 py-2">{event.image}</td>
                        <td className="px-4 py-2">
                           
                           <Link to={"editEvent/"+event.id}>
                              <button className="btn btn-sm bg-blue-600 text-white mr-2">Éditer</button>
                           </Link> 
                            
                            <button 
                              onClick={() => handleDeleteClick(event)}
                              className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
                            >
                              Supprimer
                            </button>
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