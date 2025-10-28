import { FaSignOutAlt, FaArrowLeft } from 'react-icons/fa';
import { useUserStore } from '../store/userStore';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

const LogoutConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Se déconnecter</h3>
        <p className="text-gray-600 mb-6">Êtes-vous sûr de vouloir vous déconnecter ?</p>
        <div className="flex justify-end space-x-3">
          <button onClick={onClose} className="btn btn-ghost">Annuler</button>
          <button onClick={onConfirm} className="btn bg-red-600 text-white hover:bg-red-700">Se déconnecter</button>
        </div>
      </div>
    </div>
  );
};


export const HeaderBack = () => {
 

  let {isConnected, setIsConnected} = useUserStore()
  let navigateTo = useNavigate()
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  const openLogoutModal = () => setShowLogoutModal(true)
  const closeLogoutModal = () => setShowLogoutModal(false)

  const logout = () => {
    // keep existing behavior: setIsConnected to false and navigate
    setIsConnected(false)
    navigateTo("/admin")
  }

  const confirmAndLogout = () => {
    logout()
    closeLogoutModal()
  }

  return (
    <header className="w-full shadow-md bg-white fixed top-0 left-0 right-0 z-20">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-red-600 hover:text-red-700" title="Retour au site">
            <FaArrowLeft className="text-xl" />
          </Link>
          <div className="text-xl font-bold text-red-600">
            Reny Events <br />
            <div className="text-sm text-black">Back Office</div>
          </div>
        </div>
        
        {
          isConnected ? (
            <>
              <div className="text-xl font-bold text-red-600 cursor-pointer" onClick={openLogoutModal} aria-label="logout"> <FaSignOutAlt /> </div>
              <LogoutConfirmModal isOpen={showLogoutModal} onClose={closeLogoutModal} onConfirm={confirmAndLogout} />
            </>
          ) : ""
        }
      </div>

    </header>
  );
};
