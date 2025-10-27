
import { HeaderBack } from "../components/HeaderBack";

import { Outlet } from "react-router-dom";

export const BackOffice = ()=>{

  
    return (
      <div className="w-full overflow-x-hidden">
        
        <HeaderBack />

        <Outlet></Outlet>
        
       

      </div>
    );
}