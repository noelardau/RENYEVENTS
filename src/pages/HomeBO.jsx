import { useEffect, useState } from "react";
import { HeaderBack } from "../components/HeaderBack";
import { LoginForm } from "../components/LoginForm";
import { adminState } from "../exemple_data/adminState";
import { EventManagement } from "./GestionEvent";


export const HomeBO = ()=>{

  useEffect(() => {
   
    }, []);



    function connexion(username,password) {
      
        if(username == "admin" && password == "admin"){
          setIsConnected(true)
        }else{
          alert("identifiant incorrect")
        }


    } 
    
    
    let [isConnected, setIsConnected] = useState(adminState.isConnected)

    return (
          isConnected ?
          
          <EventManagement></EventManagement>
                    :
          <LoginForm onLogin={connexion}></LoginForm>)

        }