import { FaSignOutAlt } from 'react-icons/fa';
import { adminState } from '../exemple_data/adminState';


export const HeaderBack = ({  onLogout }) => {
 
  let logout =  () => {
      onLogout()
  }

  return (
    <header className="w-full shadow-md bg-white fixed top-0 left-0 right-0 z-20">
      <div className="flex items-center justify-between p-4">
        {/* Titre toujours à gauche */}
        <div className="text-xl font-bold text-red-600">
          Reny Events <br />
          <div className="text-sm text-black">Back Office</div>
        </div>
        
        {
          adminState.isConnected ? 
          <div className="text-xl font-bold text-red-600" onClick={logout}> <FaSignOutAlt></FaSignOutAlt> </div>
            : ""
      

        }
      </div>

    </header>
  );
};
