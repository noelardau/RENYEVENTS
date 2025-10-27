import { FaSignOutAlt } from 'react-icons/fa';
import { useUserStore } from '../store/userStore';
import {useNavigate} from 'react-router-dom';


export const HeaderBack = () => {
 

  let {isConnected, setIsConnected} = useUserStore()
  let navigateTo = useNavigate()

  let logout =  () => {
      setIsConnected(false)
      navigateTo("/admin")

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
          isConnected ? 
          <div className="text-xl font-bold text-red-600" onClick={logout}> <FaSignOutAlt></FaSignOutAlt> </div>
            : ""
      

        }
      </div>

    </header>
  );
};
